import axios from 'axios';


export function loginReq(username, password) {
    const requestOptions = {
        username: username,
         password: password
    };
    return axios.post("http://localhost:8080/api/signup", requestOptions)
    .then(response => {
        console.log(response)
        if(response.status === 200) {
            return response.data.user
        } else if (response.status == 404) {
            return "dzdzq"
        }
    })
   
}

export const signupForm = (username, password) => {
    const requestOptions = {
        username: username,
         password: password
    };
    return axios.post("http://localhost:8080/api/signup", requestOptions)
    .then(response => {
        return response.data
        
    })
}