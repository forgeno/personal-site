import React, { Component } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './style/NavBar.css';
import { NavLink } from "react-router-dom";


class NavBarComponent extends Component {

    render() {
    return (
        <div className="navBar">
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand><h2>Ivan Ma</h2></Navbar.Brand>
              <Nav className="mr-auto">
                  <NavLink className="nav-link" to="/home">Profile</NavLink>
                  <NavLink className="nav-link" to="/photos">Photography</NavLink>
                  <NavLink className="nav-link" to="/projects">Projects</NavLink>
                  <NavLink className="nav-link" to="/skills">Skills</NavLink>
              </Nav>
          </Navbar>
        </div>
    );
  }
}

export default NavBarComponent;