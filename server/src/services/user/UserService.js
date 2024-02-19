const pool = require('../../db/mywish');


class UserService {

    async saveUser(username, password, email) {
        const query = `
            INSERT INTO users (username, password, email)
            VALUES ($1, $2, $3)
        `;

        const result = await pool.query(query, [username, password, email]);
        return result.rows[0];
    }

    async getUsers(limit) {
        const query = await pool.query('SELECT * FROM users LIMIT $1', [limit]);
        return query.rows;  
    }

    async getUserByUsername(username) {
        const query = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        return query.rows[0];
    }

    async getUserById(id) {
        const query = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return query.rows[0];
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
