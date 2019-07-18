const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Restaurants = new Schema({
    name: String,
    categories: [{
        sandwiches: [{
            name: String,
            description: String,
            img: String,
            price: String
        }]
    }]
})
module.exports = mongoose.model('Restaurants', Restaurants);