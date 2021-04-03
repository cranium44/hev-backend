const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    categoryId: {type: Number},
    description: {type: String},
})

module.exports = mongoose.model("Item", itemSchema);
// module.exports = itemSchema