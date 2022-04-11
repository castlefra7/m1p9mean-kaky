var express = require('express');
var router = express.Router();
const jwt = require('express-jwt');
const Dish = require('./dishModel');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    userProperty: 'payload'
});

router.get('/', auth, function (req, res) {
    const query = {};
    if (req.query['restau-id']) {
        query['restau_id'] = req.query['restau-id'];
    }

    Dish.find(query, function (err, data) {
        if (err) return res.status(400).json({
            "message": err
        });
        if (data) res.status(200).send(data);
        else res.status(404).json({
            "messsage": "Empty data"
        });
    });
});

router.get('/:dish_id', auth, function (req, res) {
    Dish.findById(req.params.dish_id, function (err, data) {
        if (err) return res.status(400).json({
            "message": err
        });
        if (!req.payload.restau_id) return res.status(404).json({"message": "You don't have permission"});
        if(req.payload.restau_id !== data.restau_id.toString()) return res.status(404).json({"message": "You don't have permission"});
        if (data) res.status(200).send(data);
        else res.status(404).json({
            "messsage": "Empty data"
        });
    });
});

router.post('/', auth, function (req, res) {
    if (req.payload && req.payload.name) {
        const newDish = new Dish(req.body);
        if (req.payload.role === 2 && req.payload.restau_id) {
            newDish.restau_id = req.payload.restau_id;
        }
        newDish.save().then(data => res.status(200).send(data)).catch(err => res.status(500).send(err));
    } else res.status(404).json({
        "message": "User not found"
    });
});

router.put('/:dish_id', auth, function (req, res) {
    //TODO:  && req.payload.role != 1 && req.payload.role != 3
    if (req.payload && req.payload.name) {
        if (req.params.dish_id) {
            
            Dish.findById(req.params.dish_id).exec((err, dish) => {
                if (req.payload.restau_id !== dish.restau_id.toString()) return res.status(403).json({
                    "message": "You don't have permission to modify this"
                });
                dish.name = req.body.name;
                dish.price = req.body.price;
                dish.save((err, sDish) => {
                    if (err) res.status(404).json(err);
                    else res.status(200).json(sDish);
                });
            });
        } else res.status(404).json({
            "message": "Not found dish"
        });

    } else res.status(404).json({
        "message": "User not found"
    });
});

router.delete('/:dish_id', auth, function (req, res) {
    if (req.params.dish_id && req.payload.role != 1) {
        Dish.findById(req.params.dish_id).exec((err, dish) => {
            if (!dish) return res.status(404).json({
                "message": "Dish not found"
            });
            if (req.payload.restau_id !== dish.restau_id.toString()) return res.status(403).json({
                "message": "You don't have permission to modify this"
            });
            Dish.findByIdAndRemove(req.params.dish_id).exec((err, d) => {
                if (err) return res.status(404).json(err);
                res.status(204).json(null);
            });
        });

    } else res.status(404).json({
        "message": "No dish"
    })
})

module.exports = router;