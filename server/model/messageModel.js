const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    conversationId : {
        type : String
    },
    receiverId : {
        type : String
    },
    senderId : {
        type : String
    },
    text : {
        type : String
    },
    type : {
        type : String
    }
},{
    timestamps : true
})


const Message = mongoose.model('Message',MessageSchema);

module.exports = Message;