const Order = require('../models/orderSchema');

const createOrder = async (req, res) => {
    const newOrder = new Order({
        clientName: req.body.clientName,
        receiptId: Math.floor(100000 + Math.random() * 900000),
        address: req.body.address,
        delivered: false,
        items: req.body.items,
    })
}