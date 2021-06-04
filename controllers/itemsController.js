const express = require("express");
const uuid = require("uuid");
const {uploadImage} = require("../util/cloudinaryHelpers");
const Item = require("../models/itemSchema");

const createItem = async (req, res) => {
    let imgUrl = await uploadImage(req.body.imageData)
    if(imgUrl.toLowerCase().includes("unable")) return res.status(404).json({error: imgUrl})
    const createdItem = new Item({
        name: req.body.name,
        categoryId: req.body.categoryId,
        description: req.body.description,
        imageUrl: imgUrl,
        id: Math.floor(100000 + Math.random() * 900000),
    });
    const result = await createdItem.save();
    res.json(result);
};

const getOneItem = async (req, res) => {
    const item = await Item.findOne({id: req.params.id}).exec();
    res.json(item)
}

const getItems = async (req, res) => {
    const items = await Item.find().exec();
    res.json(items);
};

const updateItem = async (req, res) => {
    const result = await Item.findOneAndUpdate(
        { id: req.params.id },
        {
            id: req.params.id,
            name: req.body.name,
            categoryId: req.body.categoryId,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
        }
    ).exec();
    res.json(result)
};

const deleteItem = async (req, res, next) => {
    const result = await Item.findOneAndDelete({id: req.params.id}).exec()
    res.json(result)
}

exports.createItem = createItem;
exports.getItems = getItems;
exports.deleteItem = deleteItem;
exports.updateItem = updateItem;
exports.getOneItem = getOneItem;