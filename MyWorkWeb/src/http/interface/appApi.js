import axios from '../axios';
const prefix = '/app/';

export default {
    query(data) {
        return axios({
            url: prefix + 'query',
            data
        });
    }, 
    querySingle(data) {
        return axios({
            url: prefix + 'querySingle',
            data
        });
    }, 
};