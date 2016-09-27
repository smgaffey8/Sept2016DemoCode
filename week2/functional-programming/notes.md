
Higher Order Functions - takes functions as arguments or returns them as a result


Pure Functions 
- eliminate side effects
- pure functions return new values that can be used or not
- does not affect the original data, AKA immutable function
Immutability - data doesn't change, instead we create NEW data
Composability - forming complex functional with simple pieces


// Tidbits
// Declaration('hoisting' a variable)
var x;  // not needed, but tells the program to set memory aside and helps performance

// Definition - describe the function, but it doesn't actually run
// Parameters are the variables that we will use in the function
var myFunc = function (param) {
    // magic stuff
};

// Invocation - we call the function with arguments to run the code
// arguments are the VALUES of the parameters (the variables we will use in the function)
myFunc(arg);

// this doesn't execute until after myFunc() returns
var yourFunc = function () {
    // magic stuff
};


// return
// Note that any statements after a return (ie someOtherStuff) will not execute.
// When return is called, it jumps out of the method immediately and returns the specified value

function stuff() {
    if(criteria) {
        return 0;
        someOtherStuff();  // return exits immediately, so this will never execute
    }
    otherStuff();  // if the if statement criteria is not met, this will still execute
    return 1;
}