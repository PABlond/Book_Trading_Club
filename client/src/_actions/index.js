import { signupForm, loginForm } from './../_services'
import axios from 'axios';

export const login = (username, password) => dispatch => {

    loginForm(username, password)
    .then(response => {

        if (response.status === 200 || response.data) {
            localStorage.setItem('JWT-token', response.data);
            dispatch({
                type: "LOGIN_REQUEST",
                payload: response.data
            })
        } else if (response.status == 401 || !response.data) {
            dispatch({
                type: "LOGIN_REQUEST",
                payload: response.data
            })
        }
    })    
}

export const register = (username, password) => dispatch => {

    signupForm(username, password)
    .then(response => {

        if (response.status === 200 || response.data) {
            localStorage.setItem('JWT-token', response.data);
            dispatch({
                type: "SIGNUP_REQUEST",
                payload: response.data
            })
        } else if (response.status == 401 || !response.data) {
            dispatch({
                type: "SIGNUP_REQUEST",
                payload: response.data
            })
        }
    });
}

export const isLogged = () => dispatch => {
    const data = localStorage.getItem('JWT-token') || false;
    if (data) {
        axios.post("http://localhost:8080/api/", { data })
            .then(response => {
                console.log(response)
                if (response.status == 200 || response.data) {
                    dispatch({
                        type: "ISLOGGED",
                        payload: data
                    })
                } else {
                    dispatch({
                        type: "ISLOGGED",
                        payload: null
                    })
                }
            })
    }
}


export const logout = () => dispatch => {
    localStorage.removeItem('JWT-token');
    dispatch({
        type: "LOGOUT"
    })
}