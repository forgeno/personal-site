import React, { Component } from 'react';
import "./style/HomePage.css";
import { withRouter } from 'react-router-dom';
import { Image, Button } from "react-bootstrap";
import linkedinIcon from "../assets/images/linkedin-white.png"
import emailIcon from "../assets/images/mail-white.png"
import githubIcon from "../assets/images/github-white.png"


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visable: false,
    };
    this.handleRedirectProjects = this.handleRedirectProjects.bind(this);
    this.handleRedirectSkills = this.handleRedirectSkills.bind(this);
  }
  
  componentDidMount(){
    let currentVisability = this.state.visable
    this.setState({ 
      visable: !currentVisability,
    })
  }

  componentWillUnmount() {
    let currentVisability = this.state.visable
    this.setState({ 
      visable: !currentVisability,
    })
 }

  handleRedirectProjects(){
    const path = `/projects`;
    this.props.history.push(path);
  }

  handleRedirectSkills(){
    const path = `/skills`;
    this.props.history.push(path);
  }

  render() {
    return (
    <div id="mainDiv">
      <div id="contactButtons" className="animated slideInLeft slower">
        <a className="iconLink" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/ivanma0"><Image className="contactIcon" src={linkedinIcon}/></a>
        <a className="iconLink" target='_blank' rel="noopener noreferrer" href="https://github.com/forgeno/"><Image className="contactIcon" src={githubIcon}/></a>
        <a className="iconLink" target='_blank' rel="noopener noreferrer" href="mailto:ima@ualberta.ca"><Image className="contactIcon" src={emailIcon}/></a>
      </div>
      <div id="info">
        <h1 className={this.state.visable? "animated slideInUp slow":"animated slideOutDown slow"}>Hi, My name is Ivan</h1>
        <p className="animated slideInDown slow" id="mainIntro">
          Since I was little, I remember the dazzling lights and buzzing sounds coming from my
          computer intriguing me. Thankfully my career aspirations are still filled with curiosity and
          excitement. While I am still enthusiastic about pursuing different projects and learning as I go,
          I found my interest in mobile/desktop all in one solutions the most interesting. 
        </p>
        <div id="buttonDiv">
          <Button className="animated fadeIn delay-1s" onClick={this.handleRedirectProjects} variant="success" size="sm">My Projects</Button>
          <Button className="animated fadeIn delay-1s" onClick={this.handleRedirectSkills} variant="info" size="sm">Skills</Button>
        </div>
      </div>
      <Image id="headshotImage" className="animated fadeIn slower" src="https://drive.google.com/uc?export=view&id=13D4MfXjP0sKqo2pXUU7BiqMWr-aE1cK0" rounded/>
      
    </div>
    );
  }
}

export default withRouter(HomePage);