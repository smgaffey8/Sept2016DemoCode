// Functional programming

// Pure function vs side-effects
// var words = 'this is a string';  // a string is immutable, so we would have to create a new string to change this
var words = ['this', 'is', 'a', 'string'];

// this function has a side effect - it changes words in the global scope
function capitalize1() {
  for (var i=0;i < words.length; i++) {
    words[i] = words[i].toUpperCase();
  }
  return words;
}
capitalize1();  // here is where are actually invoking/running/calling the function
// it is changing the value of the global variable 'words', so it is 'mutable'

/////////////////////
//Pure function (no side effects)
function capitalize2(wordParam) {
  var newWord = [];
  for (var i=0; i<wordParam.length; i++) {
    newWord.push(wordParam[i].toUpperCase());
  }
  return newWord;
}

// here we are invoking the method and setting upperWord to the return value of the function
// it does not change the value of words, so it is immutable
var upperWord = capitalize2(words);

/////////////////////
// map()
// map is a for-loop for an array where you pass the body of the loop in as a function
var books = ['Goosebumps', 'Cat in the Hat', 'Holes', 'It'];

var capitalizeCallBack = function(el) {
  return el.toUpperCase();
}

// here we are invoking map(), and it is not changing the value of books so it is immutable as well
var upperWord = books.map(capitalizeCallBack);

////////////////////
// filter()
var cast = [
  {
    name:'Danny Devito',
    age: 71,
    role: 'Penguin'
  },
  {
    name:'Michael Keaton',
    age: 65,
    role: 'Spiderman'
  },
  {
    name:'Kim Basinger',
    age: 62,
    role:'Poison Ivy' 
  }
];

var make10YrsYounger = function(el) {
   // does magic stuff
};

var onlyOldPeople = function(el) { 
  // does magic stuff
};
// we can use the same functions above to do different things by combining them in different ways.
// that is designing our functions to be 'composable'
var youngerFilteredCast = cast.map(make10YrsYounger).filter(onlyOldPeople);  // would return a younger cast (map) of actors who are old (filter)
var youngerFilteredCast = cast.filter(onlyOldPeople).map(make10YrsYounger);  // would return a subset of actors who are old(filter) and then make them younger (map)

// here we are invoking filter() and returning a subset of the cast that meet the criteria defined in the anonymous function we pass in
var filterCast = cast.filter(function(actor) {
  console.log(actor.name);
  return actor.age >63;
});

////////////////////////
// reduce()
// this will take the array that's passed in and, given an initial value, will operate on each element and return a single value
var initialMonies = 500;

var purchases = [12.64, 34.34, 122,33, 455];

var reduceCallBack = function( runningTotal, purchase) {
  console.log('current total:', runningTotal);
  console.log('purchase: ', purchase);
  console.log('after:', runningTotal - purchase);
  console.log('--------------');
  return runningTotal - purchase;
};

var whatsLeft = purchases.reduce(reduceCallBack, initialMonies);


/////////////
// sort
// sort() is 'mutable' - it changes the value of the array passed in AND it then also returns that array
var nums = [1,4,5,7,9,2,4,3,8];

console.log("Before:",nums);  // here is what we start with

// explicit function (not anonymous)
var sortIt = function(a,b) {
//   return a-b;  // ascending order
  return b-a; // descending order
};

console.log("Middle:",nums);    // no change after sortIt() is defined - we haven't invoked anything yet
var sortedNums = nums.sort(sortIt);

console.log("After:",nums);


// // 'anonymous function' - it has no name or var that we can use later to refer to it
// var sortedNums = nums.sort(function(a,b) {
//   return a-b;
// });

// create an array of objects
var students = [
{
  name:'Jerome',
  age: 28,
  bloodtype:"AB+"
},
{
  name:'Joshua',
  age: 12,
  bloodtype:'OB-'
},
{
  name:'Rapheal',
  age: 38,
  bloodtype:'redNegative'
}
];
console.log("First:",students);  // this is the original array or objects

// define a sorting function that puts all names that start with "J" to the back of the array
var sortingFunction = function (a1,a2) {

  // if both names start with a J, do nothing (0)
  if(a1.name.charAt(0).toUpperCase() === 'J' && a2.name.charAt(0).toUpperCase() === 'J') {
    return 0;
    // if the first name starts with a J and the second doesn't, sort the first to a lower position/index and move it back
  } else if (a1.name.charAt(0).toUpperCase() === 'J') {
    return 1;
  // if the second name starts with a J and the first doesn't, move second to a higher position/index and move it forward
  } else if (a2.name.charAt(0).toUpperCase() === 'J') {
    return -1;
    // if neither name starts with a J, do nothing (0)
  } else {
    return 0;
  }

}
// we still haven't invoked the function, so the array is unchanged
console.log("Middle:",students);

// Here, we invoke the function and it changes the array students by sorting the elements
students.sort(sortingFunction);

console.log("End:",students);  // and here we see the changed/sorted array

