const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoryController')

router.get('/', controller.getAllCategories);
router.get('/:id', controller.getOneCategory)
router.post('/', controller.addCategory);
router.post('/:id', controller.updateCategory)
router.delete('/:id', controller.deleteCategory)

module.exports = router