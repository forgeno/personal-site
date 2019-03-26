import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="success">Success</Button>
      </div>
    );
  }
}

export default App;
