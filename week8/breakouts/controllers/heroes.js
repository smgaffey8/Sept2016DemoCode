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

function get (req, res) {
    // get One
    if(req.params.id){
        Hero.findOne({_id : req.params.id}, (err, document)=>{
            if(err){
                // if(err.name === "CastError" && err.kind === "ObjectId"){
                //     return res.send(`That ain't no ID`)
                // }
               
                return res.send(err);
            }
            if(!document){
                return res.send('No one with that id')
            }
            res.send(document);
        });
    }
    // get Many
    else{
        Hero
            .find({})
            // .sort()
            // .limit()
            .populate('headquarter')
            // Mongoose method chains MUST end with exec - its where you put your callback
            .exec((err, documents)=>{
                // res.send(err || documents)
                if(err){
                    return res.send(err);
                }
                res.send(documents);
            })

        // headquarter : 38923891982389123
        // headquarter : {
        //     name : 'batcave'...
        // }
    }
}

module.exports = {
    create : create,
    get    : get,
}

// module.exports = {
//     create : (req, res) =>{

//     },
// }