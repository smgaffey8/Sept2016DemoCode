angular.module("Watapp", [])
    .controller("parkingCtrl", parkingController)
    .controller("restaurantCtrl", restaurantController)
    .factory("locationFact", locationFactory);

parkingController.$inject = ["locationFact"];
restaurantController.$inject = ["locationFact"];

function parkingController(locationFact) {
    var park = this;
    park.greeting = "HELLO";

    park.lots = locationFact.lots;
    park.restaurants = locationFact.restaurants;

    park.filterLots = function(element, index) {
        // if(element.capacity > 30){
        //     return true;
        // }
        // else {
        //     return false;
        // }

        return element.capacity > 30;
    }
}    

function restaurantController(locationFact) {
    var rest = this;
    rest.greeting = "HELLO2";

    rest.restaurants = locationFact.restaurants;
    rest.lots = locationFact.lots;

    rest.restFilter = {};

    rest.getNearestLot = function(index) {
        return rest.lots[index].location;
    }
}

function locationFactory() {
    var lotsData = [
        {
            capacity: 20, 
            cost: 10.00,
            location: "Larimer Square"
        },
        {
            capacity: 100, 
            cost: 3.50,
            location: "Loch Ness"
        },
        {
            capacity: 50, 
            cost: 5.00,
            location: "Downtown"
        },
    ];

    var restaurantsData = [
        {
            name: "Pioneer Pete's",
            menu: ["Pioneer Pizza", "Heart Attack Burger"],
            style: "American"
        },
        {
            name: "Hooter's",
            menu: ["Wings", "Beer", "Nachos"],
            style: "Blue Collar"
        },
        {
            name: "Linger",
            menu: ["Sliders", "Goat Cheese Wrapped in Bacon on a Stick"],
            style: "Really nasty (But actually really good)"
        },
    ];

    // The only thing you absolutely have to have in a factory is a RETURN statement
    return {
        lots: lotsData,
        restaurants: restaurantsData,
    }; // it is very common to return an object here
}


// Filters
// Filters are used to FORMAT values
    // they take an input value and provide a transformed output

// Built in filters:
// currency
// number
// date
// uppercase
// lowercase

// Special built in filters:
// orderBy
// filter

// {{ expression | filter:args }}
// args are generally optional
