angular.module('app', [])
    .controller('mainCtrl', ['$scope', mainController]);

function mainController ($scope){
    console.log('Hello world!');

    // an array of strings
    $scope.monkeys = [
        'sleepy',
        'dopey',
        'doc',
        'bashful',
        'sneezy',
        'grumpy',
        'codey',

    ];

    // an object
    $scope.dwarvesObj = {
        'sleepy' : 'the napping one',
        'dopey' : 'the slow one',
        'doc' : 'has glasses',
        'bashful' : 'is shy',
        'sneezy' : 'has allergies',
        'grumpy' : 'is related to matt',
        'codey' : 'loves refactoru',  
    };

    // an array of strings with some duplicate values
    $scope.cloneDwarves = [
        'sleepy',
        'dopey',
        'doc',
        'doc',
        'bashful',
        'sneezy',
        'sneezy',
        'sneezy',
        'grumpy',
        'codey',
    ];

    // an array of objects with properties, including a property that is an array
    $scope.arrObjDwarves = [
        {name : 'sleepy', hobbies : ['sleeping', 'napping']},
        {name : 'doc', hobbies : ['reading', 'trauma surgery']},
        {name : 'dopey', hobbies : ['smoking', 'licking walls']},
    ];
    
    // just because we can
    $scope.logDwarf = function(dwarf){
        console.log(dwarf);
    };
};

