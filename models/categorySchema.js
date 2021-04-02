const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: String,
  id: Number
})

module.exports = mongoose.model("Category", CategorySchema);