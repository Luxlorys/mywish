const pool = require('../../db/mywish');


class UserService {
    async getUsers(limit) {
        const query = await pool.query('SELECT * FROM users LIMIT $1', [limit]);
        return query.rows;
    }

    async getUser(id) {
        const query = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return query.rows;
    }
}

module.exports = UserService;
