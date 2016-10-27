// Controller for the API controlling users
var Users = require('../models/users');

// this is a way to explicitely define a route handler
function getItAll(req, res) {
    // look at the entire request object (very long)
    console.log("Request:", req);
    res.json(Users.findAll());
};

module.exports = {
    // return a JSON array of all users
    getAll: getItAll,
    // this is an anonymous way to define a route handler
    getUser: (req, res) => {
        // let's take a look at what is in the request
        console.log(
            "Query:", req.query,
            "Path:", req.path,
            "Body:", req.body);
        // get the query string parameter named 'id' and 
        // use as an index for the user to find
        // the URL route path will look like /api/user?id=1
        var user = Users.find(req.query.id);
        if (user) {
            res.json(user);
            // if we find no user, return a 404 not found
        } else {
            res.status(404).json(
                { message: 'Unknown user' }
            );
        }
    }
}