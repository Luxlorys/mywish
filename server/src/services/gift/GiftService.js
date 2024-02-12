const pool = require('../../db/mywish');

class GiftService {
    async newGift(gift) {
        const query = await pool.query('INSERT INTO gifts (user_id, category_id, title, status) VALUES ($1, $2, $3, $4) RETURNING *', [gift.userId, gift.categoryId, gift.title, gift.status]);
        return query.rows[0];
    }

    async getGifts() {
        const query = `
            SELECT g.id, u.username, g.title, g.status, COALESCE(c.title, ${null}) AS category
            FROM gifts g
            LEFT JOIN categories c ON g.category_id = c.id
            JOIN users u ON g.user_id = u.id
        `;
        const result = await pool.query(query);
        return result.rows;
    }

    async getGiftsForSpecificUser(username) {
        const query = `
            SELECT g.id, u.username, g.title, g.status, COALESCE(c.title, ${null}) AS category
            FROM gifts g
            LEFT JOIN categories c ON g.category_id = c.id
            JOIN users u ON g.user_id = u.id
            WHERE u.username = $1 
        `;
        const result = await pool.query(query, [username]);
        return result.rows;
    }

    async getGiftById(id) {
        const query = 'SELECT * FROM gifts WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows;
    }


    async deleteGift(id) {
        const query = 'DELETE FROM gifts WHERE id = $1';
        const result = await pool.query(query, [id]);
        return result.rows[0];
    }
}

module.exports = GiftService;