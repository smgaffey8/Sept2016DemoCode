var express = require("express");
var app = express();

var logger = require('morgan');
app.use(logger('dev'));

// this module will allow you to color strings that are output to the terminal.
// just append a color name to a string (.ie "this should be blue".blue)
require('colors');

var bodyParser = require('body-parser');

//////////////////////////////////////////
// Vertically mounted middleware
//////////////////////////////////////////
// NOTE: vertically mounted middleware executes in the order in which it is written.
// It is very ORDER DEPENDENT.

// app.use() executes for every request.  app.get(), app.post(), app.delete(), etc only fire for requests with that specific method.
// these middleware functions use anonymous functions.
// app.use ((req,res,next)=> {
//     console.log("middleware1 shoots");
//     next();
// })
// app.use ((req,res,next)=> {
//     console.log("middleware2 shoots");
//     next();
// })
// app.get('/', (req,res) => {
//     console.log("GET root");
//     res.send("<h1>Got there </h1>");
// })

// These middleware functions are explicitely defined and can be referred to from middleware defined later in this file.
var midware1 = (req,res,next) => {
    console.log("midware1 shoots");
    next();
}
var midware2 = (req,res,next) => {
    console.log("midware2 shoots".cyan);
    next();
}

// this is an explicitely defined route handler  that can be referred to from middleware defined later in this file.
var rootHandler = (req,res) => {
    console.log("GET root");
    res.send("<h1>Got there </h1>");
}
var otherHandler = (req,res) => {
    console.log("GET other");
    res.send("<h1>Got tto the secret </h1>");
}


/////////////////////////////////////
// Horizontally mounted middleware
/////////////////////////////////////
// here we are directly calling the rootHandler for the root ('/') route
// app.get('/', rootHandler);
// here we are calling the rootHandler AFTER midware1 and midware2 have been run.
// app.get('/', midware2, midware1, rootHandler);

// app.get('/about.html', midware1, rootHandler);


/////////////////////////////////////
// Custom middleware
/////////////////////////////////////
// this middleware will check to see if you have a query parameter named 'key' in your URL
// (ie. //refactoru.com/classes?key=dev101)
var checkMyAPIKey = (req, res, next) => {
    // express gives us access to that query parameter from the request (req.query.key)
    console.log("Checking key", req.query.key);
    // if the key has any value, pass it on to the next function in the middleware chain
    if (req.query.key) {
        console.log("you passed");
         next();
         // if there was no key specified, block the chain and send a response back
    } else {
        console.log("you are blocked");
        res.send("you are blocked")
    }
}

app.get('/', rootHandler);
// this will run the checkMyAPIKey middleware before allowing the user to proceed to the /api/secret route
app.get('/api/secret', checkMyAPIKey, otherHandler);

app.get('/err', (req, res, next) => {
    console.log("We've got an error");
    next(new Error("Ooops"));
})


/////////////////////////////////////
// Error handling
/////////////////////////////////////
// if there are FOUR arguments, the first argument is err
app.use((err, req, res, next) => {
    console.log("Homemade Error", err.stack);
    res.status(500).send({
        status: 500, 
        message: "Ran into problems"
    })
})

// app.use(express.static('public'));

/////////////////////////////////////
// THird Party middleware
/////////////////////////////////////
// body-parser - parses the request body and turns it into a JSON object
app.post('/', (req,res,next) => {
    console.log("Before:".blue,req.body);
    next();
})

app.use(bodyParser.json());

app.post('/', (req,res,next) => {
    console.log("After:".red, req.body);
    // res.send('done');
    res.send({"key":"value"});
    res.json({"key":"value"});
})


// create an express listener on port 8080 (or whatever PORT is set to in the environment)
var PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err) {
        console.log("Server Error", err);
        process.exit(1);
    }
    console.log("Server is up and listening to port".yellow, PORT);

    // this will log the router stack showing the various routes and middleware functions you have defined
    // console.log(app._router.stack)
})
