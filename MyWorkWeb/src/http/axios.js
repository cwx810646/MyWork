import axios from 'axios';
import defaults from './defaults';

axios.defaults.baseURL = process.env.VUE_APP_HOST_API;
axios.defaults.timeout = 0;

export default (params) => {
    return new Promise((resolve) => {
        let { url, data, method, type } = { ...params };
        let instance = axios.create({
            url,
            method: method ? method : 'post'
        });
        instance.interceptors.request.use(config => {
            let contentType = defaults.contentType[type] ? defaults.contentType[type] : defaults.contentType.json;
            config.headers['Content-Type'] = contentType.name;
            config.data = contentType.format(data);
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
        instance.interceptors.response.use(response => {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
        instance.request(params).then(response => {
            if (response.status === 200) {
                resolve(response.data);
            } else {
                console.log(response);
            }
        });
    });
};
