var express = require('express'),
    // morgan is a logger for back-end debugging and analytics
    // you might not actually use this in production
    morgan = require('morgan'),
    // body-parser is a module that parses the request body into json objects
    // URL encoded string 'route?key=my%20value&otherKey=joe%33s%20bar'
    // becomes { key:"my value", otherKey:"joe's bar" }
    bodyParser = require('body-parser');

var app = express();

// mount body-parser middleware vertically up top so that all requests
// are parsed before we actually act on them

// parse application/x-www-form-urlencoded
// extended:false (value of the key/value must be string or array)
// extended:true  (value of the key/value pair may be anything - like an object)
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// this is an example of custom middleware that works the same way that our third party
// middleware works, by returning a function and then executing that function in the app.use()
var myMiddleware = () => {
    return (req,res,next) => {
        console.log('Roar to ' + req.path);
        next();
    };
};
app.use(myMiddleware());

// add a public static route handler from express to deliver ALL files from the public directory
app.use(express.static('public'))

// set up a basic root route
app.get('/', function (req, res) {
  res.sendFile("index.html",{root:'./public/html'});
});

// set up express listener to listen to port 3000
app.listen(3000, (err) => {
    if (err) {
        console.log("Error:", err);
        process.exit(1);
    }
    console.log("Server is listening to port 3000");
});
