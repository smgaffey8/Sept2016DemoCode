var HTTP = require('http'),
    HTTPS = require('https'),
    express = require('express'),
    logger = require('morgan')('common')
    app = express(),
    fs = require('fs'),
    ports = {
        http:  process.env.PORT || 80,      // default HTTP port
        https: process.env.PORT_SSL || 443  // default HTTPS port
    };

// log out server messages for the http/https server
app.use(logger);

// this middleware can redirect all traffic to HTTPs, but be sure to mount it BEFORE express.static middleware!!!
app.all('*', ( req, res, next ) => {
    if( req.protocol === 'http' ) {
        res.set('X-Forwarded-Proto','https');
        res.redirect('https://'+ req.headers.host + req.url);
    } else {
        next();
    }
});

// handle the root route
app.get('/', (req, res) => {
    res.send('Hello!');
});

// start an http server listening on the default port
HTTP.createServer( app ).listen( ports.http );

// start an https server listening on the default port
// we use try/catch in case the https configuration fails
try {
    var httpsConfig = { // https://nodejs.org/api/https.html
         key:  fs.readFileSync('/etc/letsencrypt/live/<your_domain>/privkey.pem'),
         cert: fs.readFileSync('/etc/letsencrypt/live/<your_domain>/cert.pem')
    };
    HTTPS.createServer( httpsConfig, app ).listen( ports.https );
} catch (e) {
    console.error('Could not HTTPS server:', e);
}