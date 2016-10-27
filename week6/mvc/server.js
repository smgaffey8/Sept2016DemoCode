var express = require('express'),
    // file relative to where our server.js is located
    routes = require('./routes'), 
    bodyParser = require('body-parser'),
    logger = require('morgan')('dev');
// this is the same as:
// logger = require('morgan');
// logger('dev');

var PORT = process.env.PORT || 8080;

// create the express app
var app = express();

// mount our morgan logger middleware
app.use(logger);

// add the static route handler for the public directory
app.use(express.static('public'));

// call the exported routes function with the express app
routes(app);

// // set a root route
// app.get('/', (req,res) => {
//     res.send("HOME PAGE");
// });

// create the app listener
app.listen(PORT, (err)=>{
    if (err) {
        console.log("Server error: ", err);
        process.exit(1);
    }
    console.log("Server is up on port", PORT);
});
