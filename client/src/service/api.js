import axios from "axios";

const url = "http://localhost:8022";

// Add User
export const addUser = async (data) => {
  try {
    const response = await axios.post(`${url}/add`, data);
    console.log("Response from addUser API:", response.data);
  } catch (error) {
    console.log("Error while addUser API", error.message);
  }
};

// Get users
export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    console.log("Response from getUsers API :", response.data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API", error.message);
  }
};

//Set Conversation
export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
    console.log(data);
  } catch (error) {
    console.log("Error while calling getConversation API", error.message);
  }
};
// Get Conversation
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling getConversation API", error.message);
  }
};

// New Message
export const newMessage = async (data) => {
  try {
    await axios.post(`${url}/message/add`, data);
  } catch (error) {
    console.log("Error while calling newMessage API", error.message);
  }
};

// Get Messages
export const getMessages = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error while calling getMessage API", error.message);
  }
};

// Upload File
export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${url}/file/upload`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling uploadFile API", error.message);
  }
};
