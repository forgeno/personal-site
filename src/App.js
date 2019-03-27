import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBarComponent from "./components/NavBarComponent";

class App extends Component {
  render() {
    return (
      <div id="root">
        <NavBarComponent/>
      </div>
    );
  }
}

export default App;
