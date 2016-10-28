angular.module("MrWest", [])
    .controller("kCheddah", kController);

kController.$inject = ['$http'];

function kController($http) {
    var kanye = this;

    kanye.greeting = "Imma let you finish...";

    $http.get('/api/kanye/counter').then(function(response) {
        // kanye.counter = JSON.parse(response.data.response.body);
        // console.log(kanye.counter);

        // kanye.counter at this point is a big object with property names which are the words and the values are how many times he has said it

        // massage the data into an array on the front end
        // this can also be done on the back end in order to make the page load faster because node is much faster than browser JavaScript
        // an array of objects is easier to sort using ng-repeat
        // kanye.arr = [];
        // for(prop in kanye.counter) {
        //     kanye.arr.push({
        //         word: prop,
        //         count: kanye.counter[prop]
        //     });
        // }

        // console.log(kanye.arr);
        //console.log(response.data.body);

        // the data has already been massaged on the back end now
        kanye.arr = response.data.body;
    });
}    