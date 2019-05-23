import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './container/Home/home';
import About from './container/About/about';

class App extends Component {
  render() {
  return (
    <Router>
    <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  
    </div>
    
  </Router>
  );
  }
}

export default App;
