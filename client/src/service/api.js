import axios from 'axios';

const URL = 'http://localhost:3000'

export const postFile = async(data) => {
    try {
        return await axios.post(`${URL}/api/upload-file`, data)
    } catch (error) {
        console.log('Error while calling signup api', error.response.data);
    }
}

export const getFile = async() => {
    try {
        return await axios.get(`${URL}/api/get-file`)
    } catch (error) {
        console.log('Error while calling signup api', error.response.data);
    }
}

export const getFileDetail = async(data) => {
    try {
        return await axios.get(`${URL}/api/file-detail/${data}`);
    } catch (error) {
        console.log('Error while calling signup api', error.response.data);
    }
}


