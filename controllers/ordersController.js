const Order = require("../models/orderSchema");

const createOrder = async (req, res) => {
    const newOrder = new Order({
        clientName: req.body.clientName,
        receiptId: Math.floor(100000 + Math.random() * 900000),
        address: req.body.address,
        delivered: false,
        items: req.body.items,
    });
    const result = await newOrder.save();
    res.json(result);
};

const getOrders = async (req, res) => {
    const orders = await Order.find().exec();
    res.json(orders);
};

const updateOrder = async (req, res) => {
    const id = req.params.id;
    const order = await Order.findOneAndUpdate(
        {
            receiptId: id,
        },
        {
            clientName: req.body.clientName,
            address: req.body.address,
            delivered: req.body.delivered,
            items: req.body.items,
        }
    ).exec();
};

const deliveredOrder = async (req, res) => {
    const result = await Order.findOneAndUpdate(
        {
            receiptId: req.params.id,
        },
        { delivered: true }
    ).exec();
    res.json(result);
};

exports.createOrder = createOrder;
exports.getOrders = getOrders;
exports.updateOrder = updateOrder;
exports.deliveredOrder = deliveredOrder;
