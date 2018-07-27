import React, {Component} from 'react'
import { Route, Redirect } from 'react-router'
//components
import HomeDash from "./homeDash"


class UserDashboard extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        console.log(this.props)
        console.log(this.state)
        return this.props.authReducer.token ? 
        (
            <div>
                
                <h1>User Dashboard</h1>
                <HomeDash />    
                </div>
        ) :
        (
            <Redirect to="/login" />
        ) 
    }
}

export default UserDashboard