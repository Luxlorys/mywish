const { Router } = require('express');
const giftController = require('../controllers/giftController');


const router = Router();

router.post('/api/create-gift', giftController.createNewGift);

module.exports = router;