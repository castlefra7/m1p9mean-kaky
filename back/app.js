require('./dotenv')
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const userApi = require('./users/index.js');
const restauApi = require('./restaurants/index.js');
const orderApi = require('./orders/index');


mongoose.connect(process.env.DB_URL)
    .then((data) => {
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());

        app.use('/users', userApi);
        app.use('/restaurants', restauApi);
        app.use('/orders', orderApi);

        app.get('/', function (req, res) {
            res.send("Home page");
        });

        app.listen(PORT, () => {
            console.log(`App is running on port ${PORT}`);
        });

    })
    .catch((err) => {
        console.log(err);
    });