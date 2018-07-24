import {signupForm } from './../_services'
import axios from 'axios';

export const login = (username, password) => dispatch => {
   
        const requestOptions = {
            username: username,
             password: password
        };
        axios.post("http://localhost:8080/api/login", requestOptions)
        .then(response => {
            console.log(response)
            if(response.status === 200) {
                var data = localStorage.setItem('JWT-token', response.data.token);
                dispatch({
                    type: "LOGIN_REQUEST",
                    payload: response.data
                })
            } else if (response.status == 201) {
                dispatch({
                    type: "LOGIN_REQUEST",
                    payload: response.data
                })
            }
        })
       
   
 
        
   
}

export const register = (username, password) => dispatch => {
    signupForm(username, password).then(data => {
        dispatch({
            type: "SIGNUP_REQUEST",
            payload: data
        })
    });
    
}

export const isLogged = () => dispatch => {
    var data = localStorage.getItem('JWT-token');
    if(data){
        axios.post("http://localhost:8080/api/", {data})
        .then(response => {
    if(response.status == 200) {
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