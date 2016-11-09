var Heroes = require('./controllers/heroes');
var Hqs = require('./controllers/hqs');

module.exports = (app) =>{

    app.get('/', (req, res)=>{
        res.sendFile('index.html', {root : './public/html'})
    });
    
    //
    // ─── USER ROUTES ────────────────────────────────────────────────────────────────
    //
    app.post('/api/heroes', Heroes.create);
    app.get('/api/heroes', Heroes.get);
    app.get('/api/heroes/:id', Heroes.get);
    // ────────────────────────────────────────────────────────────────────────────────

    //
    // ─── HQ ROUTES ──────────────────────────────────────────────────────────────────
    //
    app.post('/api/hqs', Hqs.create);
    app.get('/api/hqs', Hqs.get);
    // ────────────────────────────────────────────────────────────────────────────────

    // app.post('/api/villains', Villains.create);
    // app.get('/api/villains', Villains.get);
    // app.get('/api/villains/:id', Villains.get);

    // app.get('/:username')
    // app.get('/devaio')
    // app.get('/jiminikiz')
    // app.get('/jiminikiz')
    
    
    


}