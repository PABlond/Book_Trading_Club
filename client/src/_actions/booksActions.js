import sendBookReq from '../_services/booksReq'
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
    const token = localStorage.getItem('JWT-token') || false;
    dispatch({
        type: "USER_BOOKS",
        payload: [{author: "dzqdqzd", name:"dqzdq", description: "dzqdqzdqqddqzdqzdqdqd"}]
    }) 
}

export default {
    sendBook, fetchBook
}