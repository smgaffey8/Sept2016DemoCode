var express = require('express');
var cookieParser = require('cookie-parser'); // req.cookies
var bodyParser = require('body-parser'); // req.body

var app = express();

// using bodyParser gives us access to req.body
app.use(bodyParser.json(), bodyParser.urlencoded({extended:true}));

// using cookieParser gives us access to req.cookies
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("EAT COOKIES!!");
});

app.get('/cookie', (req, res) => {
    // {cookie-key: cookie-value}
    res.cookie('cookie-key', 'cookie-value');
    res.cookie('artist-formally-known-as', 'prince');
    res.cookie('your-mom', 'fat-too-many-cookies');
    res.cookie('login', Math.random(), {httpOnly: true}); // 3rd argument is a configuration object, in this case it says that the cookie cannot be accessed through JavaScript
    res.send("SET SOME COOKIES!!!");
});

app.get('/tempCookie', (req, res)=>{
    res.cookie('temp-cookie','temp-value',{maxAge: 5000}); //expires after 5 seconds
    res.send("Set temp cookie!");
});


app.listen(3030, (error) => {
    if(error){
        console.log("Error: ", error);
    } else {
        console.log("Server is up!");
    }
});