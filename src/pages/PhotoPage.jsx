import React, { Component } from 'react';
import "./style/PhotoPage.css"
import { Image,Container,Row,Col } from "react-bootstrap"
import Building1 from "../assets/images/portfolio/Building1-square.png"
import Seveteen from "../assets/images/portfolio/apricity-seventeen.png"
import Legislature from "../assets/images/portfolio/Legislature-edmonton-square.png"
import CalvinHeadshot from "../assets/images/portfolio/calvin-headshot-square.png"
import MikeSquare from "../assets/images/portfolio/Mike-square.png"
import DeiveSquare from "../assets/images/portfolio/IMG_2442.jpg"
import "mdbootstrap/css/mdb.min.css"

class PhotoPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderImageGrid(){
    return(
      <Container>
        <Row>
          <Col className="gridElement">
            <div id="gridHeader">
              <h1 className="animated fadeInDown slow">Lights, Camera, Action</h1>
              <br/>
              <p className="animated fadeInDown slow">
                Photography is one of my biggest hobbies outside of work. Capturing the perfect moment in time and freezing it.
                I've taken on small to medium sized events (~100 people) as well as one on one headshots. Dance and urban
                photography are my specialties. Feel free to get in touch with me for future work.
              </p>
            </div>
          </Col>
          <Col className="gridElement">
            <Image className="gridImage" src={Building1} ></Image>
          </Col>
        </Row>
        <Row>
          <Col className="gridElement">
            <Image className="gridImage" src={Seveteen}></Image>
          </Col>
        </Row>
        <Row>
          <Col className="gridElement">
            <Image className="gridImage" src={Legislature}></Image>
          </Col>
          <Col className="gridElement">
            <Image className="gridImage" src={CalvinHeadshot}></Image>
          </Col>
        </Row>
        <Row>
          <Col className="gridElement">
            <Image className="gridImage wow fadeInUp" src={MikeSquare}></Image>
          </Col>
          <Col className="gridElement">
            <Image className="gridImage" src={DeiveSquare}></Image>
          </Col>
        </Row>
        <Row>
            <iframe className="videoPlayer" title="video1" width="1000" height="562.50" src="https://www.youtube.com/embed/RGWqHGyrC0o"></iframe>
        </Row>
        <br/>
        <Row>
            <iframe className="videoPlayer" title="video1" width="1000" height="562.50" src="https://www.youtube.com/embed/FHfi6wp7XrM"></iframe>
        </Row>
        <br/>
        <Row>
          <iframe className="videoPlayer" src="https://drive.google.com/file/d/1YCUPDfLzSUomPBK6RF6u8ZS4cq02VoPl/preview" width="1000" height="562.50"></iframe>
        </Row>
      </Container>
    )
  }
  render() {
    return (
        <div>
            {this.renderImageGrid()}
        </div>
    );
  }
}

export default PhotoPage;