import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home"
import Signup from "./components/signup"
import Login from "./components/login"
import { connect } from 'react-redux';
import { logout, isLogged } from './_actions'
import { bindActionCreators } from 'redux';


class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.actions.simpleAction()
}
    render() {
      console.log(this.props)
      const {authReducer, actions} = this.props;
    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            { this.props.authReducer.token ? 
            <li>
              <button onClick={this.props.actions.logout}>Logout</button>
            </li>
            :
            ""
            }
          </ul>
    
          <hr />
    
          <Route exact path="/" component={() => <Home authReducer={authReducer} actions={actions} />} />
          <Route path="/signup" component={() => <Signup/>} />
          <Route path="/login" component={() => <Login/>} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state,  
 })

 const mapDispatchToProps = dispatch => {
  return {
      actions: {
        simpleAction: bindActionCreators(isLogged, dispatch),
        logout: bindActionCreators(logout, dispatch)
      }
    };
 } 


 export default connect(mapStateToProps, mapDispatchToProps)(Routes);