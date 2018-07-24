import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout, isLogged } from './../_actions'
import { bindActionCreators } from 'redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)
    }
    
    logout() {
        this.props.actions.logout();
    }

render() {


    console.log(this.props)
    return(
        <div>
            <h1>Home</h1>   
            <p>{this.props.authReducer.token ? "Your token: " + this.props.authReducer.token : "Your are not logged"}</p>
            <button onClick={this.logout}>LOGOUT</button>
        </div>
    )
}
}

   export default (Home);