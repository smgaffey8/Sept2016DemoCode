// Javascript Arrays and Objects

// Lining up braces, parenthesis, brackets, etc makes code much
// more readable.  DO IT!  ALWAYS!
// You will spend more time debugging and refactoring (modifying) code than
// you will writing it originally.  Make it easy to read!

var listChickens = ["Fred", "Gary", "Tom"];  // create an array of 3 string items
var listOfLists = [listOfChickens, [1,2,3]]; // create an array of 2 items - an array of strings and an array of numbers

var listOfCattle = ['Bessy', 'Bonnet'];
listOfLists = [listOfChickens, listOfCattle]; // this overwrites the listOfLists with two arrays of strings

// Push will add a new item to the end of an array
listOfCattle.push('Ms Moolly'); // add an item 


var ed = 'Mr Ed';
listOfCattle.push(ed);  // this adds ed to the array at the end of the array
//  console.log(listOfCattle); // this shows all of the items in the array
var mrEd = listOfCattle.pop(ed);  // removes ed (the last item) from the list
listOfCattle.unshift(mrEd); // adds an item to the front of the array
listOfCattle.shift(); // removes the first item in the array

// Incrementors/Decrementors
var x=1;
x = x+1;  // this adds one to x
x++;  // this means the same thing as x=x+1
++x;  // this is a prefix unary operator - x's value is changed before the statement finishes executing
x--;  // x= x-1
x+=1; // x= x+1
x+=3; // x= x+3
x*=4; // same as x=x*4;
x/=6; // x = x/4
x-=5; // x = x-5

// For loops
// this is typically how you will see a for loop written, initial condition, final condition and incrementor on the same line
for (var i=0; i<listOfCows.length; i++) {
    console.log("index :" + i + " is " + listOfCows[i]);
}

// create an array with the name of every day of the week
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// now we want to loop through the days of the week and do something special on specific days
for (
    var i = 0; // this is an initial condition
    i < daysOfWeek.length; // this is end condition
    i++  // this is the loop incrementor
) {
    // this does the same thing as the line below. 
    // if ( i === 0 ) {   // this says "if we are operating on the first element in the array..."
    if (daysOfWeek[i] === 'Sunday') { // this says "if the element of the array that we are working on has a value of 'Sunday'
        console.log("Time to go to church");
    } else if (daysOfWeek[i] === 'Saturday') {
        console.log("Time to sin!");
    } else {
        console.log('Code code code!');
    }
}

// For-in loop
// For-in loops over the Properties in an Object.

// An array of consistently structured objects (cars) is called a Collection
var cars = [{
    make:'Ford', 
    model:'Mustang',
    numberOfDoors:4
},
{
    make:"Chevy",
    model:"Camero",
    numberOfDoors:2
},
{
    make:'joe',
    model:"male"
}];

// for each car in the array of cars...
for (var i=0;i<cars.length;i++) {
    // this will loop through each of the keys for properties in an object
    // 'key' here is the name of a property in a car object
    for (var key in cars[i]) {
        console.log('The ', key, ' of the car is ', cars[i].key);
        // Will log something that looks like:
        // The make of the car is Ford
        // The model of the car is Mustang
        // The numberOfDoors of the car is 4
        // The make of the car is Chevy
        // ...
    }
}


// While loop
var nums=[];
var arrayLength = 3;
var index = 0;
// A while loop executes th contents of its body as long as the condition is met
while (index < arrayLength) { 
    nums.push(index); 
    console.log(nums);
    index++;
};
// The while loop above will output something that looks like:
// [0]
// [0,1]
// [0,1,2]

// infinite loop
while(true) {  // this condition will never be false so it will never stop
    console.log("true");
};
// also an infinite loop
var x = 0;
while (x++) {
    console.log(x);
    x++;
};


// Objects
var joe = {
    name:"joe", // name:value pairs are called Properties
    address:"123 main st",
    phone:'303-555-5555',
};
var mary = {
    name:"mary",
    address:"123 main st",
    phone:'303-555-5555'
};
// these all do the thing, but in different ways
var coolGuy = joe.name;  // brief descriptive way of getting to an object's property value
coolGuy = joe['name']; // this does the same thing
coolGuy = joe['na'+'me'];  // cryptic but valid

// how do we store contact information?
var names=['joe', 'mary'];
var addresses = ["123 main st","123 main st"];
var phones = ['303-555-5555','303-555-5555'];
// that is a lousy way of storing related information. It's associated only by it's position in the array

// we can create a list of objects instead of a list of arrays
// this is a much more intuitive way of storing contact info - a list of objects!
var people = [];
people.push(joe);
people.push(mary);

// we can grad the first object (which has name, address and phone) and 
var person = people[i];
var name = people[i].name; // this grabs the ith person's name property value
name = person.name; // since person = people[i], this does the same thing
