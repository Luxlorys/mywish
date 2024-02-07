const express = require('express');
const userController = require('../controllers/user/UserController');
const giftController = require('../controllers/gift/GiftController');
const categoryController = require('../controllers/category/CategoryController');

const router = express.Router();

// USERS
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);

// CATEGORIES
router.post('/categories', categoryController.newCategory);

// GIFTS
router.post('/gifts', giftController.newGift);

module.exports = router;
