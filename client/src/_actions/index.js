import {loginReq, signupForm } from './../_services'

export const login = (username, password) => dispatch => {
    loginReq(username, password);
    dispatch({
                type: "LOGIN_REQUEST",
                payload: {token: "dfomiqzhfmiuqzmioqhzdmuioqmdiouqhzmodhqmzodhqmodhqmodqhmzodihqmodhqmozd"}
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