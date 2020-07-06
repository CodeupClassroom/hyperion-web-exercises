var rubberDuck = {
    color: "yellow",
    role: "emotional support",
    name: "Cody"
};

var familyCar = {
    color: "red",
    make: "Toyota",
    model: "Rav4",
    year: 2016,
    role: "grocery-getter"
};

let computer = {
    color: "silver",
    type: "MacBook Pro",
    year: 2019
};

let tiger = {};
let truck = new Object();

console.log(familyCar.model);
rubberDuck.age = 6;


tiger.sayHello = function(){
    console.log("Rrrroaaarrr!!!");
};

tiger.sayHello();

let batman = {
    symbol: "bat",
    color: "black",
    name: "Bruce Wayne",
    superHeroName: "Batman",
    sayHello: function() {
        alert("I'm " + this.superHeroName);
    }
};
console.log(batman.symbol);
console.log(batman["symbol"]);


var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + "."); //Toyota Camry
console.log("The owner of the second car is " + cars[1].owner.name + "."); //John Doe

console.log("Here are all the features of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});

