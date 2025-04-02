const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usersController');
const usersController = new UsersController();

router.get('/', usersController.getUsers.bind(usersController));
router.get('/:id', usersController.getUserById.bind(usersController));
router.post('/', usersController.createUser.bind(usersController));
router.put('/:id', usersController.updateUser.bind(usersController));
router.delete('/:id', usersController.deleteUser.bind(usersController));

module.exports = router;