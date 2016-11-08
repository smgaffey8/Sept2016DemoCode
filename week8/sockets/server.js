var express = require('express'),
    logger = require('morgan')('dev'),
    fileserver = express.static('public'),
    app = express(),
    PORT = process.env.PORT || 8080;

app.use(logger, fileserver);

// Storing a reference to our webserver
app.server = app.listen(PORT, (error) => {
    if (error) {
        console.error('Server could not start', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Server is up and listening to port', PORT);
    };
});

// add sockets
// we could just include this code directly in this file, but requiring
// an external file keeps this file cleaner
var sockets = require("./controllers/sockets.js");
sockets(app, PORT);