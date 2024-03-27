const express = require('express');
const { addUser, getAllUsers } = require('../controllers/userController');
const { newConversation, getConversation } = require('../controllers/conversationController');
const { newMessage } = require('../controllers/messageController');
const router = express.Router();




router.route('/add').post(addUser);
router.route('/users').get(getAllUsers);

router.route('/conversation/add').post(newConversation);
router.route('/conversation/get').post(getConversation);

router.route('/message/add').post(newMessage);

module.exports = router;