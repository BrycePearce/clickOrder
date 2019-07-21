'use strict';
// todo: make this menu routes file?
const express = require('express');
const router = express.Router();

// Middleware
const images = require('../middleware/images');

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

router.post('/:restaurantId/menu/uploadImage', images.multer.single('image'), images.sendUploadToGCS, function (req, res, next) {
    const data = req.body;

    // Was an image uploaded? If so, we'll use its public URL in cloud storage.
    if (req.file && req.file.cloudStoragePublicUrl) {
        data.imageUrl = req.file.cloudStoragePublicUrl;
    }

    // 200 OK (todo: delete when entry in db is done)
    res.send(data.imageUrl);

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

module.exports = router;