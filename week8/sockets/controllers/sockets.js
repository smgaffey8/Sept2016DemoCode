
// SocketIO require
var io = require('socket.io'),
    // this is the twitter node stream module
    nodeTweetStream = require('node-tweet-stream');

// Twitter API require
// You will need to create Twitter authentication key, secret, token, etc.
// I then store those values in my .bashrc so that they are not stored in the public repository.
// For example:  export TWITTER.CONSUMER.KEY='Aasd878qwekbvDf69a923rbllasdo8'
// I can refer to those values from the environment and keep my code clean.
var twitterStream = nodeTweetStream({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_TOKEN,
    token_secret: process.env.TWITTER_TOKEN_SECRET
});

module.exports = (app, PORT) => {
    console.log("Loading sockets");
    // Let socket.io listen in on our server
    var socketServer = io(app.server);
    var sockets = [];

    // Listen for the socket connection event
    // Coming from the io() call on the front end
    socketServer.on('connection', (socket) => {
        console.log('Socket server conntected through port:', PORT);


        // if we get a shout event, send the message back out to ALL clients
        socket.on('shout', function (data) {
            console.log("Received a shout from", data.sender, ":", data.content);
            // send a message to all rooms/users
            socketServer.emit('shout', data);
        });

        // if we get a join event, add this room to our client socket using socket.join()
        socket.on('join', (data) => {
            console.log(data.sender, "joined room", data.room);
            socket.join(data.room);
            socketServer.to(data.room).emit('talk', { sender: "System", room: data.room, content: data.sender + ' entered the ' + data.room + ' room' });
        });
        // if we get a leave event, remove this room to our client socket using socket.leave()
        socket.on('leave', (data) => {
            console.log(data.sender, "left room", data.room);
            socketServer.to(data.room).emit('talk', { sender: "System", room: data.room, content: data.sender + ' left the ' + data.room + ' room' });
            socket.leave();
            sockets[data.sender] = null;
        });
        // if we get a talk event, send the message back out to all clients in the specific room
        socket.on('talk', function (data) {
            console.log("Received a talk from", data.sender, ":", data.content);
            // send a message to a specific "room" (roomName)
            socketServer.to(data.room).emit('talk', data);
        });


        // we need to create an array of {user/socket} objects so we can later send
        // a message to a user's socket directly
        socket.on('login', (data) => {
            console.log(data.sender, "logged in");
            sockets.push({ user: data.sender, socket: socket });
        });
        // find the socket for the specified user and send the message to that socket only
        socket.on('whisper', function (data) {
            console.log("Received a whisper from", data.sender, " to", data.recipient + ":", data.content);
            // send a message to a specific person
            // first, find the {user/socket} object with the specified user name
            var privateSocket = sockets.find(function (el) {
                return el.user === data.recipient;
            });
            // if we found a socket, send the message to that socket only (not the sockerServer)
            if (privateSocket) {
                console.log("Whispering to ", data.recipient, ":", data.content);
                privateSocket.socket.emit('whisper', data);
            } else {
                // if we found no {user/socket} object for the specified user, send an error message back to the sender
                console.log("Could not whisper to ", data.recipient, ":", data.content);
                data.content = "Could not find " + data.recipient + ". Message not sent.";
                var mySocket = sockets.find(function (el) {
                    return el.user === data.sender;
                });
                mySocket.socket.emit('whisper', data);
            }
        });

        // TWITTER
        // if the client sends a string to search with, start tracking the twitter stream with that string
        socket.on('track', (data) => {
            // note that data is only a string - not an object
            console.log("Tracking", data);
            // Set which tweets to track if we have a stream and a string to search on
            if (twitterStream && data) {
                twitterStream.track(data);
            }
        });        
        socket.on('untrack', (data) => {
            // note that data is only a string - not an object
            console.log("Stop Tracking");
            // Set which tweets to track if we have a stream and a string to search on
            if (twitterStream && data) {
                twitterStream.untrack(data);
            }
        });


        // When we receive a tweet, emit that tweet as a socket message
        // This is a special function from the twitter node-tweet-stream node module
        twitterStream.on('tweet', (tweetData) => {
            // Emitting a socket event named 'tweet' with data attached
            socket.emit('tweeter', tweetData); 
        });

    });
}
