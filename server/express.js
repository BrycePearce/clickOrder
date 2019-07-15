'use strict'

const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000;
const cors = require('cors');

const app = express()

// temp
const mockData = require('./mock/menuItem.json');

// const middleware = require('./middleware')
// const router = require('./router')

// Middleware
app.use(cors()); // todo: remove for prod (enable/disable via some env variables)

app.use(express.static(path.join(__dirname, 'public')));
// host static stuff, such as images. Eventually this needs to be moved to cloud for size/speed.

// app.use(router.middleware())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:restaurantId/menu', function (req, res) {
    return res.status(200).json(mockData);
});

// start and listen to port
app.listen(port, () => {
    console.log(`Service is up on port ${__dirname} ${port}!`);
});