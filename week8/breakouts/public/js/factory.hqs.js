angular.module('Heroes')
    .factory('hqFactory', hqFact);

hqFact.$inject = ['$http'];

function hqFact ($http) {

    return {
        getHqs : function(){
            return $http.get('/api/hqs')
        }
    }
}