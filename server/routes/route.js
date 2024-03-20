const express = require('express');
const { addUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();




router.route('/add').post(addUser);
router.route('/users').get(getAllUsers);


module.exports = router;