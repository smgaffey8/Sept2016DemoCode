// OOP is a model for programming based on classes and objects

// Classes are like blueprints for objects
// Objects are instances of the class (like the building created from the blueprints)

var name = "bill"
var name2 = "sally"
var name3 = "john"
var address = "123 main st"
//...

var people = [
    {
        name: "bill",
        address: "123 main st",
    },
    {
        name: "sally",
        address: "234 main st",
        phone: "555-1234"
    }
] 

// just an object, not a blueprint
// var Cat = {
//     this.name: '',
//     this.color: '',
//     this.breed: '',
//     this.declawed: false,
// }

// ES5 syntax - older way, but more true to what is actually going on

// can use a constructor function to create a blueprint
function Cat(name, color, breed, declawed) {
    console.log(this);

    // with the new keyword:
    // var this = {};

    this.name = name;
    this.color = color;
    this.breed = breed;
    this.declawed = declawed; 

    // return this with new keyword
    // return undefined without new keyword

    // this is a method (a function attached to an object)
    // attaching methods in this way is bad practice, because it will duplicate all of the function's code for each instance of the class
    // this.meow = function(){
    //     console.log("MEOW");
    // }
}

var Cheeto = new Cat("Cheeto", "Orange", "Calico", false);

// In JS, the prototype is something that belongs to all functions/objects
// This is the good practice way to add methods to a specific class
Cat.prototype.meow = function() {
    console.log("MEOW!");
}

var Duke = new Cat("Duke", "Blue", "Devil", false);


// ES6 syntax - more like other OOP languages (syntactic sugar)
class Cat2 {
    constructor(name, color, breed, declawed) {
        this.name = name;
        this.color = color;
        this.breed = breed;
        this.declawed = declawed;
    }

    meow() {
        console.log(this.name + " meows!");
    }
}

// instantiating the Cat2 class
var Garfield = new Cat2("Garfield","Orange", "Fat", true);
var Felix = new Cat2("Felix", "Mud brown", "Tomcat", false);


// Make a class constructor for breakfast cereals 
// name => String
// sweetness => Number
// crunchFactor => Number
// mascotName = String