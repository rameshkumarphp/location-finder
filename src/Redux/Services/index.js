import axios from 'axios';

export const getLocation = (input) => {
    return axios.get(`http://api.zippopotam.us/us/${input.state}/${input.city}`)
        .then((response) => {
            return response;
        }).catch(error => {
            return error;
        });
}