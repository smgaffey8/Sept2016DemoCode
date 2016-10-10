// Burglar constructor
var Burglar = function(name) {
    this.name = name;
    this.dead = false;
    this.stuff = ['Dagger of +3 Dexterity', 'Cloak of Thievery', 'Lockpick', 'Signed Album by Thievery Corporation', 'Sandwich', '37.85 Gold', 'Abacus'];
}

var bill = new Burglar('Bill');
var alice = new Burglar('Alice');

// add a method to the Burglar class prototype
Burglar.prototype.burgle = function(victim) {
    if(victim.stuff.length !== 0) {
        this.stuff.push(victim.stuff.pop());
        console.log(this.name + ' now has ' + this.stuff.join(', '));
        console.log(victim.name + ' now has ' + victim.stuff.join(', '));
        console.log('=========================');
    } else {
        victim.dead = true;
        console.log('Hasta la vista ', victim.name);
        console.log(cityOfThieves);
        console.log('=========================');
    }
}

var cityOfThieves = [];

for (var i = 1; i <=10; i++) {
    cityOfThieves.push(new Burglar('Thief #' + i));
}

function randomBurgle() {
    var burglar = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)];
    var victim = cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)];

    if(burglar !== victim){
        burglar.burgle(victim);
    }
}

var burgleInterval = setInterval(function(){
    cityOfThieves = cityOfThieves.filter(function(thief) {
        return !thief.dead
    });

    if(cityOfThieves.length > 1){
        randomBurgle();
    }
    else{
        console.log(cityOfThieves[0].name + ' says: There can only be one!');
        clearInterval(burgleInterval); // stops the simulation from executing
    }
}, 10);