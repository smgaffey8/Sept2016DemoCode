var User = require('../models/user'),
    bcrypt = require('bcryptjs');

module.exports = {
    login: ( req, res ) => { // POST login

    },
    logout: (req, res ) => {

    },
    register: (req, res ) => {
        var newDoc = new User(req.body);

        // when this function fires, it is going to hit the pre save middleware
        newDoc.save((err, doc)=>{
            if(err){
                return res.send(err);
            }
            res.send(doc);
        });
    },
    middlwares: {
        session: (req, res) => { // this will be the middleware that checks for a loggedin user

        }
    }
}
