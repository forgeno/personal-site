import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style/NavBar.css';
import { NavLink } from "react-router-dom";
import { Redirect,Route,BrowserRouter,Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PhotoPage from "../pages/PhotoPage";
import ProjectPage from "../pages/ProjectPage";
import SkillsPage from '../pages/SkillsPage';
import NotFound from '../pages/NotFound';
class NavBarComponent extends Component {

    render() {
    return (
        <div className="navBar">
        <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand><h2>Ivan Ma</h2></Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/home">Profile</NavLink>
                    <NavLink className="nav-link" to="/photos">Photography</NavLink>
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                    <NavLink className="nav-link" to="/skills">Skills</NavLink>
                </Nav>
            </Navbar>
            <Switch>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/photos" component={PhotoPage}></Route>
            <Route exact path="/projects" component={ProjectPage}></Route>
            <Route exact path="/skills" component={SkillsPage}></Route>
            <Route exact path="/"><Redirect to="/home"/></Route>
          </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

export default NavBarComponent;