'use strict'

const express = require('express');
const path = require('path');
const cors = require('cors');

// Routes
const routeBasic = require('./routes/routes.js')

const port = process.env.PORT || 3000;

const app = express()

// Mongo
const uri = "mongodb+srv://Node:HoDEHLTz7ejELDFJ@cluster0-wyeof.gcp.mongodb.net/test?retryWrites=true&w=majority";
const mongoose = require('mongoose');


mongoose.connect(uri, {
    useNewUrlParser: true
});

require('./models/seed.js');

// const middleware = require('./middleware')
// const router = require('./router')

// Middleware
app.use(cors()); // todo: remove for prod (enable/disable via some env variables)

// Set Routes
app.use('/api', routeBasic);

// host static stuff, such as images. Eventually this needs to be moved to cloud for size/speed.
app.use(express.static(path.join(__dirname, 'public')));

// app.use(router.middleware())


// start and listen to port
app.listen(port, () => {
    console.log(`Service is up on port ${__dirname} ${port}!`);
});