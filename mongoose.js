const mongoose = require("mongoose");
const Item = require("./models/item");
const url =
  "mongodb+srv://admin:5plMy0NOsm9xtVS0@cluster0.iszw0.mongodb.net/hevdb?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("====================================");
    console.log("Error");
    console.log("====================================");
  });

const createItem = async (req, res) => {
  const createdItem = new Item({
    name: req.body.name,
    price: req.body.price,
    description: req.body.desc,
    pkgSize: req.body.pkgSize,
    id: req.body.id,
  });
  const result = await createItem.save();

  res.json(result);
};

exports.createItem = createItem;
