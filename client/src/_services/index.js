
import axios from 'axios';

export const signupForm = (username, password) => {
    const requestOptions = {
        username: username,
        password: password
    };
    return axios.post("http://localhost:8080/api/signup", requestOptions)
    .then(response => {
        return response     
    })
}

export const loginForm = (username, password) => {
    const requestOptions = {
        username: username,
        password: password
    };
    return axios.post("http://localhost:8080/api/login", requestOptions)
        .then(response => {
            return response
        })
}