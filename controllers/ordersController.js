const Order = require("../models/orderSchema");

const createOrder = async (req, res) => {
    const newOrder = new Order({
        clientName: req.body.clientName,
        receiptId: Math.floor(100000 + Math.random() * 900000),
        address: req.body.address,
        delivered: false,
        items: req.body.items,
    });
    const res = await newOrder.save();
};

const getOrders = async (req, res) => {
    const orders = await Order.find().exec();
    res.json(orders);
};

const updateOrder = async (req, res) => {
    const id = req.params.id;
    const order = await Order.find({
        receiptId: id,
    }).exec();
};

exports.createOrder = createOrder;
exports.getOrders = getOrders;
exports.updateOrder = updateOrder;
