const express = require("express");
const uuid = require("uuid");
const Item = require("../models/itemSchema");


const createItem = async (req, res) => {
    const createdItem = new Item({
        name: req.body.name,
        categoryId: req.body.categoryId,
        description: req.body.description,
        id: uuid(),
    });
    const result = await createdItem.save();
    res.json(result);
};

const getItems = async (req, res) => {
    const items = await Item.find().exec();
    res.json(items);
};

exports.createItem = createItem;
exports.getItems = getItems;
