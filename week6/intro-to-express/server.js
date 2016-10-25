// require the express module
// you will need to install express (npm install --save express) as well
// we use const instead of var to indicate that express will not be modified.  it will just be used.
// we could use var as well, but const better describes the intent.
const express = require("express");

// this gives us an application object for express that we can use
var app = express();

// This will look to see if PORT is defined in the environment 
// (ie. on the command line, using 'export PORT=1337')
// and if there is no PORT defined there, use 8080
var PORT = process.env.PORT || 8080;

// this is a route handler
// this serves up this single file from the root directory
app.get('/', (req, res) => {
    // this is how we would send raw html in our response
    // res.send("<h1>This is our one-liner of HTML</h1>")
    // this is how we would send an entire html file in our response
    // res.sendFile(__dirname +'/index.html');
    // and this is an alternate method of sending the entire html file, 
    // specifying the root directory rather than using the current directory (__dirname)
    res.sendFile('index.html', {root:"."});
    console.log("Here I am");
})

// this is a route handler
// this serves up this single file from the root directory
app.get('/about.html', (req, res) => {
    res.sendFile(__dirname +'/about.html');
    console.log("Here I am");
})

// this is a BETTER way to serve up static html pages
// this serves up ALL files in the public directory so you 
// don't have to create a separate route handler for each file.
app.use(express.static('public'));

// app.listen(PORT, function(err) {})
app.listen(PORT, (err) => {
    // if express cannot listen to the given port, it will return an err0r
    if(err) {
        // we log the error and exit the process with a non-zero value to indicate abnormal termination
        console.log("Server Error", err);
        process.exit(1);
    };
    // give a nice message to indicate that the server is listening to the given portÍ
    console.log("Server is up listening to port "+ PORT);
})