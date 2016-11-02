angular.module('Heroes')
    .controller('homeController', homeController);

homeController.$inject = ['heroesFactory'];

function homeController (heroesFactory){
    var home = this;

    this.greeting = 'Welcome to the Heroes of AJAX!'
}