// Functions

// chaining variable declarations with commas
var b = "test2",
    c = "test3",
    d = "test4";

// anonymous function assigned to a variable (function expression)
var calculateArea = function(width, height) {
    var a = "test";
    console.log("A inside: " + a);
    //return width * height;
    return a;
} 

//console.log(calculateArea());
//console.log("A: " + a);

// named function
function calculateArea2(width, height) {
    return width * height;
}

//console.log(calculateArea(2, 4));
//console.log(calculateArea2(5, 2));


var bill = {};
var alice = {};

bill.doSomething = calculateArea; // do something is a method (a function attached to an object, or a property whose value is a function)
//bill.doSomething();

var bill = {
    doSomething: function(){},
    doSomething2: calculateArea2,
}
bill.doSomething();

var a;
var a = {}; // object literal
var a = ""; // string literal


// Built in methods

function simple(a, b) {
    console.log(a.constructor);
    console.log(b.constructor);
}

//simple(5, "test");

// console.log(simple.length)
// console.log(simple.constructor)

// var str = "some string";
// var num = 5;

// console.log(str.constructor);
// console.log(num.constructor);

var weekString = 'Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday';

var weekArray = weekString.split(",");
console.log(weekString);
console.log(weekArray);

var newString = weekArray.join(" ");
console.log(newString);

// method chaining
console.log(weekString.toUpperCase().toLowerCase());
console.log(weekString.charAt(2).toUpperCase()); // get character at index 2, and uppercase it

