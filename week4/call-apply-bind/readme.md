# Call, Apply, Bind

* Call, Apply, and Bind are used to manipulate the value of THIS
* This is NOT inherited like scope
* It normally refers to the host object of a method (or the window, if there is no host object), unless it is shifted in certain ways

## Metaphor: 
There are two people (a girl and a guy). When the girl says, "I throw coconuts", the "I" refers to her. When the guy says the sentence, "I" refers to him and the context of the girl is lost. If you find a piece of paper that says "I throw coconuts" on the ground, there is no context, you have no idea who that is.

```javascript
 var alice = {
     name: 'Alice',
     eatWeirdCake: function() {
         return this.name + " ate a weird cake...";
     },
 };

 var cakeEat = alice.eatWeirdCake;
```

* Calling the methods, we get:
```javascript
alice.eatWeirdCake(); // "Alice ate a weird cake..."
cakeEat(); // " ate a weird cake...", since the context of THIS is lost
```

* If we add the following, we get:
```javascript
var name = 'BillyBob';
cakeEat(); // "BillyBob ate a weird cake...", since THIS now refers to the window object
```

## Call

```javascript
var bill = {
	name : 'Bill',
	throwCoconuts : function(num){
		console.log(arguments);
		num = num || 4;
		console.log(this);
		return this.name + " is throwing "+ num + " coconuts!  Watch out!"
	}
};

var awesomeO = {
	name : 'Awesome-O'
};

bill.throwCoconuts(5); // "Bill is throwing 5 coconuts!  Watch out!"
```

* The call method can be used to change the context of a function (THIS)
```javascript
bill.throwCoconuts.call(awesomeO); // "Awesome-O is throwing 4 coconuts!  Watch out!"
```

* Call can also be used to pass in arguments
```javascript
bill.throwCoconuts.call(awesomeO, 42); // "Awesome-O is throwing 42 coconuts!  Watch out!"
```

* Another example:
```javascript
function logEm () {
	console.log(arguments);

	// Array.prototype.forEach.call(arguments , callback)
	[].forEach.call(arguments, function(element, index, array) {
		console.log(element, index);
	})
}

logEm(1, 'dog', 'captain puddin paws', null); // 1 0, dog 1, captain puddin paws 2, null 3
```

## Apply

* Apply works almost identically to call - both are immediately executed
* Big difference:
  * Call takes comma separated arguments
  * Apply takes an array of arguments

```javascript
Math.max(1, 45, 212, 6, 77); // 212

var values = [1, 45, 212, 6, 77];

Math.max.apply(null, values); // 212
Math.max.call(null, 1, 45, 212, 6, 77); // 212
```

## Bind

* Bind is a method called on function (like call and apply)
* Bind will create a NEW function with a custom THIS value and arguments pre-passed in
* Creates a permanent binding

```javascript
bill.superviseCoconuts = bill.throwCoconuts.bind(awesomeO, 12); 

bill.superviseCoconuts(); // "Awesome-O is throwing 12 coconuts!  Watch out!"
```

* Back at the beginning, for example:
```javascript
var cakeEat = alice.eatWeirdCake.bind(alice);

cakeEat(); // "Alice ate a weird cake..."
```
