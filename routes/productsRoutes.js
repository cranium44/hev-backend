const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const controller = require("../controllers/itemsController");

router.post("/", controller.createItem);
router.get("/", controller.getItems);
router.get("/:id", controller.getOneItem);
router.delete("/:id", controller.deleteItem )
router.post("/:id", controller.updateItem)

module.exports = router;
