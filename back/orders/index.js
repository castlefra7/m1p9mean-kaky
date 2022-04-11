var express = require('express');
var router = express.Router();
const {
    findByStatus,
    findByStatusAndRest,
    findAll,
    getProfits,
    makeOrder,
    updateDetailOrder
} = require('./controllers');

const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
});

router.get('/amounts', auth, function (req, res) {
    console.log(req.payload.restau_id);

    if (req.query['restau-id']) {
        getProfits(req.query['restau-id'], req, res);
    } else if (req.payload && req.payload.role == 2) {
        getProfits(req.payload.restau_id, req, res);
    } else {
        res.status(400).json({
            "message": "Specify restaurant"
        });
    }
})

router.get('/', auth, function (req, res) {
    if (req.query['status'] && req.query['restau-id']) {
        findByStatusAndRest(req.query['restau-id'], req, res);
    } else if (req.query['status'] && req.payload && req.payload.role == 2) {
        findByStatusAndRest(req.payload.restau_id, req, res);
    } else if (req.query['status']) {
        findByStatus(req, res);
    } else {
        findAll(req, res);
    }

});

router.post('/', auth, function (req, res) {
    if (req.payload && req.payload.name) {
        makeOrder(req, res);
    } else res.status(404).json({
        "message": "User not found"
    })

});

router.put('/:order_id/details/:dish_id/status', auth, function (req, res) {
    updateDetailOrder(req, res);
});


module.exports = router;