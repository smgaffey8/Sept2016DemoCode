// Angular controller module
angular.module('mvc', [])
    .controller('MVCController', mvcController);

// our angular controller
function mvcController() {
    var mCtrl = this;

    mCtrl.greeting = "MVC is now in control!";
}