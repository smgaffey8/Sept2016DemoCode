// the To Do itself

module.exports = require('mongoose').model('ToDo', {
    title: String
    , done: {
        type: Boolean
        , default: false
    }
    , dateCreated: {
        type: Date
        , default : new Date()
    }
    , dateFinished: Date
});
    
