const UserService = require('../services/userService'); // Import the UserService class

class UsersController {
    constructor() {
        this.userService = new UserService(); // Instantiate UserService directly
    }

    async getUsers(req, res) {
        try {
            console.log('getUsers');
            const users = await this.userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async getUserById(req, res) {
        try {
            const user = await this.userService.getUserById(parseInt(req.params.id));
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async createUser(req, res) {
        try {
            if (!req.body.name || !req.body.email) {
                return res.status(400).send('Name and email are required');
            }
            const user = await this.userService.createUser(req.body.name, req.body.email);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async updateUser(req, res) {
        try {
            if (!req.body.name || !req.body.email) {
                return res.status(400).send('Name and email are required');
            }
            const user = await this.userService.updateUser(
                parseInt(req.params.id),
                req.body.name,
                req.body.email
            );
            if (!user) {
                return res.status(404).send('User not found');
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    async deleteUser(req, res) {
        try {
            const success = await this.userService.deleteUser(parseInt(req.params.id));
            if (!success) {
                return res.status(404).send('User not found');
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = UsersController;