import React, { Component } from 'react';
import "./style/HomePage.css";
import { Image, Button } from "react-bootstrap";
import headShot from "../assets/images/Headshot1.jpg"
import linkedinIcon from "../assets/images/linkedin-white.png"
import emailIcon from "../assets/images/mail-white.png"
import githubIcon from "../assets/images/github-white.png"
import "mdbootstrap/css/mdb.min.css"

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visable: false,
    };
  }
  
  componentDidMount(){
    let currentVisability = this.state.visable
    this.setState({ 
      visable: !currentVisability,
    })
  }

  render() {
    console.log(this.props.location.pathname)
    return (
    <div id="mainDiv">
      <div id="info">
        <h1 className="animated slideInUp slow">Hi, My name is Ivan</h1>
        <p className="animated slideInDown slow">
        I'm a student at the university of alberta currently completing my program in Computing Science.

        </p>
        <div id="buttonDiv">
          <Button className="animated fadeIn delay-1s" variant="success" size="sm">My Projects</Button>
          <Button className="animated fadeIn delay-1s" variant="info" size="sm">Skills</Button>
        </div>
      </div>
      <div id="headshotDiv" className="animated fadeIn slower">
        <Image id="headshotImage" src={headShot} rounded/>
      </div>
      <div id="contactButtons">
        <a className="iconLink" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/ivanma0"><Image className="contactIcon" src={linkedinIcon}/></a>
        <a className="iconLink" target='_blank' rel="noopener noreferrer" href="https://github.com/forgeno/"><Image className="contactIcon" src={githubIcon}/></a>
        <a className="iconLink" target='_blank' rel="noopener noreferrer" href="mailto:ima@ualberta.ca"><Image className="contactIcon" src={emailIcon}/></a>
      </div>
    </div>
    );
  }
}

export default HomePage;