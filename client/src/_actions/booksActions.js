import sendBookReq  from '../_services/booksReq'
import {constants} from "../_services/constants"

const sendBook = (name, author, description) => dispatch => {

    const token = localStorage.getItem('JWT-token') || false; 
    sendBookReq.config("add", name, author, description, token).then(response => {
        if(response.status === 200 && response.data) {
            dispatch({
                type: "SEND_BOOK",
                payload: response.data
            })
        }  else {
            dispatch({
                type: "SEND_BOOK",
                payload: "error"
            })
        }    
    })
}

const fetchBook = () => dispatch => {
    
    sendBookReq.config("all")
    .then(response => {
        dispatch({
            type: "ALL_BOOKS",
            payload: response.data
        }) 
    })
    
}

const fetchUserBooks = () => dispatch => {
    
    const token = localStorage.getItem('JWT-token') || false; 
    if (token) {
        sendBookReq.config("user",)
        .then(response => {
            console.log(response)
            dispatch({
                type: "USER_BOOKS",
                payload: response.data
            }) 
        })
    }    
    
    
};

const sendTrade = (idBook, idBookUser, message) => dispatch => {
    const token = localStorage.getItem('JWT-token') || false; 
    console.log(idBook, idBookUser, message)
    if (token) {
        sendBookReq.sendTrade(idBook, idBookUser, message, token)
        .then(response => {
            console.log(response)
            dispatch({
                type: "SEND_TRADE",
                payload: response.data
            }) 
        })
    } 
}

const removeBook = id => dispatch => {
    sendBookReq.removeBook(id).then(response => {
        if (response.status == 200 && response.data) {
            dispatch({
                type: "REMOVE_BOOK",
                payload: response.data.books
            }) 
        }
        
    })
    
};

const booksToTrade = () => dispatch => {
    sendBookReq.booksToTrade()
    .then(response => {
        console.log(response);
        dispatch({
            type: "BOOK_TO_TRADE",
            payload : "action.response"
        })
    })
}

export default {
    sendBook, fetchBook, fetchUserBooks, removeBook, booksToTrade, sendTrade
}