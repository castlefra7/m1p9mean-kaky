const User = require('../users/userModel');
const Order = require('./orderModel');

const findByStatusAndRest = (req, res) => {
    Order.find({
        'details.status': req.query['status'],
        'details.restau_id': req.query['restau-id']
    }, function (err, data) {
        if (err) return res.status(400).json({
            "message": err
        });

        if (data) {
            const status = parseInt(req.query['status']);
            data.forEach(order => {
                order.details = order.details.filter(value => {
                    return value.status === status && value.restau_id == req.query['restau-id'];
                });
            });
            res.status(200).send(data);
        } else res.status(404).json({
            "messsage": "Empty data"
        });
    });
}

const findByStatus = (req, res) => {
    Order.find({
        'details.status': req.query['status'],
    }, function (err, data) {
        if (err) return res.status(400).json({
            "message": err
        });

        if (data) {
            const status = parseInt(req.query['status']);
            data.forEach(order => {
                order.details = order.details.filter(value => {
                    return value.status === status;
                });
            });
            res.status(200).send(data);
        } else res.status(404).json({
            "messsage": "Empty data"
        });
    });
}

const findAll = (req, res) => {
    Order.find(function (err, data) {
        if (err) return res.status(400).json({
            "message": err
        });
        if (data) res.status(200).send(data);
        else res.status(404).json({
            "messsage": "Empty data"
        });
    });
}

const getProfits = (req, res) => {
    Order.find({
        'details.restau_id': req.query['restau-id']
    }, function (err, data) {
        if (err) return res.status(400).json({
            "message": err
        });
        if (data) {
            const dishes_profits = [];
            const seen_dishes = new Set();
            data.forEach(order => {
                order.details.forEach(detail => {
                    if (detail.restau_id == req.query['restau-id']) {
                        if (seen_dishes.has(detail.dish_id.toString()) == false) {
                            // Schema of a single dish profits
                            seen_dishes.add(detail.dish_id.toString());
                            dishes_profits.push({
                                id: detail.dish_id,
                                restau_id: detail.restau_id,
                                amount: detail.amount,
                                name: detail.name
                            });
                        } else {
                            dishes_profits.forEach(dish => {
                                if (dish.id == detail.dish_id.toString()) {
                                    dish.amount += detail.amount;
                                }
                            });
                        }
                    }
                });
            });
            res.status(200).send(dishes_profits);
        } else res.status(404).json({
            "messsage": "Empty data"
        });
    });
}

const makeOrder = (req, res) => {
    User.findOne({
            name: req.payload.name
        })
        .exec((err, user) => {
            if (!user) return res.status(404).json({
                "message": "User not found"
            });
            else if (err) return res.status(404).json(err);
            else {
                const newOrder = new Order(req.body);
                newOrder.user_id = user._id;
                newOrder.fillAmounts();
                newOrder.save().then((data) => res.status(200).send(data)).catch(err => res.status(500).send(err));
            }
        });
}


const updateDetailOrder = (req, res) => {
    Order.findById(req.params.order_id).exec((err, order) => {
        order.details.forEach(detail => {
          if(detail.dish_id.toString() === req.params.dish_id) {
              detail.status = 1;
          }
        });

        order.save((err, sOrder) => {
            if (err) res.status(404).json(err);
            else res.status(200).json(sOrder);
        });

    });
}

module.exports = {
    findByStatusAndRest,
    findByStatus,
    findAll,
    getProfits,
    makeOrder,
    updateDetailOrder
}