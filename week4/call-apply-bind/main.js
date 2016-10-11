// Call, Apply, Bind

// these 3 methods manipulate the value of THIS
// THIS normally refers to the host object of a method (or the window, if there is not host object), unless shifted with one of these 3 methods

var alice = {
    name: 'Alice',
    eatWeirdCake: function () {
        return this.name + " ate a weird cake...";
    },
};

//var cakeEat = alice.eatWeirdCake;
var name = 'BillyBob';

var cakeEat = alice.eatWeirdCake.bind(alice);


// Call

var bill = {
    name: 'Bill',
    throwCoconuts: function(num) {
        console.log(arguments);
        num = num || 4; // default value
        console.log(this);

        return this.name + " is throwing " + num + " coconuts! Watch out!";
    }
};

var awesomeO = {
    name: 'Awesome-O'
};

//bill.throwCoconuts(5);

// bill.throwCoconuts.call(awesomeO);
// bill.throwCoconuts.call(awesomeO, 42);


function logEm() {
    console.log(arguments);

    // Array.prototype.forEach.call(arguments, callback)
    [].forEach.call(arguments, function(element, index, array) {
        //console.log(element, index);
    });
}

var arr = ['Harambe', 'Koko', 'Luci', 'Magilla'];


arr.forEach(function(element) {
    //console.log(element);
})

// loops through each element in the array
for(var i = 0; i < arr.length; i++)
{
  //  console.log(arr[i]);
}

// Apply 

// Apply is nearly identical to call
// Big difference:
    // Call takes comma separated arguments
    // Apply takes an array of arguments

Math.max(1, 45, 212, 6, 77); 

var values = [1, 45, 212, 6, 77];

Math.max.apply(null, values);
Math.max.call(null, 1, 45, 212, 6, 77);

// Bind

// Bind creates a NEW function that has a custom THIS value and arguments pre-passed in
// Creates a permanent binding

bill.superviseCoconuts = bill.throwCoconuts.bind(awesomeO, 12);




