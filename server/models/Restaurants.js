const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ = require('lodash');

const Restaurants = new Schema({
    name: String,
    address: String,
    categories: [{
        name: String,
        order: Number
    }],
    menu: [{
        name: String,
        category: String,
        price: String,
        description: String,
        order: Number, // display order
        soldOut: Boolean,
        comboItem: {
            type: Boolean,
            default: false
        },
        customization: { // todo: should this be a computed property?
            substitutableIngredients: [{
                name: String,
                order: Number,
                additionalCost: {
                    type: String,
                    default: null
                },
                subtractableCost: {
                    type: String,
                    default: null
                }
            }],
            additionalIngredients: [{
                name: String,
                order: Number,
                additionalCost: {
                    type: String,
                    default: null
                }
            }],
            removableIngredients: [{
                name: String,
                order: Number,
                subtractableCost: {
                    type: String,
                    default: null
                }
            }]
        },
        comboSelections: [{ // combo options if combo selected. Otherwise will have  to pick sides from a 'sides' selection
            categoryName: String,
            categoryOrder: Number,
            name: String,
            additionalCost: {
                type: String,
                default: null
            },
            maxSelections: {
                type: String,
                default: 15
            },
            minSelections: {
                type: String,
                default: 0
            },
            soldOut: {
                type: Boolean,
                default: false
            },
            order: Number
        }],
        image: {
            type: String,
            default: null
        }
    }]
});

Restaurants.set('toJSON', {
    virtuals: true
})

Restaurants.virtual('groupedMenu') // it's named virtual since it isn't directly from database
    .get(function () {
        return _.groupBy(this.menu, menu => menu.category);
    });

module.exports = mongoose.model('Restaurants', Restaurants);