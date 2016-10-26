// Angular front end
angular.module('Bear',[])
    .controller('BearController', bearController);

bearController.$inject = ['$http'];

function bearController($http){
    var bCtrl = this;

    bCtrl.greeting='I heard you like bears...'
}