var express = require('express'),
    logger = require('morgan')('dev'),
    fileServer = express.static('public'),
    app = express(),
    PORT = 3000;

app.use(logger, fileServer);

app.get('/api', (req, res)=>{
    res.send({
        food : 'pizza',
        beer : 'yes'
    })
});

// app.listen returns an http server object - we will export it so we can use it in our tests
module.exports = app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`)
})
