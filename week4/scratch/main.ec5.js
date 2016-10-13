function Wizard(wizardInfo) {
  console.log(wizardInfo)
  this.name = wizardInfo.name;
  this.spells = wizardInfo.spells;
  this.level = wizardInfo.level;
}

Wizard.prototype.castSpell = function (spellIndex) {
  return this.name + ' casts ' + this.spells[spellIndex];
}

var formData = {
  name: "Harry Potter",
  spells: ["fireball", "singing in falsetto"],
  level: 2,
  date: "today"
}
var harry = new Wizard(formData);

function Warlock(warlockInfo) {
  Wizard.call(this, warlockInfo);
  this.undead = warlockInfo.undeadCritter;
}

// Warlock.prototype = new Wizard();
// Warlock.prototype.constructor = Warlock;

// Warlock.prototype.command = function() {
//   return this.name + ' commands ' + this.undead + ' to dance'
// }

// var tim = new Warlock({
//   name:"tim", 
//   spells:["has tools","raises the dead"], 
//   level:5, 
//   undeadCritter:"Micheal Jackson"
//   });

