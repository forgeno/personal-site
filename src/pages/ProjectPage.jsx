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

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  

  render() {
    const images = this.importAll(require.context('../assets/images/Projects/', false, /\.(png|jpe?g|svg)$/));
    let stepsImages = {
      image1: images["StepsThumbnail.png"],
      image2: images["Steps1.png"],
      image3: images["Steps2.png"],
      image4: images["Steps3.png"],
    }

    let stepsCaptions = {
      cap1: "Main interface",
      cap2: "Comments and rating interface",
      cap3: "Rating interface",
      cap4: "Statistics interface",
    }

    let gitImages = {
      image1: images["GitFriends4.png"],
      image2: images["GitFriends3.png"],
      image3: images["GitFriends5.png"],
      image4: images["GitFriends6.png"],
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
                      <Card.Title>STEPS WebApp</Card.Title>
                      <Card.Text>
                        STEPS is a web application that displays details about the sidewalks in Edmonton on an interactive map, with the purpose of of providing researchers data about the walkability attributes of all of the different sidewalks in a city. Ultimately, this data will be used to increase the importance of the pedestrian experience in urban planning and design. Visitors to the site are able to anonymously interact with the map by selecting a sidewalk. After selecting a sidewalk, they are able to leave comments on it, rate it in terms of different walkability attributes (Accessibility, Connectivity, Physical Safety, Comfort, and Sense of Security), and they are also able to upload images to the sidewalk.
                      </Card.Text>
                      <a href="https://github.com/forgeno/steps" target='_blank' rel="noopener noreferrer">
                        <Button variant="success">
                          <Image src={images["GithubLogo.png"]} className="ButtonLogo"></Image>Github Repo
                        </Button>
                      </a>
                      <a href="https://www.youtube.com/watch?v=sJylDy-UX-k" target='_blank' rel="noopener noreferrer">
                        <Button variant="primary">
                          <Image src={images["YoutubeLogo.png"]} className="ButtonLogo"></Image>Demo Video
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
                      <Card.Title>GitFriends WebApp</Card.Title>
                      <Card.Text>
                        Part of a university final project, Git friends is a peer to peer social media network. Each team had to recreate their own rendition of the app. Different front end and back end implementions made each app special from one another. Based on similar ideas such as facebook, and twitter. GitFriends allows registered users to quickly share ideas, photos and links by making new posts. Support for sharing content to uses on other "servers/nodes" brings a new level of socialization. 
                      </Card.Text>
                      <a href="https://github.com/forgeno/CMPUT404-group-project" target='_blank' rel="noopener noreferrer">
                        <Button variant="success">
                          <Image src={images["GithubLogo.png"]} className="ButtonLogo"></Image>Github Repo
                        </Button>
                      </a>
                      <a href="https://www.youtube.com/watch?v=ur7otnh1ztc&feature=youtu.be" target='_blank' rel="noopener noreferrer">
                        <Button variant="primary">
                          <Image src={images["YoutubeLogo.png"]} className="ButtonLogo"></Image>Demo Video
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