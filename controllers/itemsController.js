const mongoose = require("mongoose");
const uuid = require("uuid");
const Item = require("../models/itemSchema");
const url =
  "mongodb+srv://hev:hevpassword@cluster0.iszw0.mongodb.net/hevdb?retryWrites=true&w=majority";

mongoose

  .connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error");
  });

const createItem = async (req, res) => {
  const createdItem = new Item({
    name: req.body.name,
    price: req.body.price,
    brand: req.body.brand,
    pkgSize: req.body.pkgSize,
    id: uuid(),
  });
  const result = await createdItem.save();

  res.json(result);
};

const getItems = async (req, res) => {
  const items = await Item.find().exec();
  res.json(items);
}

exports.createItem = createItem;
exports.getItems = getItems;