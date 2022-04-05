var express = require('express');
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
  if (req.body) {
    const name = req.body.name;
    const password = req.body.password;
    const query = User.where({
      name,
      password
    });
    query.findOne(function (err, found) {
      if (err) res.send(err);
      if (found) res.send(found);
      else res.send("Not found");
    })
  } else {
    res.send("Specify the body");
  }

});

router.post('/register', function (req, res) {
  let newUser = new User(req.body);
  newUser.save().then(() => res.send("Success")).catch((err) => res.send(err));
});


module.exports = router;