'use strict';

const express = require('express');
const router = express.Router();

// Schema
const Restaurants = require('../models/Restaurants.js');

router.get('/:restaurantId/menu', function (req, res) {
    Restaurants.findOne({})
        .then(restaurants => {
            return res.status(200).json(restaurants);
        })
        .catch(err => {
            console.log('error', err);
            return;
        })
});

module.exports = router;