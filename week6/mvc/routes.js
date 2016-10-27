// Master routing file which defines all the routes we will have on the back end
var Dashboard = require('./controllers/dashboard.js'),
    API = require('./controllers/api.js');

module.exports = (app) => {

    // set the home/root route and send it off to the appropriate handler
    app.get('/', (req, res) => {
        res.send("HOME PAGE");
    });

    // Dashboard routes
    // create a GET route for dashboard
    app.get('/dashboard', Dashboard.root);
    // create a route for dashboard settings
    app.get('/dashboard/settings', Dashboard.settings);

    // API routes
    // route to handle getting all users
    app.get('/api/users', API.getAll);
    // route to handle getting all user (expects a query parameter of id)
    app.get('/api/user', API.getUser);
    // route to add a new user
    app.post('/api/user', API.add);
}