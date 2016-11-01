// Full App Demo

var exp = require('express');
var app = exp();
var mrg = require('morgan');
var log = mrg('dev');
var body_parser = require('body-parser');
var PORT = process.env.PORT || 3000 ;
var mongoose = require('mongoose');
var Todo = require('./todo.js');
var Routes = require('./routes.js');
Routes(app);

app.use(
    log
    , body_parser.json()
    , body_parser.urlencoded({extended: true })
);

app.listen(PORT, () => { console.info('Server up on port:', PORT); });

mongoose.connect('mongodb://localhost/todos', (err) => {
    console.log( err ? 'Could not connect!' : 'Connected');
});

