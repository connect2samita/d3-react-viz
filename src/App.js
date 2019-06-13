import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart/BarChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <BarChart dataset="4,6,3,10,7" />
        <BarChart dataset="10, 8, 3, 6, 2, 5" />
      </div>
    );
  }
}

export default App;
