import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import BarChart from "./BarChart/BarChart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="d-flex justify-content-space-around align-items-center vh-100">
          <div className="card">
            <div className="card-header">Horizontal Bar Chart 1</div>
            <div className="card-body">
              <BarChart id="bar1" dataset="4, 6, 3, 10, 7" />
            </div>
          </div>
          <div className="card">
            <div className="card-header">Horizontal Bar Chart 2</div>
            <div className="card-body">
              <BarChart id="bar2" dataset="10, 8, 3, 6, 2, 5" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
