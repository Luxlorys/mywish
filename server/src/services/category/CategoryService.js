const pool = require('../../db/mywish');


class CategoryService {
    async newCategory(category) {
        const query = await pool.query('INSERT INTO categories (title) VALUES ($1) RETURNING *', [category.title]);
        return query.rows[0];
    }
}

module.exports = CategoryService;