const express = require("express");
const Category = require("../models/categorySchema");
const HttpError = require("../models/httpError");

const addCategory = async (req, res) => {
    const newCategory = Category({
        name: req.body.name,
        id: req.body.id,
    });
    const result = await newCategory.save();

    if (!result) res.json(new HttpError("Could not create category", 400));

    res.json(result);
};

const getAllCategories = async (req, res) => {
    const categories = await Category.find().exec();
    if (!categories) res.json(new HttpError("Could not fetch categories", 400));
    res.json(categories);
};

const getOneCategory = async (req, res) => {
    const category = findOne({ id: req.params.id });
    res.json(category);
};

const updateCategory = async (req, res) => {
    const result = Category.findOneAndUpdate(
        { id: req.params.id },
        { name: req.body.name }
    );
    res.json(result)
};

exports.addCategory = addCategory;
exports.getAllCategories = getAllCategories;
exports.getOneCategory = getOneCategory;
exports.updateCategory = updateCategory;
