import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBarComponent from "./components/NavBarComponent";
import { Redirect,Route,BrowserRouter,Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhotoPage from "./pages/PhotoPage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from './pages/SkillsPage';

class App extends Component {
  render() {
    return (
      <div id="root">
        <BrowserRouter>
          <NavBarComponent/>
          <Switch>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/photos" component={PhotoPage}></Route>
            <Route exact path="/projects" component={ProjectPage}></Route>
            <Route exact path="/skills" component={SkillsPage}></Route>
            <Route path="*" component={HomePage}><Redirect to="/home"/></Route>
          </Switch>
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
