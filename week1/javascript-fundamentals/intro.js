// comments can be done using double slashes
/*
or they can be multiline between asterix/slashes
*/

var foo;    // this declares a variable foo, but gives it no value
var bar = 1;// this defines a variable, giving it the value of 1
bar = 2;    // after a variable is declared/defined, you can refer to it directly (not need to use var)
bar = 'a string';  // we can change the type of a variable by assigned a value of a different type

// javascript is not a tightly typed language
//Number bar = 1;

// valid variable names start with a letter, underscore or $ 
// and then can use those as well as embedded numbers beyond that
var $bas;
var __bas;

// variables can be in different styles
var appleJelly; // this is camelcase
var krust_the_clown; // snake case
var this-is-not-a-valid-name; // invalid name, reserved character '-'

// invalid names
var 1bas;  // cannot start with a number
var !important; // cannot use special characters
var true;   // cannot use a reserved word as a variable name
var function;  // also a reserved word

// variable types
Number
Boolean
String
null
undefined

// we can assign a variable = null, but if we never assign a value 
// at all its undefined.

// Values
// numbers
x=1;
x=3.14141597;
x=1e6; // 1,000,000

// Not a number
NaN // the value is not a number
x="7t0" // x is a valid string, but not a valid number (NaN)

// Order of operation/evaluation - PEMDAS
Parenthesis
Exponents
Multiplication/Division
Addition/Substraction

1e3*4-2*7/9 != 1e3*(4-2)*7/9
// use parenthesis to group operations if they are not naturally in PEMDAS order

// Math Operators
+
-
*
/
%  // modulus - the remainder of a division. 
// (10 % 3) equals 1 (remainder) and Math.floor(10%3) would be 3 (quotient)

// You need to use the Math library (look it up) to do more complicated 
// mathematical operations
x=1^5// not a valid syntax for exponent
x=4**5 // not a valid syntax

// Literals
x = 'single quotes';  // this value is a string literal
x = " double quotes are also valid"
x = "I don't know"; // use double quotes around values that have an apostrophe
x = 'She said "hi"'; // and vica versa
x = 'She doesn\'t know'; // escape a character to use it's literal value

// we put values in variables, not variables in values
//'single quotes' = x;

// Concatenation
 x= "hello";
 y = "world";
 greeting = x+y;  // "helloworld"

// String properties
var s = "string";
var l = s.length; // l = 6
s[3] == 'i' // fourth character is 'i'

// Array
var list = [1,2,3,4,5];  // list[0] = 1
var names = ['jim','ann','bill'];
var junk = [1, "mix it up", 1e4, true];  // jagged array, containing various types mixed in together
junk[2] == 10,000; // the third element in the junk array (junk[2]) is 10,000 - a number

// Booleans
true, false

// boolean Operators
!  // !true === false
!= // isMarried != false
x = y; // assigning x to y
// the == actually converts each argument to a string and compares their string values
x == y; // testing x to see if it is true-ish
x === y; // testing x to see if is the same as y

// & and | are bitwise operators which do binary logic, not boolean logic
&& // and
|| // or
< // less than
<= // less than or equal to
> // greater than
>= // greater than

// Truthiness
0, Nan are falsey
'' is falsey
null && undefined are falsey
Everything else is truthy

// If-Else statement
if(condition1) {  // if tests the boolean value of the condition in the Parenthesis
                  // the body of the if statement is what's inside the braces {}
    statement;    // a statement is a single opertion
    multi-line      // statements may extend over multiple lines - but it's still a single statement
        statement;
} else if (condition2) {  // you can chain else if's together as long as you want
    statement;      // statements should end with a semicolon, but it's not required
} else {  // else will catch any condition not explicitely tested by preceding if'string
    statement;
};  // the if statement is just a single statement (made up of conditionals and bodies of other statements)


// you can nest if's inside each other as well
if (condition1) {
    if (condition2) {
        statement;
    }
} else {
    statement;
}

// Example
var cupsOfCoffee = '3';

if (cupsOfCoffee < 2) { // this handles anything less than 2
    console.log("Need more java...");
// here we are testing using ==, so the string '3' will work. 
// if we used 'cupsOfCofee === 3' this would fail unless we set cupsOfCoffee to the NUMBER 3
} else if (cupsOfCoffee == 3) { // this tests for a specific value (note the == equals)
    console.log("Feeling good!");
} else if (cupsOfCoffee < 5) {
    console.log("Buzzing along...");
} else {        // and this catches everything else (which would be >= 5)
    console.log("OUT OF CONTROL!");
}