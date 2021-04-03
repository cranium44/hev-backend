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
    res.json(categories)
}

exports.addCategory = addCategory
exports.getAllCategories = getAllCategories
