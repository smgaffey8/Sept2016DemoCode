var Hero = require('../models/heroesModel'); // db.heroes

function create (req, res) {

    var newDoc = new Hero(req.body);
    
    newDoc.save((err, doc)=>{
        if(err){
            return res.send(err);
        }
        res.send(doc);
    });
}

module.exports = {
    create : create,
}

// module.exports = {
//     create : (req, res) =>{

//     },
// }