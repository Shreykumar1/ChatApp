const express = require('express');
const { addUser, getAllUsers } = require('../controllers/userController');
const { newConversation, getConversation } = require('../controllers/conversationController');
const { newMessage, getMessage } = require('../controllers/messageController');
const { uploadFile } = require('../controllers/imageController');
const upload = require('../utils/upload');
const router = express.Router();


function hello(req,res,next){
    console.log("Hello");
    next();
}

router.route('/add').post(addUser);
router.route('/users').get(getAllUsers);

router.route('/conversation/add').post(newConversation);
router.route('/conversation/get').post(getConversation);

router.route('/message/add').post(newMessage);
router.route('/message/get/:id').get(getMessage);

router.post('/file/upload',upload.single('file'),uploadFile);
// route.post('/file/upload', upload.single('file'), uploadImage);

module.exports = router;