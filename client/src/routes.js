import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home"
import Signup from "./components/signup"

class Routes extends React.Component {
    render() {
    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
    
          <hr />
    
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={() => <Signup/>} />
        </div>
      </Router>
    );
  }
}

 export default Routes;