const giftService = require('../services/giftService');

const createNewGift = async (req, res) => {
    const data = req.body;

    try {
        const gift = await giftService.createNewGift(data);
        res.status(200).json({ message: 'new gift created', data: gift});
    } catch (error) {
        return res.status(400).json({ message: 'internal server error', err: error});
    }
}

module.exports = {
    createNewGift
};