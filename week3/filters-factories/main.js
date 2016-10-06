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
}    

function restaurantController(locationFact) {
    var rest = this;
    rest.greeting = "HELLO2";

    rest.restaurants = locationFact.restaurants;
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
        restaurants: restaurantsData
    }; // it is very common to return an object here
}