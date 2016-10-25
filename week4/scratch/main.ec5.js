//EC5
// Define the Wizard class
function Wizard(wizardInfo) {
	this.name = wizardInfo.name;
	this.spells = wizardInfo.spells;
	this.level = wizardInfo.level;
};

// Define a prototypal method for the Wizard class
Wizard.prototype.castSpell = function (spellIndex) {
	return this.name + ' casts ' + this.spells[spellIndex] + ' at the darkness.';
}

// Create an instance of the Wizard class
var harry = new Wizard({
	name: 'Harry Potter',
	spells: ['Magic Missle', 'That one that makes Draco bleed in the bathroom'],
	level: 5,
});

// Create another instance of the Wizard class
var draco = new Wizard({
	name: "Draco Malfoy",
	spells: ['AbraKadabra'],
	level: 2,
});

// Derive the Warlock class from the Wizard class
function Warlock(warlockInfo) {
	// Leverage the class constructor we already wrote to save us code
	Wizard.call(this, warlockInfo);   // Call the SUPER CLASS CONSTRUCTOR
	// declare properties that are SPECIFIC to a Warlock
	this.undead = warlockInfo.undead;
}

// Setting the warlock proto EQUAL to the wizard prototype just passes it by reference.  
// They are now the EXACT same prototype
// Warlock.prototype = Wizard.prototype

// This way sets up the prototype to be able to LOOK at the wizard proto, 
// but remain it's own object
Warlock.prototype = Object.create(Wizard.prototype);
Warlock.prototype.constructor = Warlock;

// Create a Warlock and name him Tim
var tim = new Warlock({
	name: 'Tim',
	spells: ['Kill you', 'Eat soul'],
	level: 99,
	undead: 'zombie rabbits'
});

// OVERRIDE an inherited proto method with one that calls the 
// inherited prototype and does some other things as well.
Warlock.prototype.castSpell = function (spellIndex) {
    var spellString = Wizard.prototype.castSpell.call(this, spellIndex);
    return spellString + '\n It was super Warlocky.'
};

// add a NEW METHOD specific to a Warlock
Warlock.prototype.command = function () {
	return this.name + ' commands the ' + this.undead + ' to attack!'
};

// STATIC METHOD doesn't rely on any class data and is called without
// an instance (no 'this')
Warlock.motto = function () {
	return 'Warlocks Rule Dude!'
};

// Create a GETTER or accessor function and mirror SETTER.
// This function processes a class property before it returns it and is
// called by trying to access the loudName PROPERTY (not method).
// For example, we want to convert the name property to upper case
// when getting it, and convert it to lower case before setting the name property.
Object.defineProperty(Warlock.prototype, "loudName", {
	get: function () {
		return this.name.toUpperCase();
	},	
	set: function (newName) {
		this.name = newName.toLowerCase();
	}
});

// Create a SETTER function.
// This function processes a class property before it saves it and is
// called by setting the fullName PROPERTY (not method).
Object.defineProperty(Warlock.prototype, "cleanName", {
	set: function (newName) {
		this.name = newName.replace(/[0-9]/g, '').toLowerCase();
	}
});

// create a new instance of a Warlock and name him Bruce
var bruce = new Warlock({
	name: 'Bruce',
	spells: ['Death Whisper', 'Poop the Party'],
	level: 6,
	undead: 'obnoxious skeletons'
});

// And this is a method specific to JUST tim.
// It is not prototypal of the Wizard or Warlock class.
tim.asksQuestionsThree = function () {
	console.log(this.name + ' asks "What is your name?');
	console.log(this.name + ' asks "What is your quest?');
	console.log(this.name + ' asks "What is the air speed of a sparrow?');
};
