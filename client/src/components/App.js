import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { register } from './_actions'


class App extends React.Component {
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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.username} onChange={this.userNameHandleChange} />
        </label>
        <label>
          Name:
          <input type="text" value={this.state.password} onChange={this.passwordHandleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: (username, password) => dispatch(register(username, password))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(App);