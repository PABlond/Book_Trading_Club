import axios from 'axios';
import {constants} from "./constants"

export default {
    sendBookReq: (name, author, description, token) => {

        return axios.post("http://localhost:8080/api/books/add", {name, author, description, token}).then(response => {
            console.log(response)
            return response
        })
    },
    fetchUserBooks: () => {
        
        const token = localStorage.getItem('JWT-token') || false;
        return axios.post("http://localhost:8080/api/books/user", {token})
        .then(response => {
            console.log(response);
            return response
        })   
    },
    fetchBooks: () => {

        return axios.post("http://localhost:8080/api/books/")
        .then(response => {
            console.log(response);
            return response
        })
    },
    sendTrade: (idBook, idBookUser, message, token) => {
        return axios.post("http://localhost:8080/api/books/trade/", {idBook, idBookUser, message, token})
        .then(response => {
            console.log(response);
            return response
        })
    },
    removeBook: id => {

        const token = localStorage.getItem('JWT-token') || false;
        return axios.post("http://localhost:8080/api/books/remove", {id, token})
        .then(response => {
            return response
        })
    },
    booksToTrade: () => {

        const token = localStorage.getItem('JWT-token') || false;
        return axios.post("http://localhost:8080/api/books/to-trade", { token})
        .then(response => {
            return response
        })
    },
    config: (type, name, author, description, token) => {
        switch(type) {
            case 'add': 
                return this.a.sendBookReq(name, author, description, token)
            case 'all':
                return this.a.fetchBooks();
            case 'user':
                return this.a.fetchUserBooks();
            default:
                return;
        }
    }
}