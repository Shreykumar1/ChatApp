const mongoose = require('mongoose');
const Message = require('../model/messageModel');

mongoose.connect('mongodb+srv://shreykumar191:Shreykumar1@nodeexpressprojects.hnydk5m.mongodb.net/8-CHAT-APP?retryWrites=true&w=majority&appName=NodeExpressProjects', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const Message = mongoose.model('Message', MessageSchema);

async function updateMessages() {
    try {
        const result = await Message.updateMany({}, {
            $set: {
                replyPerson: null,
                replyText: null,
                edited: false
            }
        });

        console.log(`Updated ${result.nModified} messages`);
    } catch (error) {
        console.error('Error updating messages:', error);
    } finally {
        mongoose.connection.close();
    }
}

updateMessages();
