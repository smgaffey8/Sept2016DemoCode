var Heroes = require('./controllers/heroes');

module.exports = (app) =>{

    app.get('/', (req, res)=>{
        res.status(418).send('its working!');
    });

    
    app.post('/api/heroes', Heroes.create);
    
    // app.get('/api/heroes')
    


}