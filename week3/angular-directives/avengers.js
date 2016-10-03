angular.module('SuperHeros', [])
    .controller('TheAvengers', avengersController)

function avengersController() {
    var aCtrl = this;
    aCtrl.title = "Every team needs a captain!"
    aCtrl.newAvenger = ''
    aCtrl.heroes = ['Captain America', 'Iron Man', 'Thor']

    aCtrl.addNewHero = function() {
        aCtrl.heroes.push(aCtrl.newAvenger)
    }
}
