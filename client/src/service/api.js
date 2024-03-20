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


export   { addUser, getAllUsers }