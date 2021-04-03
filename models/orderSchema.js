const mongoose = require('mongoose');
const schema = require('./itemSchema');

const OrderSchema = new mongoose.Schema({
  clientName: {type:String, required: true},
  receiptId: Number,
  address: {type:String, required: true},
  delivered: Boolean,
  items: [Number],
  date: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Order", OrderSchema);