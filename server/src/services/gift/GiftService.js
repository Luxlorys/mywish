const pool = require('../../db/mywish');

class GiftService {
    async newGift(gift) {
        const query = await pool.query('INSERT INTO gifts (user_id, category_id, title, status) VALUES ($1, $2, $3, $4) RETURNING *', [gift.userId, gift.categoryId, gift.title, gift.status]);
        return query.rows[0];
    }

    async getGifts() {
        const sql = `
            SELECT g.id, u.username, g.title, g.status, COALESCE(c.title, ${null}) AS category
            FROM gifts g
            LEFT JOIN categories c ON g.category_id = c.id
            JOIN users u ON g.user_id = u.id
        `;
        const query = await pool.query(sql);
        return query.rows;
    }

    async getGiftsForSpecificUser(username) {
        const sql = `
            SELECT g.id, u.username, g.title, g.status, COALESCE(c.title, ${null}) AS category
            FROM gifts g
            LEFT JOIN categories c ON g.category_id = c.id
            JOIN users u ON g.user_id = u.id
            WHERE u.username = $1 
        `;
        const query = await pool.query(sql, [username]);
        return query.rows;
    }
}

module.exports = GiftService;