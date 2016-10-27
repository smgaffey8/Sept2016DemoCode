// Angular controller module
angular.module('mvc', [])
    .controller('MVCController', mvcController);

// inject the http module to our controller so we can make http calls
mvcController.$inject=['$http'];
// our angular controller
function mvcController($http) {
    var mCtrl = this;

    mCtrl.greeting = "MVC is now in control!";

    mCtrl.addUser = function() {
        // let's see what the new user data looks like before we send it off
        console.log("New User:", mCtrl.newUser);
        // this will send a POST request to add a user
        // mCtrl.newUser will be put in the request body
        $http.post('/api/user', mCtrl.newUser)
        .then(function(res) {
            console.log("Response:", res);
        });
    }
}