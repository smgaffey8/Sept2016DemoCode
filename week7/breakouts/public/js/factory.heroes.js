angular.module('Heroes')
    .factory('heroesFactory', heroesFactory);

heroesFactory.$inject = ['$http'];

function heroesFactory ($http) {

    return {
        
    }
}