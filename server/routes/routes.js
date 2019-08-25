'use strict';
// todo: rename this to menu routes file?
const express = require('express');
const router = express.Router();

// Middleware
const images = require('../middleware/images');

// Schemas
const Restaurants = require('../models/Restaurants.js');

router.get('/:restaurantId/menu', function (req, res) { // todo: potentially seperate customization into a seperate route (called after intial call resolves, or customization page loaded)
    Restaurants.findOne({})
        .then(restaurants => {
            return res.status(200).json(restaurants);
        })
        .catch(err => {
            console.log('error', err);
            return;
        })
});

router.post('/:restaurantId/menu/uploadImage', images.multer.single('image'), images.sendUploadToGCS, function (req, res, next) {
    const data = req.body;

    // Was an image uploaded? If so, we'll use its public URL in cloud storage.
    if (req.file && req.file.cloudStoragePublicUrl) {
        data.imageUrl = req.file.cloudStoragePublicUrl;
    }

    // 200 OK (todo: delete when entry in db is done)
    console.log('done', data.imageUrl);
    return res.status(200);

    // todo: Save the data to the database. https://cloud.google.com/nodejs/getting-started/using-cloud-storage
    // getModel().create(data, (err, savedData) => {
    //     if (err) {
    //         next(err);
    //         return;
    //     }
    //     res.redirect(`${req.baseUrl}/${savedData.id}`);
    // });
    // }
}, (error, req, res, next) => {
    res.status(400).send({
        error: error.message
    })
});

// reference: https://stripe.com/docs/charges
// todo: store record of charge in database, need records of all transactions
router.post('/:restaurantId/payment', async function (req, res) {
    // Token is created using Checkout or Elements!
    // Get the payment token ID submitted by the form:
    const stripe = require('stripe')([process.env.STRIPE_TEST_KEY]);
    const token = req.body.token.id; // Using Express

    const charge = await stripe.charges.create({
        amount: 999,
        currency: 'usd',
        description: 'Example charge',
        source: token
    });
    return res.status(200);
});


module.exports = router;