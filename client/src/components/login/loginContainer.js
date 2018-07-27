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
    
    let { username, password } = this.state;
    const regExp = /[a-z0-9]/gi;
    console.log(typeof username)
    const usernameValid = username && password ? 
                          username.split("").length === username.match(regExp).length
                          :
                          false;
    console.log("usernameValid is" + usernameValid);
    if( !username ) {
      if(!password) {
        this.setState({error: "Username AND password are empty"})
      } else {
        this.setState({error: "Username is empty"})
      }      
    } else if( !password ) {
      this.setState({error: "Password is empty"})
    } else if(!usernameValid) {
      this.setState({error: "Username has not a valid format"})
    } else if (username && password) {
      this.props.authReq(username, password);
     } 
}
 

  render() {
    console.log(this.props)
    let { error } = this.state;
    return (
        <div>
            <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={this.state.username} onChange={this.userNameHandleChange} />
        </label>
        </div><div>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.passwordHandleChange} />
        </label></div><div>
        <input type="submit" value="Submit" /></div>
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
  authReq: (username, password) => dispatch(Actions.authActions.login(username, password))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);