var Heroes = require('./controllers/heroes');

module.exports = (app) =>{

    app.get('/', (req, res)=>{
        res.sendFile('index.html', {root : './public/html'})
    });

    
    app.post('/api/heroes', Heroes.create);
    
    app.get('/api/heroes', Heroes.get);
    app.get('/api/heroes/:id', Heroes.get);
    

    // app.get('/:username')
    // app.get('/devaio')
    // app.get('/jiminikiz')
    // app.get('/jiminikiz')
    
    
    


}