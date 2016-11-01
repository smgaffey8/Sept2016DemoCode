// Routes for our app

var Todo = require('./todo.js');

module.exports = (app) => {
    app.get('/api/todos', (req, res) => {
        Todo.find(req.query, (err, todos) => {
            if(err){
                console.error(err);
                res.status(500).json(err);
            } else {
                res.json(todos);
            }
        });
    });

    app.post('/api/todos', (req, res) => {
        console.log('In app.post, body:', req.body);
        new Todo(req.body).save((err, todo) => {
            if(err) {
                console.error(err);
                res.status(500).json(err);
            } else {
                res.json(todo);
            }
        });
    });

    app.put('/api/todos', (req,res) => {
        console.log('in app.put, body: ', req.body);
        Todo.update({ '_id': req.body._id },
                    { 'done' : req.body.done },
                    function(err, doc){
                        if(err){
                            console.error('app.put update error! ', err);
                        } else {
                            console.log('Successful update!')
                        }
                    });
    });

}
