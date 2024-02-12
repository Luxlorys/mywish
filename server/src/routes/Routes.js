const express = require('express');
const userController = require('../controllers/user/UserController');
const giftController = require('../controllers/gift/GiftController');
const categoryController = require('../controllers/category/CategoryController');

const router = express.Router();

// USERS
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.delete('/users/:id', userController.deleteUserById);

// CATEGORIES
router.post('/categories', categoryController.newCategory);
router.get('/categories', categoryController.getCategories);
router.delete('/categories', categoryController.deleteCategorie);

// GIFTS
router.post('/gifts', giftController.newGift);
router.get('/gifts', giftController.getGifts);
router.get('/gifts/:username', giftController.getGiftsForSpecificUser);
router.delete('/gifts/:id', giftController.deleteGift)

module.exports = router;
