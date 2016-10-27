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

// use body-parser to parse the body of our POST requests
app.use(bodyParser.urlencoded({extended:true}));
// this does the same thing and is slightly more efficient
// app.post('*', bodyParser.urlencoded({extended:true}));

// also parse the json data in the request
app.use(bodyParser.json());

app.use(function(req, res, next){
    var requestInfo = {
        method:req.method, // http request type - GET, POST, PUT, DELETE, etc
        path: req.path, // the URL route
        query: req.query, // the query parameters from the URL (ie. /api/users?id=1)
        body: req.body, // info in the body for POST requests
        params: req.params, // info from dynamic/parameterized parameters (ie. /api/users/:userType)
        ips:req.ips  // lots of other stuff to see in the request object
    }
    console.log(requestInfo);
    next();
});

// // set a root route
// app.get('/', (req,res) => {
//     res.send("HOME PAGE");
// });

// add the static route handler for the public directory
app.use(express.static('public'));

// call the exported routes function with the express app
routes(app);

// no route found...
// app.use('*', ...)

// create the app listener
app.listen(PORT, (err)=>{
    if (err) {
        console.log("Server error: ", err);
        process.exit(1);
    }
    console.log("Server is up on port", PORT);
});

