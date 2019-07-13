'use strict'

const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000;

const app = express()

// const middleware = require('./middleware')
// const router = require('./router')

// app.use(router.middleware())
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log(`Service is up on port ${port}!`);
});