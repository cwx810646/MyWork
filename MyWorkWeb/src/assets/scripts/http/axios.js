import axios from "axios";
const serverUrl = process.env.VUE_APP_HOST_API;

const instance = axios.create({
    baseURL: serverUrl,
    headers: {
        'content-type': 'application/json'
    }, 
});

export default instance;