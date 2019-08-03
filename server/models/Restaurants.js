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
        customization: [{ // sides / remove ingredients
            name: String,
            price: String,
            maxSelections: {
                type: String,
                default: 50
            },
            minSelections: {
                type: String,
                default: 0
            },
            soldOut: Boolean,
            additionalCustomization: [{
                name: String,
                price: String
            }]
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