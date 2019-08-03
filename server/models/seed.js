const Restaurants = require('./Restaurants.js');

Restaurants.deleteMany({}, () => {
    console.log('DB RESET!')
})

const rest = new Restaurants({
    name: "Taco Bell",
    address: "123 North Ave, Springfield, VA",
    categories: [{
            name: "burritos",
            order: 1
        },
        {
            name: "desserts",
            order: 2
        }
    ],
    menu: [{
            name: "bean burrito",
            category: "burritos",
            price: "$1.99",
            description: "A burrito with beans, wrapped in a tortilla",
            image: "todo",
            order: 1,
            soldOut: false,
            customization: [{
                name: 'String',
                price: 'String',
                maxSelections: 10,
                minSelections: 0,
                soldOut: false,
                additionalCustomization: [{
                    name: 'String',
                    price: 'String'
                }]
            }]
        },
        {
            name: "5 layer burrito",
            category: "burritos",
            price: "$8.99",
            description: "A burrito with layers on layers, on LAYERS. Sort of like onions.",
            order: 2,
            image: null,
            soldOut: false,
            customization: [{
                name: 'String',
                price: 'String',
                maxSelections: 10,
                minSelections: 0,
                soldOut: false,
                additionalCustomization: [{
                    name: 'String',
                    price: 'String'
                }]
            }]
        },
        {
            name: "cinnamonSticks",
            category: "desserts",
            price: "$2.00",
            description: "You Cinna you want some?",
            order: 1,
            soldOut: false,
            customization: [{
                name: 'String',
                price: 'String',
                maxSelections: 10,
                minSelections: 0,
                soldOut: false,
                additionalCustomization: [{
                    name: 'String',
                    price: 'String'
                }]
            }]
        }
    ]
});

rest.save(() => {
    console.log('seeded db');
})