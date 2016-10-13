class Wizard {
  //     constructor(name, spells, level) {
  constructor(wizInfo) {
    this.name = wizInfo.name;
    this.spells = wizInfo.spells;
    this.level = wizInfo.level;
    this.cloakColor = "blue";
  }
  castSpell(spellIndex) {
    return this.name + ' casts ' + this.spells[spellIndex] + ' into the darkness';
  }
}
// var harry = new Wizard("Harry Potter", ["fireball", "singing in falsetto"], 2);
var formData = {
  name: "Harry Potter",
  spells: ["fireball", "singing in falsetto"],
  level: 2,
  date: "today"
}
var harry = new Wizard(formData);
// var harry = new Wizard(formData.name, formData.spells, formData.level);
var draco = new Wizard({
  name: "Draco Malfoy",
  spells: ["bug Harry", "siphon soul"],
  level: 50
});
class Warlock extends Wizard {
  constructor(warlockInfo) {
    super(warlockInfo);
    this.undead = warlockInfo.undeadCritter;
  }
  castSpell(spellIndex) {
    var wizStuff = super.castSpell(spellIndex);
    return wizStuff + ' in a warlocky way';
  }
  command() {
    return this.name + ' commands ' + this.undead + ' to dance';
  }

  static motto() {
    return "Whoopiee Warlocks";
  }

  get loudName() {
    return this.name.toUpperCase();
  }

  set loudName(newName) {
    this.name = newName.toLowerCase();
  }
}

var tim = new Warlock({
  name: "tim",
  spells: ["has tools", "raises the dead"],
  level: 5,
  undeadCritter: "Michael Jackson"
});
// console.log(tim.castSpell(0));


// var m = Math();
// m.max(1,2,3);

// Math.max(1,2,3)