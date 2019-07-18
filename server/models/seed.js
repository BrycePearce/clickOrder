const Restaurants = require('./Restaurants.js');

Restaurants.deleteMany({}, () => {
    console.log('DB RESET!')
})

const rest = new Restaurants({
    name: "taco bell",
    categories: [{
        sandwiches: [{
            name: "breadedChickenFlatbread",
            description: "A good sandwich",
            img: "./sandwich.jpg",
            price: "$8.99"
        }]
    }]
});

rest.save(() => {
    console.log('seeded db');
})