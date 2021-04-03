const express = require("express");
const { check } = require("express-validator");

const router = express.Router();
const controller = require("../controllers/itemsController");

router.post("/new", controller.createItem);
router.get("/all", controller.getItems);

module.exports = router;