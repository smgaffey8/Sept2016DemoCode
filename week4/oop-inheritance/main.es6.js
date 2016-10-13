// EC6
// Define the Wizard class
class Wizard{
	constructor(wizardInfo){
		this.name = wizardInfo.name;
		this.spells = wizardInfo.spells;
		this.level = wizardInfo.level;
	};
	
	// Define a prototypal method for the Wizard class
	castSpell(spellIndex){
		return this.name + ' casts ' + this.spells[spellIndex] + '.';
	};
};

// Create an instance of the Wizard class
var harry = new Wizard({
	name : 'Harry Potter',
	spells : ['Magic Missle', 'That one that makes Draco bleed in the bathroom'],
	level : 5,
});

// Create another instance of the Wizard class
var draco = new Wizard({
	name : "Draco Malfoy",
	spells : ['AbraKadabra'],
	level : 2,
});

// Derive the Warlock class from the Wizard class
class Warlock extends Wizard{
	constructor(warlockInfo){
		// Leverage the class constructor we already wrote to save us code
		super(warlockInfo);  // call the Super class constructor
        // declare the data properties specific to a Warlock
		this.undead = warlockInfo.undead;
	};
		
	// Override a prototypal method from the Wizard class
	castSpell(spellIndex){
		var spellString = super.castSpell(spellIndex);
		return spellString + '\n It was super Warlocky.';
	};

    // add the methods specific to a Warlock
	command(){
		return this.name + '  commands the ' + this.undead + ' to attack!';
	};

    // STATIC METHOD does't rely on any class data and is called without
    // an instance (no 'this')
    static motto() {
		return 'Warlocks Rule Dude!';
	};

	// Create a GETTER or accessor function and mirror SETTER.
	// This function processes a class property before it returns it and is
	// called by trying to access the loudName PROPERTY (not method).
	// For example, we want to convert the name property to upper case
	// when getting it, and convert it to lower case before setting the name property.
	get loudName() {
		return this.name.toUpperCase();
	};
	set loudName(newName) {
		this.name = newName.toLowerCase();
	};

	// Similarly, a SETTER processes its argument in order to set a property value.
	// For example, we might do some data validation/cleanup and remove any numbers
	// in the given name.
	set cleanName(newName) {
		this.name = newName.replace(/[0-9]/g,'').toLowerCase();
	};
};

var tim = new Warlock({
	name : 'Tim',
	spells : ['Kill you', 'Eat soul'],
	level : 99,
	undead : 'zombie rabbits',
});

// create a new instance of a Warlock
var bruce = new Warlock({
	name : 'Bruce',
	spells : ['Death Whisper', 'Poop the Party'],
	level : 6,
	undead : 'obnoxious skeletons',
});

// And this is a method specific to JUST tim, not the Warlock prototype.
// It is not prototypal of the Wizard or Warlock class.
tim.askQuestionsThree = function(){
	console.log(this.name + ' asks "What is your name?');
	console.log(this.name + ' asks "What is your quest?');
	console.log(this.name + ' asks "What is the air speed of a sparrow?');
};
