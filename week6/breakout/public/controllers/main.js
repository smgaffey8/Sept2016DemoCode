// Angular front end
angular.module('Bear', [])
    .controller('BearController', bearController);

bearController.$inject = ['$http'];

function bearController($http) {
    var bCtrl = this;
    bCtrl.newBear = {};

    bCtrl.greeting = 'I heard you like bears...';

    bCtrl.addBear = function() {
        // Going to send information from the client (browser) to the server
        $http.post('/api/bears', bCtrl.newBear)
            .then(function(response) {
                console.log(response.data)
                bCtrl.newBear = {}; // Reset the form
                // window.location.href = '/about'// if we needed to move them to a NEW page
                bCtrl.getBears(); //get bears when we add a new one
            })
    }

    bCtrl.getBears = function() {
        $http.get('/api/bears')
            .then(function(response) {
                bCtrl.TheBearHouse = response.data;
            })
    }
    bCtrl.getBears(); //get bears when controller loads


    bCtrl.removeBear = function(bear) {
        var removeIndex = bCtrl.TheBearHouse.indexOf(bear);
        $http.delete('/api/bears/' + removeIndex)
            .then(function(response) {
                bCtrl.getBears();
            })
    }
}


// JSON.stringify({
//     "key" : "value"
// })

// JSON.parse("\"{\"key\" : \"value\"}\"")