import axios from 'axios';
import {constants} from "./constants"

export default {
    sendBookReq: (name, author, description, token) => {

        return axios.post("http://localhost:8080/api/books/add", {name, author, description, token}).then(response => {
            console.log(response)
            return response
        })
    },
    config: (type, name, author, description, token) => {
        console.log(token)
        switch(type) {
            case 'add': 
                return this.a.sendBookReq(name, author, description, token)
            default:
                return;
        }
    }
}