const Restaurants = require('./Restaurants.js');

Restaurants.deleteMany({}, () => {
    console.log('DB RESET!')
})

const rest = new Restaurants({
    name: "Taco Bell",
    address: "123 North Ave, Springfield, VA",
    menu: [{
            name: "bean burrito",
            category: "burritos",
            price: "8.99$",
            description: "A burrito with beans"
        },
        {
            name: "5 layer burrito",
            category: "burritos",
            price: "8.99$",
            description: "A burrito with LAYERS"
        },
        {
            name: "cinnamonSticks",
            category: "desserts",
            price: "$2.00",
            description: "You Cinna you want some?"
        }
    ]
});

rest.save(() => {
    console.log('seeded db');
})