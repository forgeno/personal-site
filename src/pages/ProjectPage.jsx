import React, { Component } from 'react';
import "./style/ProjectPage.css"
import {Card, Button, Col, Row, Container, Image} from "react-bootstrap"
import ImageCarousel from "../components/ImageCarousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ProjectPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
 

  render() {
    let stepsImages = {
      image1: "https://drive.google.com/uc?export=view&id=1aT1WIikiD3fyNyzX-tB_eDTp6PvxSBNP",
      image2: "https://drive.google.com/uc?export=view&id=18RhCsgp8cyDrgibjx1SSEYC1z7r3hsQl",
      image3: "https://drive.google.com/uc?export=view&id=1KKTBfxzlY1AE3CaI8stPDQilNpdpIu8H",
      image4: "https://drive.google.com/uc?export=view&id=1YuHRj258lmgIx8y9npsIiTsc4xpxX7Bq",
    }

    let stepsCaptions = {
      cap1: "Main interface",
      cap2: "Comments and rating interface",
      cap3: "Rating interface",
      cap4: "Statistics interface",
    }

    let gitImages = {
      image1: "https://drive.google.com/uc?export=view&id=1yzS6vSpJAklhklAdhL4fZFICptQj0RFx",
      image2: "https://drive.google.com/uc?export=view&id=1WFGJumzg4oDKKLcAG38WGCqs0cbztzlQ",
      image3: "https://drive.google.com/uc?export=view&id=1ny3N7uqq9eMQ2rYyqupX5uB19UYCTeyH",
      image4: "https://drive.google.com/uc?export=view&id=1haOs_al-x3xeU7QsXzk6yYaIzD6e507f",
    }

    let gitCaptions = {
      cap1: "Login screen",
      cap2: "Commenting on posts",
      cap3: "Friends lists",
      cap4: "Profile screen",
    }
    return (
        <div id="ProjectRoot">
            <Container>
              <Row>
                <Col>
                  <Card className="ProjectCard">
                    <span className="ProjectTitle">STEPS</span>
                    <ImageCarousel data={stepsImages} cap={stepsCaptions}/>
                    <Card.Body>
                      <Card.Text>
                        STEPS is a web application that displays details about the sidewalks in Edmonton on an interactive map, with the purpose of of providing researchers data about the walkability attributes of all of the different sidewalks in a city. Ultimately, this data will be used to increase the importance of the pedestrian experience in urban planning and design. Visitors to the site are able to anonymously interact with the map by selecting a sidewalk. After selecting a sidewalk, they are able to leave comments on it, rate it in terms of different walkability attributes (Accessibility, Connectivity, Physical Safety, Comfort, and Sense of Security), and they are also able to upload images to the sidewalk.
                      </Card.Text>
                      <a href="https://github.com/forgeno/steps" target='_blank' rel="noopener noreferrer">
                        <Button variant="success">
                          <Image src="https://drive.google.com/uc?export=view&id=10I7sUITDYJXW2FMDOmUg2CcfXKbL17cB" className="ButtonLogo"></Image>Github Repo
                        </Button>
                      </a>
                      <a href="https://www.youtube.com/watch?v=sJylDy-UX-k" target='_blank' rel="noopener noreferrer">
                        <Button variant="primary">
                          <Image src="https://drive.google.com/uc?export=view&id=1QoITQ8DlQgAAEwjmsJBeOij1DPTKare9" className="ButtonLogo"></Image>Demo Video
                        </Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="ProjectCard">
                    <span className="ProjectTitle">GITFRIENDS</span>
                    <ImageCarousel data={gitImages} cap={gitCaptions}/>
                    <Card.Body>
                      <Card.Text>
                        Part of a university final project, GitFriends is a peer to peer social media network. Each team had to recreate their own rendition of the app. Different front end and back end implementions made each app special from one another. Based on similar ideas such as Facebook, and Twitter. GitFriends allows registered users to quickly share ideas, photos and links by making new posts. Support for sharing content to uses on other "servers/nodes" brings a new level of socialization. This project was built in collaboration with 4 other team members. 
                      </Card.Text>
                      <a href="https://github.com/forgeno/CMPUT404-group-project" target='_blank' rel="noopener noreferrer">
                        <Button variant="success">
                          <Image src="https://drive.google.com/uc?export=view&id=10I7sUITDYJXW2FMDOmUg2CcfXKbL17cB" className="ButtonLogo"></Image>Github Repo
                        </Button>
                      </a>
                      <a href="https://www.youtube.com/watch?v=ur7otnh1ztc&feature=youtu.be" target='_blank' rel="noopener noreferrer">
                        <Button variant="primary">
                          <Image src="https://drive.google.com/uc?export=view&id=1QoITQ8DlQgAAEwjmsJBeOij1DPTKare9" className="ButtonLogo"></Image>Demo Video
                        </Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        </div>
    );
  }
}

export default ProjectPage;