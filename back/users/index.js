var express = require('express');
const passport = require('passport');
var router = express.Router();
var User = require('./userModel');

router.get('/', function (req, res) {
  User.find(function (err, found) {
    if (err) res.send(err);
    if (found) res.send(found);
    else res.send("Not found");
  })
});

router.post('/login', function (req, res) {
  if(!req.body.name || !req.body.password) return res.status(400).json({"message": "All fields required"});
  passport.authenticate('local',  (err, user, info) => {
    let token;
    if(err) return res.status(404).json(err);
    if(user) {
      token = user.generateJwt();
      res.status(200).json({token});
    } else res.status(401).json(info);
  })(req, res);
});

router.post('/register', function (req, res) {
  if(!req.body.name || !req.body.password) return res.status(400).json({"message": "All fields required"});
  const user = new User();
  user.name = req.body.name;
  user.setPassword(req.body.password);
  user.save((err) => {
    if(err) res.status(404).json(err);
    else {
      const token = user.generateJwt();
      res.status(200).json({token});
    }
  })
});


module.exports = router;