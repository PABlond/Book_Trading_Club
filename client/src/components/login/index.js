import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../../_actions/'
import LoginContainer from "./loginContainer"
import { Redirect } from 'react-router'


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.userNameHandleChange = this.userNameHandleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  userNameHandleChange(event) {
    this.setState({username: event.target.value});
  }

  passwordHandleChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
     (this.props.simpleAction(username, password));
  }
  }

  render() {
    console.log(this.props)
    
    return !this.props.authReducer.token ? <LoginContainer /> : <Redirect to="/user" />;
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: (username, password) => dispatch(Actions.authActionslogin(username, password))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(Login);