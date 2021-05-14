import axios from  'axios';
import { format } from "date-fns";

export function getJogs(token) {
    return axios.get('https://jogtracker.herokuapp.com/api/v1/data/sync', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export function addJog(token, {date, time, distance}) {
    return axios.post('https://jogtracker.herokuapp.com/api/v1/data/jog', {
        date, 
        time,
        distance,
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export function editJog(token, {date, time, distance, id, user_id}) {
    return axios.put('https://jogtracker.herokuapp.com/api/v1/data/jog',{
        date, 
        time,
        distance,
        jog_id: id,
        user_id,
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}