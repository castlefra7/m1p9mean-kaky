var express = require('express');
var router = express.Router();
const Order = require('./orderModel');
const User = require('../users/userModel');

const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
});

router.get('/', auth, function (req, res) {
  Order.find(function (err, data) {
    if (err) res.status(400).json({"message": err});
    if (data) res.send(data);
    else res.status(404).json({"messsage": "Empty data"});
  });
});

router.get('/current/:restauId', function (req, res) {
  const query = Order.where({
    status: 0
  });
  query.find(function (err, data) {
    if (err) res.send(err)
    else {
      if (data) res.send(data)
      else res.send("No orders");
    }
  })
});

router.post('/:restauId', auth, function (req, res) {
  if(req.payload && req.payload.name) {
    User.findOne({name: req.payload.name})
        .exec((err, user) => {
          if(!user) res.status(404).json({"message": "User not found"});
          else if (err) res.status(404).json(err);
          else {
            const newOrder = new Order(req.body);
            newOrder.user_id = user._id;
            newOrder.fillAmounts();
            newOrder.save().then((data) => res.send("Success")).catch(err => res.send(err));
          }
        });
  } else res.status(404).json({"message": "User not found"})
  
});

module.exports = router;

