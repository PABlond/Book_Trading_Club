
import axios from 'axios';

export const signupForm = (username, password) => {
    const requestOptions = {
        username: username,
         password: password
    };
    return axios.post("http://localhost:8080/api/signup", requestOptions)
    .then(response => {
        return response.data
        
    })
}