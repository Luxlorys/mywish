const express = require('express');
const userController = require('../controllers/user/userController');
const authController = require('../controllers/user/authController');
const giftController = require('../controllers/gift/GiftController');
const categoryController = require('../controllers/category/CategoryController');
const middlewares = require('../middlewares/authMiddleware');
const router = express.Router();

// AUTH
router.post('/login', authController.userLogin);
router.get('/logout', authController.userLogOut);

// USERS
router.get('/users', middlewares.requireAuth, userController.getUsers);
router.get('/users/:id', middlewares.requireAuth, userController.getUserById);
router.post('/users', userController.saveUser);
router.delete('/users/:id', middlewares.requireAuth, userController.deleteUserById);

// CATEGORIES
router.post('/categories', categoryController.newCategory);
router.get('/categories', categoryController.getCategories);
router.delete('/categories', categoryController.deleteCategorie);

// GIFTS
router.post('/gifts', middlewares.requireAuth, giftController.newGift);
router.get('/gifts', middlewares.requireAuth, giftController.getGifts);
router.get('/gifts/:username', middlewares.requireAuth, giftController.getGiftsForSpecificUser);
router.delete('/gifts/:id', middlewares.requireAuth, giftController.deleteGift)

module.exports = router;
