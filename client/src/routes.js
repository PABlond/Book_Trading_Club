import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home"
import Signup from "./components/signup"
import Login from "./components/login"
import Header from './header'
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
      const opts = { authReducer, actions };
    return (
        <Router>
        <div>
          <Header {...opts} />
          
    
          <hr />
    
          <Route exact path="/" component={() => <Home {...opts} />} />
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