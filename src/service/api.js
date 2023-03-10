import axios from 'axios'



const url = 'https://whatsappclonebackend.onrender.com';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);

    }
    catch (error) {
        console.log("Error while addUser api ", error.message);
    }
}


export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        //console.log(response);
        return response.data;   // main data present in response.data and many more thins like config etc..but not use of it
    }
    catch (error) {
        console.log('Error while calling the getusers api', error.message);

    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);

    } catch (error) {
        console.log('Error while calling setConversation api', error.message);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;

    } catch (error) {
        console.log('Error while calling getConversation api', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log("Error while calling newMessage api", error.message);
    }
}


export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`)
        return response.data;
    } catch (error) {
        console.log("Error while callin getMessage api", error.message);

    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data)
    }
    catch (error) {
        console.log("Error while calling uploadfile api", error.message);
    }
}
