import React, { Component } from 'react';
import "./style/ContactPage.css"
import { Container, Row, Col } from "react-bootstrap"
import { Image,Button } from "react-bootstrap";
import linkedinIcon from "../assets/images/linkedin-colour.png"
import emailIcon from "../assets/images/mail-colour.png"
import githubIcon from "../assets/images/github-colour.png"


class ContactPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
          <Container>
            <Row className="ContactRow">
              <Col className="contactGrid animated fadeInUp">
                <Image className="contactIcon" src={linkedinIcon}/>
                <p className="connectInfo">
                  Connect with me on Linkedin and send me a message! My profile on Linkedin contains more information about my projects and experience.
                </p>
                <Button target='_blank' href="https://www.linkedin.com/in/ivanma0" className="connectButton" variant="primary" size="sm">Linkedin</Button>
              </Col>
              <Col className="contactGrid animated fadeInUp slow">
                <Image className="contactIcon" src={emailIcon}/>
                <p className="connectInfo">
                  By far the best way to reach me, I typically reply within the same day. Use it as a great way to set up photography work, freelance software development, or just to be my friend!
                </p>
                <Button target='_blank' href="mailto:ima@ualberta.ca" className="connectButton" variant="primary" size="sm">Email me</Button>
              </Col>
              <Col className="contactGrid animated fadeInUp slower">
                <Image className="contactIcon" src={githubIcon}/>
                <p className="connectInfo">
                  If you just want to get to the juicy stuff, check out my github. I put most of my code on it so feel free to browse around.
                </p>
                <Button target='_blank' href="https://github.com/forgeno" className="connectButton" variant="primary" size="sm">Github</Button>
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
}

export default ContactPage;