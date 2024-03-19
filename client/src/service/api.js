import axios from 'axios'

const url = `http://localhost:3000`


const addUser = async (data) => {
    try {
        const reponse = await axios.post(`${url}/add`,data);
        console.log(`User added successfully`);
    } catch (error) {
        console.log('ERROR in adding User',error);
    }
}


export   { addUser }