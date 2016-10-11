angular.module('pokeapp',[])   
    .controller('PokeController', pokeController);

pokeController.$inject = ['$http'];

function pokeController($http) {
    var pCtrl = this;
    pCtrl.text = "Hello there";
}