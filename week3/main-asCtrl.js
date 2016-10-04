angular.module('app', [])
    .controller('mainCtrl', mainController);

function mainController(){
    console.log('Hello world1!');
	var main = this;
    
    // an array of strings
    main.dwarves = [
        'sleepy',
        'dopey',
        'doc',
        'bashful',
        'sneezy',
        'grumpy',
        'codey',

    ];

    // an object with properties
    main.dwarvesObj = {
        'sleepy' : 'the napping one',
        'dopey' : 'the slow one',
        'doc' : 'has glasses',
        'bashful' : 'is shy',
        'sneezy' : 'has allergies',
        'grumpy' : 'is related to matt',
        'codey' : 'loves refactoru',  
    };

    // an array of strings with duplicate values
    main.cloneDwarves = [
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

    // an array of objects which contain a property that is an array
    main.arrObjDwarves = [
        {name : 'sleepy', hobbies : ['sleeping', 'napping']},
        {name : 'doc', hobbies : ['reading', 'trauma surgery']},
        {name : 'dopey', hobbies : ['smoking', 'licking walls']},
    ];
    
    // just because we can
    main.logDwarf = function(dwarf){
        console.log(dwarf);
    };

};

