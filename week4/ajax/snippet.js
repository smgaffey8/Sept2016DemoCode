function getAThing() {
    $http.get('http://example.com/things/').then(
        function(data, status){
            console.log("Got at least one thing");
        },
        function(data, status){
            console.log('I got nothing.');
        });
}