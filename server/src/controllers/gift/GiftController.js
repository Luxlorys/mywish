const GiftService = require('../../services/gift/GiftService');
const Gift = require('../../models/Gift');

const service = new GiftService();

const newGift = async (req, res) => {
    const { title, userId, categoryId } = req.body;
    const giftData = { title, userId, categoryId };

    const validationErrors = Gift.validate(giftData);

    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    const gift = new Gift(giftData.userId, giftData.title, giftData.categoryId);

    try {
        await service.newGift(gift);
        res.status(200).json({messsage: `${gift.title} gift is added`});
    } catch (error) {
        res.status(400).json({error: error});
    }
}

module.exports = {
    newGift
}