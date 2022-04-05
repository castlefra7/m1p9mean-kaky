var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('List of restaurants');
});

router.get('/orders', function (req, res) {
  res.send('List of orders');
});

router.post('/dishes', function (req, res) {
  res.send('Create new dishe');
});

router.get('/dishes', function (req, res) {
  res.send('List of dishes');
});

router.get('/dishes/:id', function (req, res) {
  res.send('List of dishes');
});

router.put('/dishes/:id', function (req, res) {
  res.send('delete a dishe');
});

router.delete('/dishes/:id', function(req, res) {
  // req.params.id
  res.send("Delete a dish");
});

router.get('/profits', function(req, res) {
  res.send("Profits");
});

module.exports = router;