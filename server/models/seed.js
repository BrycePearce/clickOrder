const Restaurants = require('./Restaurants.js');

Restaurants.deleteMany({}, () => {
    console.log('DB RESET!');
})

// model
const rest = new Restaurants({
    name: "Taco Bell",
    address: "123 North Ave, Springfield, VA",
    categories: [{
            name: "burritos",
            order: 1
        },
        {
            name: "!sweets !@#and!@# treats!",
            order: 2
        }
    ],
    menu: [{
            name: "bean burrito",
            category: "burritos",
            price: "$1.99",
            description: "A tortilla with refried beans inside. What's that other stuff? Don't worry about it.",
            image: "todo",
            order: 1,
            soldOut: false,
            comboItem: true, // if this is enabled, don't need to show price of combo items. If not, show price of combo items. Can also prompt user if they want to make it a combo. Also can be used to check whether it should be required or not
            customization: {
                substitutableIngredients: [{
                        name: 'Wheat Tortilla',
                        order: 2,
                        additionalCost: '$0.10'
                    },
                    {
                        name: 'Wheat Tortilla',
                        order: 2,
                        additionalCost: '$0.10'
                    },
                    {
                        name: 'No Tortilla',
                        order: 1,
                        subtractableCost: '$0.10'
                    },
                    {
                        name: 'Pinto Beans',
                        order: 3,
                        subtractableCost: '$0.10'
                    }
                ],
                additionalIngredients: [{
                        name: 'Cheddar Cheese',
                        order: 3,
                        additionalCost: '$0.99'
                    },
                    {
                        name: 'Sour Cream',
                        order: 2
                    },
                    {
                        name: 'Salsa',
                        order: 1
                    },
                    {
                        name: 'Roma tomato',
                        order: 4,
                        additionalCost: '$0.20'
                    }
                ],
                removableIngredients: [{
                        name: 'Tortilla',
                        order: 2,
                        subtractableCost: '$0.10'
                    },
                    {
                        name: 'Refried Beans',
                        order: 1
                    }
                ]
            },
            comboSelections: { // these are all the combo sides
                sides: [{
                        name: "Frito Lay's",
                        additionalCost: null,
                        maxSelections: 10,
                        minSelections: 0,
                        soldOut: false,
                        order: 2
                    },
                    {
                        name: "Dorito's Cool Ranch",
                        additionalCost: '$1.38',
                        maxSelections: 10,
                        minSelections: 0,
                        soldOut: false,
                        order: 1
                    },
                    {
                        name: "Caesar Salad",
                        additionalCost: '$3.38',
                        maxSelections: 10,
                        minSelections: 0,
                        soldOut: false,
                        order: 3
                    },
                    {
                        name: "Garden Salad",
                        additionalCost: null,
                        maxSelections: 10,
                        minSelections: 0,
                        soldOut: false,
                        order: 4
                    }
                ],
                drinks: [{
                        name: 'Water',
                        additionalCost: null,
                        maxSelections: 10,
                        minSelections: 0,
                        soldOut: false,
                        order: 2
                    },
                    {
                        name: 'Doc Pepp',
                        additionalCost: '$1.99',
                        maxSelections: 10,
                        minSelections: 0,
                        soldOut: false,
                        order: 1
                    }
                ]
            }
        },
        {
            name: "5 layer burrito",
            category: "burritos",
            price: "$8.99",
            description: "A burrito with layers on layers, on LAYERS. Sort of like onions.",
            order: 2,
            image: null,
            soldOut: false,
            customization: {
                substitutableIngredients: [{
                        name: 'Wheat Tortilla',
                        order: 2,
                        additionalCost: '$0.10'
                    },
                    {
                        name: 'No Tortilla',
                        order: 1,
                        subtractableCost: '$0.10'
                    },
                    {
                        name: 'Pinto Beans',
                        order: 3,
                        subtractableCost: '$0.10'
                    }
                ],
                additionalIngredients: [{
                        name: 'Extra Cheese',
                        order: 3,
                        additionalCost: '$0.99'
                    },
                    {
                        name: 'Sour Cream',
                        order: 2
                    },
                    {
                        name: 'Salsa',
                        order: 1
                    },
                    {
                        name: 'Roma tomato',
                        order: 4,
                        additionalCost: '$0.20'
                    }
                ],
                removableIngredients: [{
                        name: 'Tortilla',
                        order: 2,
                        subtractableCost: '$0.10'
                    },
                    {
                        name: 'Refried Beans',
                        order: 1
                    },
                    {
                        name: 'Cheddar Cheese',
                        order: 3
                    },
                    {
                        name: 'Ground Beef',
                        order: 4
                    }
                ]
            },
            comboSelections: { // these are all the combo sides
                sides: [{
                    name: "Frito Lay's",
                    additionalCost: null,
                    maxSelections: 10,
                    minSelections: 0,
                    soldOut: false,
                    order: 2
                }, {
                    name: "Dorito's Cool Ranch",
                    additionalCost: '$1.38',
                    maxSelections: 10,
                    minSelections: 0,
                    soldOut: false,
                    order: 1
                }, {
                    name: "Caesar Salad",
                    additionalCost: '$3.38',
                    maxSelections: 10,
                    minSelections: 0,
                    soldOut: false,
                    order: 3
                }, {
                    name: "Garden Salad",
                    additionalCost: null,
                    maxSelections: 10,
                    minSelections: 0,
                    soldOut: false,
                    order: 4
                }, {
                    name: 'Water',
                    additionalCost: null,
                    maxSelections: 10,
                    minSelections: 0,
                    soldOut: false,
                    order: 2
                }, {
                    name: 'Cola',
                    additionalCost: '$1.99',
                    maxSelections: 10,
                    minSelections: 0,
                    soldOut: false,
                    order: 1
                }]
            }
        },
        {
            name: "!Cinnamon @ Sticks!",
            category: "!sweets !@#and!@# treats!",
            price: "$2.00",
            description: "You Cinna you want some?",
            order: 1,
            soldOut: false,
            comboItem: false,
            customization: {
                substitutableIngredients: [],
                additionalIngredients: [],
                removableIngredients: []
            },
            comboSelections: []
        }
    ]
});

rest.save(() => {
    console.log('seeded db');
})