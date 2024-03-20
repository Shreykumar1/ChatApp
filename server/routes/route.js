const express = require('express');
const { addUser } = require('../controllers/userController');
const router = express.Router();




router.route('/add').post(addUser);


module.exports = router;