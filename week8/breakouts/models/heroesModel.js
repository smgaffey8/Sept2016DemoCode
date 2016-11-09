var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
    name : {type : String, required : true},
    costume : {type : String, default : 'Might be naked'},
    powers : {type : Array, default : []},
    facialHair : {type : Boolean, default : false},
    backStory : {type : String, default : 'So mysterious... could be Bruce Valanche'},

    headquarter : { 
        type : mongoose.Schema.ObjectId,
        ref  : 'heroHQ' 
    }
});

module.exports = mongoose.model('Hero', heroSchema, 'heroes');
// db.heroes

// One : One relationships tend to be much easier to maintain vs One : Many

// What kind of data is your "primary" data?  Easier to query off of the primary data vs secondary