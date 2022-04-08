require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const passport = require('passport');
const userApi = require('./users/index.js');
const restauApi = require('./restaurants/index.js');
const orderApi = require('./orders/index');
require('./config/passport');


mongoose.connect(process.env.DB_URL)
    .then((data) => {
        
        app.use(express.urlencoded({extended: true}));
        app.use(express.json());
        app.use('/api', (req, res, next) => {
            res.header('Access-Control-Allow-Origin', `http://localhost:${PORT}`);
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization');
            next();
        });

        app.use('/api/users', userApi);
        app.use(passport.initialize());
        
        app.use('/api/restaurants', restauApi);
        app.use('/api/orders', orderApi);

        app.get('/', function (req, res) {
            res.send("Home page");
        });

        app.use((err, req, res, next) => {
            console.error(err);
            if(err.name === 'UnauthorizedError') res.status(401).json({"message": err.name + ": " + err.message});
        });

        app.listen(PORT, () => {
            console.log(`App is running on port ${PORT}`);
        });

    })
    .catch((err) => {
        console.log(err);
    });