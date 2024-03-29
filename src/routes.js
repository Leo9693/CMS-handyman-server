const express = require('express');

const customerRoute = require('./routes/customer');
const businessRoute = require('./routes/business');
const orderRoute = require('./routes/order');
const categoryRoute = require('./routes/category');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const authGuard = require('./middlewares/authGuard');

const router = express.Router();

// router.use('/customer', authGuard, customerRoute);
router.use('/customers', customerRoute);
router.use('/businesses', businessRoute);
router.use('/orders', orderRoute);
router.use('/categories', categoryRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);
router.get('/',  (req,res) => res.status('200').json('Welcome to the handyman-cms api! Visit /api-docs for help'))

module.exports = router;