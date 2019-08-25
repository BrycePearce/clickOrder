'use strict'
require('dotenv').config()

const express = require('express');
const path = require('path');
const cors = require('cors');

// Routes
const routeBasic = require('./routes/routes.js')

const port = process.env.PORT || 3000;

const app = express()

// Mongo
const uri = process.env.MONGO_URI;
const mongoose = require('mongoose');

mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false
});
require('./models/seed.js');

// const middleware = require('./middleware')
// const router = require('./router')

// Global Middleware
app.use(express.json());
app.use(cors()); // todo: remove for prod (enable/disable via some env variables)

// Set Routes
app.use('/api', routeBasic);

// host static stuff, such as images
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(router.middleware())


// start and listen to port
app.listen(port, () => {
    console.log(`Service is up on port ${__dirname} ${port}!`);
});