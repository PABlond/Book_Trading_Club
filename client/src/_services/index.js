
import axios from 'axios';
import {constants} from "./constants"
export default  {
    signupForm: (username, password) => {
        const requestOptions = {
            username: username,
            password: password
        };
        return axios.post("http://localhost:8080/api/signup", requestOptions)
        .then(response => {
            return response     
        })
    },
    loginForm: function(username, password)  {
        const requestOptions = {
            username: username,
            password: password
        };
        return axios.post("http://localhost:8080/api/login", requestOptions)
            .then(response => {
                return response
            })
    },
    config: (type, username, password) => {
        console.log(this)
        switch(type) {
            case constants.login:
                return this.a.loginForm(username, password)
            case constants.signup:
            return this.a.signupForm(username, password)
            default:
            return console.log("");
                break;
    }
    }
}
