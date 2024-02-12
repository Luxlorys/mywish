const pool = require('../../db/mywish');


class UserService {
    async getUsers(limit) {
        const query = await pool.query('SELECT * FROM users LIMIT $1', [limit]);
        return query.rows;  
    }

    async getUserById(id) {
        const query = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return query.rows;
    }

    async deleteUser(id) {
        const query = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return query.rows[0];
    }

    async updateUser(id) {
        TODO
    }
}

module.exports = UserService;
