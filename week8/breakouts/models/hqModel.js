var mongoose = require('mongoose');

// Define Schema
var hqSchema = mongoose.Schema({
    name : String,
    address : {
        street : String,
        city : String,
        zip : Number
    },
    amenities : {type : Array, default : []}

});

// Export the model
module.exports = mongoose.model('heroHQ', hqSchema);

// herohqs - lowercased, pluralized