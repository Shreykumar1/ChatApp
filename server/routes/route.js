const express = require('express');
const { addUser, getAllUsers, getSingleUser } = require('../controllers/userController');
const { newConversation, getConversation } = require('../controllers/conversationController');
const { newMessage, getMessage, updateMessage, deleteMessage } = require('../controllers/messageController');
const { uploadFile, getImage, uploadImage } = require('../controllers/imageController');
const upload = require('../utils/upload');
const router = express.Router();


function hello(req,res,next){
    console.log("Hello");
    next();
}

router.route('/add').post(addUser);
router.route('/users').get(getAllUsers);
router.route('/singleuser/:id').get(getSingleUser);

router.route('/conversation/add').post(newConversation);
router.route('/conversation/get').post(getConversation);

router.route('/message/add').post(newMessage);
router.route('/message/get/:id').get(getMessage);
router.route('/message/update').patch(updateMessage);
router.route('/message/delete/:id').delete(deleteMessage);

router.post('/file/upload',upload.single('file'),uploadImage);
// route.post('/file/upload', upload.single('file'), uploadImage);
// router.get('/file/:filename',getImage);
router.get('/file/:filename',getImage);

module.exports = router;