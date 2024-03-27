import axios from 'axios'

const url = `http://localhost:3000`


const addUser = async (data) => {
    try {
        const response = await axios.post(`${url}/add`,data);
        console.log(`User added successfully`);
    } catch (error) {
        console.log('ERROR in adding User',error);
    }
}

const getAllUsers = async () => {
    try {
        const response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log('ERROR in adding User',error);
    }
}

const setConversation = async (data) => {
    try {
        const response = await axios.post(`${url}/conversation/add`,data);
        console.log(response.data);
        // console.log(`Conversation Set Successfully`);
    } catch (error) {
        console.log('ERROR in Conversation Set ',error);
    }
}

const getConversation = async (data) => {
    try {
        const response = await axios.post(`${url}/conversation/get`,data);
        return response.data;
    } catch (error) {
        console.log('ERROR in Conversation Get Api ',error);
    }
}

const newMessage = async (data) => {
    try {
        const response = await axios.post(`${url}/message/add`,data);
        return response.data;
    } catch (error) {
        console.log('ERROR in New Message Api ',error);
    }
}


export   { addUser, getAllUsers, setConversation, getConversation, newMessage }