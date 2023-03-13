import axios from "./axios";

const userApi = {
    registry(data){ 
        return axios({
            method: 'post',
            url: 'user/registry',
            data
        });
    },
    login(data){ 
        return axios({
            method: 'post',
            url: 'user/login',
            data
        });
    },
    accountCheck(data){ 
        return axios({
            method: 'post',
            url: 'user/accountCheck/' + data.account,
            data
        });
    }
}

export default userApi;