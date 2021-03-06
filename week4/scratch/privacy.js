var patients = [];

// this is a PUBLIC constructor and cannot be called directly.
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

Patient.prototype.prescribe = function () {
    var patient = this;
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


var jane = new Patient('Jane', 'Doe', 'ear wax');
var john = new Patient('John', 'Dough', 'brain damage');
