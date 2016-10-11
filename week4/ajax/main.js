// declare our angular module and attach a controller
angular.module('pokeapp',[])   
    .controller('PokeController', pokeController);

// inject the $http module to be able to make the http request
pokeController.$inject = ['$http'];

// Using this form makes this order-dependent, so things that refer to pokeController must be
// declared before and functions that it uses should be defined before
// var pokeController = function($http) { ...}

// Using this form, the function is not order dependent
function pokeController($http) {
    var pCtrl = this;

    pCtrl.pokeNum = 0;

    // put out a simple text value just to check our progress
    pCtrl.text = "Hello there";

    pCtrl.getMyPokemon = function(){
        $http.get('http://pokeapi.co/api/v1/pokemon/'+pCtrl.pokeNum)
        .then(function(res, status){
            // the response object has a .config object, a .data object, etc.
            // the information we really want is in the response.data object (name, weight, height)
            pCtrl.myPoke = res.data;
        }, function(res, status) {
            console.log("Failure:",status);
        });
    }

    // go get the pokemon object using a functiuon outside of the controller
    // we need to pass the external function the pCtrl
    getPokemon1(pCtrl, $http);

    // get the pokemon object using a function inside of the controller
    pCtrl.getPokemon2 = function ($http) {
        $http.get('http://pokeapi.co/api/v1/pokemon/138')
        .then(function(res, status){
            console.log("Success:",res);
            console.log("Status:",status);
            // the response object has a .config object, a .data object, etc.
            // the information we really want is in the response.data object (name, weight, height)
            pCtrl.poke2 = res.data;
        }, function(res, status) {
            console.log("Failure:",status);
        });
    }
}

// $http.get('URL').then(function(response,status){}, function(response, status){});
function getPokemon1(pCtrl, $http, num) {
    $http.get('http://pokeapi.co/api/v1/pokemon/139')
    .then(function(res, status){
        console.log("Success:",res);
        console.log("Status:",status);
        // the response object has a .config object, a .data object, etc.
        // the information we really want is in the response.data object (name, weight, height)
        pCtrl.poke1 = res.data;
    }, function(res, status) {
        console.log("Failure:",status);
    });
}

