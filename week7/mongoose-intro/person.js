// bring in mongoose module
var mongoose = require('mongoose');

// mongo connection string fomat:
// protocol://<domain_name>/<database_name>
// example:
// mongodb://localhost/databaseName

// connect to our mongo database
mongoose.connect('mongodb://localhost/contacts', (err)=>{
    // check if there is an error connecting
    if(err){
        console.log("Error: ", err);
    } else {
        console.log("Successfully connected to database!");
    }
});

// this is our data schema
var personSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    age: Number,
    phone: String,
    created: {type: Number, default: ()=> {return Date.now()}}
});

// Define the mongoose model, which is kind of like a class
// Like a class, this defines the structure of a document object,but doesn't create an instance of a document
// The first parameter is the string name of the mongo collection, the second parameter is the schema, and the optional third argument is how you force a pluralized collection name
var Person = mongoose.model('Person', personSchema);

// function that adds a person to the database
function createPerson(attributes) {
    // create an instance of a model (a document)
    // the document contains the data in the attributes object we passed in
    var person = new Person(attributes);

    // console.log('New person: ', person);

    // attempt to save the document to the database
    person.save((err, doc)=>{
        if(err){
            console.log("Error adding to database! ", err);
        } else {
            console.log("Added person to database! ", doc);
        }
    });
}

// call our createPerson function to actually add some data into the database
createPerson({
    name: 'Jerome',
    age: 28,
    phone: '123-456-7890',
});

// function that gets people from the database
// you can pass in a query object to specify which people to look for
function getPeople(query) {
    // if no query object is passed in, just get all people
    Person.find(query || {}, (err, people)=>{
        if(err) {
            console.log("Error getting people: ", err);
        } else {
            console.log("People: ", people);
        }
    });
}

getPeople(); // get all People
getPeople({name: 'Taco'}); // just get Taco

// createPerson({
//     name: 'Taco',
//     age: 2,
//     phone: 'no phone bitch (aka fisher price)'
// });
