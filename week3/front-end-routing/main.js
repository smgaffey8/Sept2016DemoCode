angular.module('CremeFraiche', ['ngRoute'])
    .controller("SoFreshAndSoCremeCreme", cremeController);


angular.module('CremeFraiche')
    .config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: '/templates/home.html'
    })
}   


function cremeController() {
    var cCtrl = this;

    cCtrl.greeting = "Welcome to our coffee shop!";
}    
