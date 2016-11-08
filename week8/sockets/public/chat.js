angular.module('app', [])

angular.module('app')
    .controller('chatController', ['$scope', '$http', function ($scope, $http) {
        var chat = this;
        chat.username = ''
        chat.room = ''
        chat.chatMessage = ''
        chat.messageHistory = []
        chat.tweetHistory = []

        // calling `io()` fires the `connection` event on the server
        var socket = io();
        // console.log('Socket', socket);

        // if we receive a shout message, add it to the chat history
        socket.on('shout', function (data) {
            data.sender += ' (ALL)';
            console.log(data.sender + ':' + data.content);
            chat.messageHistory.push(data);
            // we do this so that our messages show up instantly without having to refresh the page
            $scope.$apply();
        });
        // send a message to ALL clients
        chat.sendShout = function (event) {
            console.log("Shout to ALL from", chat.username, ":", chat.message);
            socket.emit('shout', {
                sender: chat.username,
                content: chat.message
            });
            chat.chatMessage = '';
        };

        // create a room and join it
        chat.join = function (event) {
            console.log(chat.username, "joined", chat.room, "room.");
            socket.emit('join', {
                sender: chat.username,
                room: chat.room,
            });
        };
        // leave a room
        chat.leave = function (event) {
            console.log(chat.username, "joined", chat.room, "room.");
            socket.emit('leave', {
                sender: chat.username,
                room: chat.room,
            });
            chat.room = '';
        };
        // if we receive a talk message, add it to the chat history
        socket.on('talk', function (data) {
            data.sender += ' (' + data.room + ')';
            console.log(data.sender + ': ' + data.content);
            chat.messageHistory.push(data);
            $scope.$apply();
        });
        // send a message only to clients in the specified room
        chat.sendTalk = function (event) {
            if (chat.room) {
                console.log("Talk in room", chat.room, "from", chat.username, ":", chat.message);
                socket.emit('talk', {
                    room: chat.room,    // add the room to the data we are emitting
                    sender: chat.username,
                    content: chat.message
                });
                chat.chatMessage = '';
            };
        };

        // we need to explicitly login in order to let the server build an array
        // of {user/socket} objects so we can send direct messages to this user
        chat.login = function () {
            console.log("Login", chat.username);
            socket.emit('login', {
                sender: chat.username
            });
        };
        // if we receive a whisper message, add it to the chat history
        socket.on('whisper', function (data) {
            data.sender += ' (Private)';
            console.log(data.sender + ':' + data.content);
            chat.messageHistory.push(data);
            $scope.$apply();
        });
        // send a message to a specific recipient
        chat.sendWhisper = function (event) {
            if (chat.recipient) {
                console.log("Whisper to ", chat.recipient, "from", chat.username, ":", chat.message);
                socket.emit('whisper', {
                    recipient: chat.recipient,  // add the recipient to the data we are emitting
                    sender: chat.username,
                    content: chat.message
                });
                chat.chatMessage = '';
            };
        };

        // TWITTER Feed
        // This is an example of the server streaming data to the client on a socket 
        // Listening for the 'tweet' socket event emitted by the server
        // if we receive a tweet event, add it to the tweet history
        socket.on("tweeter", function (data) {
            console.log("adding tweet", data.text);
            // add the new tweet to the top of the tweet history
            chat.tweetHistory.unshift(data.text + '\n');
            // only display a max of the 25 most recent tweets
            if (chat.tweetHistory.length > 25) {
                // remove the 26th tweet from the bottom of the tweet history
                chat.tweetHistory.pop();
            };
            $scope.$apply();
        });
        // send a track event so the twitter stream on the server knows what to track
        chat.track = function (event) {
            if (chat.trackKey) {
                console.log("twit", chat.trackKey);
                socket.emit('track', chat.trackKey);
            }
        };        
        // send an untrack event so the twitter stream on the server knows what to stop tracking
        chat.untrack = function (event) {
            if (chat.trackKey) {
                console.log("untwit", chat.trackKey);
                socket.emit('untrack', chat.trackKey);
            }
        };
    }]);