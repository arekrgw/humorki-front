import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Humorki from './pages/Humorki';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/humorki" component={Humorki} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
