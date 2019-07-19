const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Restaurants = new Schema({
    name: String,
    address: String,
    menu: [{
        name: String,
        category: String,
        price: String,
        description: String
    }]
    // configuration: {
    // todo
    // }
})
module.exports = mongoose.model('Restaurants', Restaurants);