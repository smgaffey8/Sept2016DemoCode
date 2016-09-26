function move(speed) {
    
    //typeof is an operator that will return the type that a variable/value is
    console.log(typeof speed);
    
    if(typeof speed === 'string') {
        console.log(`We moved at a ${speed} pace!`);
    }
    else
    {
        console.log("We couldn't move!");
    }
    
}

//move('fast'); 
//move(5);
//var something = !something;


function doThing(porkyman, digiman)
{
    // ES6 - Template literals
    console.log(`The ${porkyman} fights the ${digiman}`);
    
    console.log(arguments);
    
    for (var i =0; i < arguments.length; i++) {
        console.log(typeof arguments[i] + " " + arguments[i]);
    }
}

//doThing('Pikachewed', 'Augerman');
//console.log(1, 2, 3, 4, 5, 6, 7);


// Scoping
// Lexical scoping - variables declared inside of a scope are inaccessible outside of that scope
// Dynamic scoping - Every time a function is executed (called or invoked) it creates a scope. This scope only exists while the function is running.

function myFunc(){
    var potato = 'spudtacular';
    console.log(potato);
    return potato;
}

//console.log(myFunc());
//myFunc();

// Garbage collection
    // Process of destroying unused variables to free up memory
    // If a value/object has no reference, it will be garbage collected

var Pikachewed = {
    name: 'Pikachewed',
    move: 'Thunderstuff',
}
var porkymans = Pikachewed; // this creates a 2nd reference

Pikachewed.move = 'Faceeater';

Pikachewed = null; // the object that the variable Pikachewed USED to be assigned to is garbage collected

//console.log(porkymans, Pikachewed);

var Charmangler = {};
// var Charmangler = {
//     name: 'Charmangler',
//     trainer: {
//         name: 'Ash',
//         age: 10
//     }
// }

Charmangler.otherName = 'Charmander';
//console.log(Charmangler);

Charmangler = null;
//var ash = Charmangler.trainer;

//console.log(Charmangler, ash); // the outside object get garbage collected, there's no way we can reference that object

// All non-primitive types (objects, arrays, functions) are passed by reference
// All primitive types (numbers, strings, booleans, null, undefined) are passed by value

// Callback functions

var delayInMilliseconds = 3000; // 3 seconds

function codeToRun() {
    console.log('Testing inside setInterval');
}

// run a callback after some delay
// setTimeout(function() {
//     console.log('Testing');
// }, delayInMilliseconds);

// run a callback every 1000 ms
//setInterval(codeToRun, 1000);

//console.log("After setTimeout");


// Closure - Functions defined inside functions retain access to the scope they were created in

function playerMaker() {
    var health = 100;
    
    return function(damage) {
        health = health - damage;
        //health -= damage;
        
        if(health <=0) {
            console.log('Bleeehhh');
            console.log(health);
        }
        else {
            console.log(health);
        }
    }
}

playerMaker.test = "test";
playerMaker.health = 200;

var bill = playerMaker();
var alice = playerMaker();



