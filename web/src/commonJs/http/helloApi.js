import axios from "./axios";

const helloApi = {
    hello(){
        return axios({
            method: 'get',
            url: 'hello'
        });
    }
}

export default helloApi;