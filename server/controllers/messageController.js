const Conversation = require("../model/conversationModel");
const Message = require("../model/messageModel")

const newMessage = async (req,res) => {
    try {
        const message = await Message.create(req.body);
        const recentMsg = await Conversation.findByIdAndUpdate(req.body.conversationId,{message : req.body.text});
        res.status(201).json('Message has been sent successfully')
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getMessage = async (req,res) => {
    try {
        const message = await Message.find({conversationId : req.params.id});
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { newMessage, getMessage }