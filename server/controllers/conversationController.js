const Conversation = require("../model/conversationModel");


const newConversation = async (req,res) => {
    try {
        const {senderId, receiverId } = req.body;

        const exists = await Conversation.findOne({members : {$all : [ receiverId, senderId ] }});
        if(exists){
           return res.status(200).json('conversation already exists');
        }
        const newConversation = Conversation.create({members : [senderId,receiverId]});
        return res.status(201).json('conversation saved successfully');
    } catch (error) {
         res.status(500).json(error.message);
    }
}
const getConversation = async (req,res) => {
    try {
        const {senderId, receiverId } = req.body;

        const response = await Conversation.findOne({members : {$all : [ receiverId, senderId ] }});
        return res.status(201).json(response);
    } catch (error) {
         res.status(500).json(error.message);
    }
}

module.exports = {newConversation, getConversation}