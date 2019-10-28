import React, { Component } from "react";
import "./App.css";
import Smurfs from "./smurf";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurfs Application</h1>
        <Smurfs />
      </div>
    );
  }
}

export default App;
