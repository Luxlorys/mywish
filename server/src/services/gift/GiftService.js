const pool = require('../../db/mywish');

class GiftService {
    async newGift(gift) {
        const query = await pool.query('INSERT INTO gifts (user_id, category_id, title, status) VALUES ($1, $2, $3, $4) RETURNING *', [gift.userId, gift.categoryId, gift.title, gift.status]);
        return query.rows[0];
    }
}

module.exports = GiftService;