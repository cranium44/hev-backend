const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordersController')

router.get('/', controller.getOrders);

router.post('/', controller.createOrder);

router.post('/:id', controller.updateOrder);

router.post('/delivered/:id', controller.deliveredOrder)

router.delete('/:id', controller.deleteOrder);

module.exports = router