const Restaurants = require('./Restaurants.js');

Restaurants.deleteMany({}, () => {
    console.log('DB RESET!')
})

const rest = new Restaurants({
    name: "Taco Bell",
    address: "123 North Ave, Springfield, VA",
    categories: [{
            name: "burritos",
            order: 2
        },
        {
            name: "desserts",
            order: 1
        }
    ],
    menu: [{
            name: "bean burrito",
            category: "burritos",
            price: "$8.99",
            description: "A burrito with beans, wrapped in a tortilla",
            image: "todo",
            order: 2,
        },
        {
            name: "5 layer burrito",
            category: "burritos",
            price: "$8.99",
            description: "A burrito with layers on layers, on LAYERS. Sort of like onions.",
            order: 1,
            image: null
        },
        {
            name: "cinnamonSticks",
            category: "desserts",
            price: "$2.00",
            description: "You Cinna you want some?",
            order: 1
        }
    ]
});

rest.save(() => {
    console.log('seeded db');
})