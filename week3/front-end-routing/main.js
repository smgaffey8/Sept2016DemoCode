angular.module('CremeFraiche', ['ngRoute'])
    .controller("SoFreshAndSoCremeCreme", cremeController)
    .controller("CoffeeOrigins", originsController);

angular.module('CremeFraiche')
    .config(myRouter);

myRouter.$inject = ['$routeProvider'];

function myRouter($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html'
        })
        .when('/origins/:id', {
            templateUrl: '/templates/origins.html',
            controller: "CoffeeOrigins as oCtrl"
        })
        .when('/menu', {
            templateUrl: '/templates/menu.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}   


function cremeController() {
    var cCtrl = this;

    cCtrl.greeting = "Welcome to Bozo Coffee";

    cCtrl.menu = [
        {
            name: "White chocolate mocha",
            price: 7.50
        },
        {
            name: "Black death",
            price: 6.66
        },
        {
            name: "Non-fat soy vanilla tofu latte with gluten free coffee and free trade, imitation, dolphin-safe whipped-style cream product. Just a sprinkling of GMOs and served in a all-natural 125% post-consumer recycled material hemp cup. Also comes with farm to table wifi",
            price: 20
        }
    ]
}    

function originsController() {
    var oCtrl = this;

    oCtrl.greeting = "Origins";
}    
