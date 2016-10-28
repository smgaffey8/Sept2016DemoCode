var endpoint = 'http://kanyerest.xyz/api';
var request = require('request');

module.exports = {
    counter: (req, res) => {
        // ES6 template literal way to do string concatenation
        request(`${endpoint}/counter`, (err, response, body) =>{
            //console.log("Body: ", body);
            
            var words = JSON.parse(body);
           
            var arr = [];
            for(prop in words) {
                arr.push({
                    word: prop,
                    count: words[prop]
                });
            }
            //console.log("Array: ", arr);

            res.send({
                error: err,
                response: response,
                body: arr,
            });
        });
    },
    album: (req, res) => {
        request(`${endpoint}/album/${req.query.album}`, (err, response, body) => {
            res.send({
                error: err,
                response: response,
                body: body,
            });
        })
    },
    track: function getTrack(req, res) {
        request(`${endpoint}/track/${req.query.track}`, (err, response, body) =>{
             res.send({
                error: err,
                response: response,
                body: body,
            });
        });
    }
}