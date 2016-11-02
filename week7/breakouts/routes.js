
module.exports = (app) =>{

    app.get('/', (req, res)=>{
        res.status(418).send('its working!')
    });

}