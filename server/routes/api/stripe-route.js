const express = require('express');

const stripe = require("stripe")("sk_test_51MoEUBCz1yPpO1ySP4UQpst6QgLda1ERVMgwSYzYeTte8YnkcLwBRHpb16zz0nW5CbbwsYAqCYUjTYq5E88pBhZP00QnYYaBpX")
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

//GET Route
router.get('/', (req, res, next) => {
    console.log("GET Response from Researcher");
    res.json({
        message: 'Stripe is working!'
    });
});

//POST Route
router.post('/pay', (req, res, next) => {
    console.log(req.body.token);
    const {token, amount} = req.body;
    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source: token
    }).then(customer => {
        stripe.charges.create({
            amount: amount * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email
        }, {idempotencyKey})
    }).then(result => {
        res.status(200).json(result)
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;