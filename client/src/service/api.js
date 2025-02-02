import axios from "axios";

// const url = `http://localhost:3000`;
const url = `https://chatapp-w33r.onrender.com`;

const addUser = async (data) => {
  try {
    const response = await axios.post(`${url}/add`, data);
    console.log(`User added successfully`);
  } catch (error) {
    console.log("ERROR in adding User", error);
  }
};

const getAllUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("ERROR in getting all Users", error);
  }
};

const getSingleUser = async (data) => {
  try {
    const response = await axios.get(`${url}/singleuser/${data.sub}`);
    return response.data;
  } catch (error) {
    console.log("ERROR in GET single User", error);
  }
};

const setConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/conversation/add`, data);
    console.log(response.data);
    // console.log(`Conversation Set Successfully`);
  } catch (error) {
    console.log("ERROR in Conversation Set ", error);
  }
};

const getConversation = async (data) => {
  try {
    const response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("ERROR in Conversation Get Api ", error);
  }
};

const newMessage = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(`${url}/message/add`, data);
    return response.data;
  } catch (error) {
    console.log("ERROR in New Message Api ", error);
  }
};

const getMessage = async (id) => {
  try {
    const response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (error) {
    console.log("ERROR in New Message Api ", error);
  }
};

const updateMessage = async (data) => {
  try {
    const response = await axios.patch(`${url}/message/update`, data);
    return response.data;
  } catch (error) {
    console.log("ERROR in Patch Message Api ", error);
  }
};

const deleteMessage = async (data) => {
  try {
    const response = await axios.delete(`${url}/message/delete/${data.id}`);
    return response.data;
  } catch (error) {
    console.log("ERROR in Delete Message Api ", error);
  }
};

const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${url}/file/upload`, data);
    return response;
  } catch (error) {
    console.log("ERROR in Upload File Api ", error);
  }
};

export {
  addUser,
  getAllUsers,
  getSingleUser,
  setConversation,
  getConversation,
  newMessage,
  getMessage,
  updateMessage,
  deleteMessage,
  uploadFile,
};
