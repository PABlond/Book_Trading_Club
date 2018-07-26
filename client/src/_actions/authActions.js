import authRequest from '../_services'
import {constants} from "../_services/constants"
import axios from 'axios';

const login = (username, password) => dispatch => {

    authRequest.config(constants.login, username, password)
    .then(response => {

        if (response.status === 200 && response.data) {
            localStorage.setItem('JWT-token', response.data);
            dispatch({
                type: "LOGIN_REQUEST",
                payload: response.data
            })
        } else if (response.status == 201) {
            console.log("201")
            dispatch({
                type: "LOGIN_REQUEST_FAILED",
                payload: "Password Failed"
            })
        } else if (response.status == 200) {
            console.log("200")
            dispatch({
                type: "LOGIN_REQUEST_FAILED",
                payload: "Username Failed"
            })
        }
    })    
}

const register = (username, password) => dispatch => {

    authRequest.config(constants.signup, username, password)
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

const isLogged = () => dispatch => {
    const data = localStorage.getItem('JWT-token') || false;
    if (data) {
        axios.post("http://localhost:8080/api/users", { data })
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


const logout = () => dispatch => {
    localStorage.removeItem('JWT-token');
    dispatch({
        type: "LOGOUT"
    })
}

export default {
    login, logout, register, isLogged
}