var express = require("express");
var app = express();

var logger = require('morgan');
app.use(logger('dev'));

// Vertically mounted middleware
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

var midware1 = (req,res,next) => {
    console.log("midware1 shoots");
    next();
}

var midware2 = (req,res,next) => {
    console.log("midware2 shoots");
    next();
}
// app.use (midware);

var rootHandler = (req,res) => {
    console.log("GET root");
    res.send("<h1>Got there </h1>");
}

var otherHandler = (req,res) => {
    console.log("GET other");
    res.send("<h1>Got tto the secret </h1>");
}

// app.get('/', rootHandler);
// app.get('/about.html', midware1, rootHandler);

// app.get('/', midware2, midware1, rootHandler);

var checkMyAPIKey = (req, res, next) => {
    console.log("Checking key", req.query.key);
    if (req.query.key) {
        console.log("you passed");
        return next();
    } else {
        console.log("you are blocked");
        res.send("you are blocked")
    }
}

app.get('/', rootHandler);
app.get('/api/secret', checkMyAPIKey, otherHandler);
//app.get('/api/secret', otherHandler)

app.get('/err', (req, res, next) => {
    console.log("We've got an error");
    next(new Error("Ooops"));
})

app.use((err, req, res, next) => {
    console.log("Homemade Error", err.stack);
    res.status(500).send({
        status: 500, 
        message: "Ran into problems"
    })
})

app.use(express.static('public'));



var PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err) {
        console.log("Server Error", err);
        process.exit(1);
    }
    console.log("Server is up and listening to port", PORT);

    // console.log(app._router.stack)
})
