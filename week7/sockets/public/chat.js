angular.module('app', []);

angular.module('app')
    .controller('chatController', ['$scope',function ($scope) {

        console.log("loaded chatController");

        var chat = this;

        chat.username = '';
        chat.messageHistory = [];

        var socket = io();
        console.log("Open Socket", socket);

        chat.sendShout = function() {
            console.log("Shout to ALL from", chat.username,":",chat.message);
            socket.emit('shout', {
                sender:chat.username,
                content:chat.message
            });
            chat.message = '';
        };
        socket.on('shout', function(data) {
            data.sender += ' (ALL)';
            console.log('Shout to ALL from', data.sender,':',data.content);
            chat.messageHistory.push(data);
            $scope.$apply();
        });





    }]);