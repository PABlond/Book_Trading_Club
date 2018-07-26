import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from "./../../_actions/"


class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ""
    };

    this.userNameHandleChange = this.userNameHandleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if(this.props.authReducer.error) {
        this.setState({
            error: this.props.authReducer.error
        })
    }
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
     this.props.simpleAction(username, password);
     
         
            } else if( !username ) {
    this.setState({error: "Username is empty"})
  } else if( !password ) {
    this.setState({error: "Password is empty"})
  }
}
 

  render() {
    console.log(this.props)
    let { error } = this.state;
    return (
        <div>
            <h1>Login</h1>
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
        {error ? <p>{error}</p> : null}
      </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: (username, password) => dispatch(Actions.authActions.login(username, password))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);