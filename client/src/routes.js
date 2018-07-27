import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Redirect} from "react-router"
import Home from "./components/home"
import Signup from "./components/signup/"
import Trade from './components/trade'
import Login from "./components/login/"
import Header from './header'
import UserDashboard from "./components/user-dashboard/"
import { connect } from 'react-redux';
import { logout, isLogged } from './_actions'
import { bindActionCreators } from 'redux';
import Actions from "./_actions/"


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
          <Route exact path="/user" component={() => <UserDashboard {...opts} />} />
          <Route path="/user/trade/:id" component={() => <Trade {...opts} />} />
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
        simpleAction: bindActionCreators(Actions.authActions.isLogged, dispatch),
        logout: bindActionCreators(Actions.authActions.logout, dispatch)
      }
    };
 } 


 export default connect(mapStateToProps, mapDispatchToProps)(Routes);