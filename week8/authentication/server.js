var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    PORT = process.env.PORT || 3000,
    sessions = require('client-sessions')({
        cookieName: "heroes-session",  // front-end cookie name, currently pulled from package.json, feel free to change
        secret: 'DR@G0N$',        // the encryption password : keep this safe
        requestKey: 'session',    // req.session,
        duration: (86400 * 1000) * 7, // one week in milliseconds
        cookie: {
            ephemeral: false,     // when true, cookie expires when browser is closed
            httpOnly: true,       // when true, the cookie is not accesbile via front-end JavaScript
            secure: false         // when true, cookie will only be read when sent over HTTPS
        }
    }); // encrypted cookies!

mongoose.connect('mongodb://localhost/heroes-of-ajax-with-auth');

var app = express();

// Middleware
app.use(morgan('dev'));
app.use(sessions);
app.use(bodyParser.urlencoded({ extended:true }), bodyParser.json());

// Routes
Routes(app);

app.listen(PORT, ()=>{
    console.log('Server is running on PORT:', PORT);
});
