const Gift = require('../models/Gift');


const createNewGift = async (data) => {
    try {
        const gift = await Gift.create(data);
        return gift;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    createNewGift
}