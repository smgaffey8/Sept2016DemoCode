
// Global scope, available directly throughout the application.
// var first = 'Jane';
// var last = 'Doe';
// var eyeColor = 'red';

// Object scope, available indirectly through the person object.
// var person = {
//     first : 'Jane',
//     last : 'Doe',
//     eyeColor : 'red'
// };

// Immediately Invoked Function Expression (IIFE) 
var Person = (function () {
var patients = [];

// this is a PRIVATE constructor and cannot be called directly.
var Patient = function (first, last, ill, med) {
    this.first = first;
    this.last = last;
    this.illness = ill;
    patients.push(this);
};

// initials() is a PUBLIC method. 
// It can be accessed by other methods inside or outside of this class.
Patient.prototype.initials = function () {
    return this.first.charAt(0) + '.' + this.last.charAt(0) + '.';
}
// bodyPart is a PUBLIC method.
Patient.prototype.bodyPart = function () {
    return this.illness.split(" ")[0];
}

// prescribe() is a PRIVATE method.
// It can not be accessed outside of this class.
var prescribe = function (patient) {
// Patient.prototype.prescribe = function () {
    // var patient = this;
    var bodyPart = patient.bodyPart();
    if (bodyPart === 'ear') {
        medication = "yogurt";
    } else if (bodyPart === 'brain') {
        medication = "grain alcohol";
    } else {
        medication = "placebo";
    }
    console.log("Dr: The treatment for " + bodyPart + " problems is " + medication);
    return medication;
};

// listPeople()  is a static method, meaning it belongs to the class in general, 
// not to any particular instance. 
Patient.listPatients = function () {
    console.log(patients);
};
// treatAll() is also a static method.
Patient.treatAll = function () {
    for (var i = 0; i < patients.length; i++) {
        var medication = prescribe(patients[i]);
        console.log("Give " + patients[i].first + " " + patients[i].last
            + " a dose of " + medication);
    }
};

    return Patient;
})()

var jane = new Person('Jane', 'Doe', 'ear wax');
var john = new Person('John', 'Dough', 'brain damage');

// var jane = new Patient('Jane', 'Doe', 'ear wax');
// var john = new Patient('John', 'Dough', 'brain damage');

// // Async problems with loops
// for(var i = 0; i < myCtrl.pokemon.length; i++){
//   $http.get('/api/pokemon/' + myCtrl.pokemon[i].name)
//     .then(function(response){
//       // myCtrl.pokemon[i] => undefined
//       console.log(myCtrl.pokemon[i].name + ' came back!');
//     })
// }

// // Use an IIFE to sync the then callback with the async http call
// for(var i = 0; i < myCtrl.pokemon.length; i++){
//   (function(i){
//     $http.get('/api/pokemon/' + myCtrl.pokemon[i].name)
//       .then(function(response){
//         // myCtrl.pokemon[i] => {name : 'charmangler'}
//         console.log(myCtrl.pokemon[i].name + ' came back!');
//       })
//   })(i);
// }