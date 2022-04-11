var express = require('express');
var router = express.Router();
const Restaurant = require('./restaurantModel');
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload',
  algorithms: ['HS256']
});

router.get('/', auth, function (req, res) {
  Restaurant.find(function (err, found) {
    if (err) return res.status(404).json(err);
    if (found) res.status(200).json(found);
  })
});

router.post('/', auth, function (req, res) {
  if (req.payload && req.payload.name) {
    const newRestau = new Restaurant(req.body);
    newRestau.save().then(data => res.status(200).send(data)).catch(err => res.status(500).send(err));
  } else res.status(404).json({
    "message": "User not found"
  });
})

module.exports = router;