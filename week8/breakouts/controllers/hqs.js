var HQ = require('../models/hqModel');

module.exports = {
    create : (req, res) =>{
        var newDoc = new HQ(req.body);
    
        newDoc.save((err, doc)=>{
            if(err){
                return res.send(err);
            }
            res.send(doc);
        });
    },
    get : (req, res) =>{

        HQ.find({}, (err, docs)=>{
            if(err){
                return res.send(err);
            }
            res.json(docs);
        })

    }
}