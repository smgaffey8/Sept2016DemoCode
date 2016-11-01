angular.module('ToDoApp',[]);

angular.module('ToDoApp')
    .controller('todoController', todoCtrl);

todoCtrl.$inject = ['$http'];

function todoCtrl($http){
    var todoCtrl = this;

    todoCtrl.todos = [] ;
    todoCtrl.newTodo = {
        title: ""
    };

    todoCtrl.addTodo = function() {
        console.log("TodoControl called");
        var result = $http.post('/api/todos',
                                todoCtrl.newTodo);
        console.log("TodoControl result: ", result);
        result.then(
            function(resp){
                console.log("Response is: ", resp);
                todoCtrl.getTodos();
                console.log("Todos in addTodo: ", todoCtrl.todos);
            },
            function(err){
                console.error("Err: ", err);
            }
        );
    };

    todoCtrl.getTodos = function(){
        console.log("getTodos Called");
        $http.get('/api/todos').then(
            function(resp){
                console.log("Get response was: ", resp);
                todoCtrl.todos = resp.data;
                console.log("Todos array: ", todoCtrl.todos);
            },
            function(err){
                console.error("Error! ",err);
            }
        );
    };

    todoCtrl.markDone = function(todo){
        console.log("markDone, got todo: ", todo);
        $http.put('/api/todos', todo).then(
            function(resp){
                console.log('put response was: ', resp);
            },
            function(err){
                console.error('put error! ', err);
            });
    };

    todoCtrl.getTodos();
}
