const db = require('../database/db');

class UserService {
    async getUsers() {
        console.log('getUsers');
        const result = await db.query('SELECT * FROM users');
        console.log(result.rows);
        return result.rows;
    }

    async getUserById(id) {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    }

    async createUser(name, email) {
        const result = await db.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        return result.rows[0];
    }

    async updateUser(id, name, email) {
        const result = await db.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id]
        );
        return result.rows[0];
    }

    async deleteUser(id) {
        const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rowCount > 0;
    }
}

module.exports = UserService;