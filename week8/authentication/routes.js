var Heroes = require('./controllers/heroes'),
    Auth = require('./controllers/auth');

module.exports = (app) =>{


    // app.get('/login')
    // app.post('/login')

    // app.get('/register')
    app.post('/register', Auth.register);

    app.post('/api/heroes', Heroes.create);
    app.get('/api/heroes', Heroes.get);
    app.get('/api/heroes/:id', Heroes.get);

    // app.post('/api/villains', Villains.create);
    // app.get('/api/villains', Villains.get);
    // app.get('/api/villains/:id', Villains.get);

    // app.get('/:username')
    // app.get('/devaio')
    // app.get('/jiminikiz')
    // app.get('/jiminikiz')





}
