const pool = require('../../db/mywish');


class CategoryService {
    async newCategory(category) {
        const query = await pool.query('INSERT INTO categories (title) VALUES ($1) RETURNING *', [category.title]);
        return query.rows[0];
    }

    async getCategories(limit) {
        const query = await pool.query('SELECT * FROM categories LIMIT $1', [limit]);
        return query.rows;
    }

    async deleteCategorie(category) {
        await pool.query('DELETE FROM categories WHERE title = $1', [category.title]);
        return true;
    }
}

module.exports = CategoryService;