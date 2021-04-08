const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordersController')

router.get('/', controller.getOrders);

router.post('/', controller.createOrder);

router.get('/:id', controller.updateOrder)

module.exports = router