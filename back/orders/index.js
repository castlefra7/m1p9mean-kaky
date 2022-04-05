var express = require('express');
var router = express.Router();
const Order = require('./orderModel');

router.get('/', function (req, res) {
  Order.find(function (err, data) {
    if (err) res.send(err);
    if (data) res.send(data);
    else res.send("Not found");
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

router.post('/:restauId', function (req, res) {
  const newOrder = new Order(req.body);
  newOrder.fillAmounts();
  newOrder.save().then((data) => res.send("Success")).catch(err => res.send(err));
});

module.exports = router;