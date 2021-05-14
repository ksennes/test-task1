import axios from 'axios';

export function getUserToken() {
    return axios.post('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin', {uuid: 'hello'});
}