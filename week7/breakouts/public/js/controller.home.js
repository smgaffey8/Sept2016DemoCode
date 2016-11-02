angular.module('Heroes')
    .controller('homeController', homeController);

homeController.$inject = ['heroesFactory'];

function homeController (heroesFactory){
    var home = this;

    home.greeting = 'Welcome to the Heroes of AJAX!'

    // heroesFactory.createHero().then

    home.createHero = function(){
        heroesFactory.createHero(home.newHero)
            .then(function(returnData){
                console.log('Response from server : ', returnData)
            });
    }
}