import axios from 'axios';

axios.defaults.baseURL = 'https://my-backend-daoc.onrender.com';
axios.defaults.headers.post["Content-Type"] = 'application/json';

export const request = (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data,
    });
};