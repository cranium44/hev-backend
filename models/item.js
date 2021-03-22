const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    brand: {type: String},
    pkgSize: {type: String},
})

module.exports = mongoose.model("Item", itemSchema);