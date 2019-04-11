import React, { Component } from 'react';
import "./style/PhotoPage.css"
import { Image,Container,Row,Col } from "react-bootstrap"

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
                I've taken on small to medium-sized events (~100 people) as well as one on one headshots. Dance and urban
                photography are my specialties. Feel free to get in touch with me for future work.
              </p>
            </div>
          </Col>
          <Col className="gridElement">
            <Image className="gridImage" src="https://drive.google.com/uc?export=view&id=1yyh7r9i4PnH__EdGCaSxEYbl176utMRj" ></Image>
          </Col>
        </Row>
        <Row>
          <Col className="gridElement">
            <Image className="gridImage" src="https://drive.google.com/uc?export=view&id=1HbR_OH1r-UFVLx9osZgwS1o2U2XOatV5"></Image>
          </Col>
        </Row>
        <Row>
          <Col className="gridElement">
            <Image className="gridImage" src="https://drive.google.com/uc?export=view&id=1hppoSj32bALLEEWj-uoRS4wNSCttOKKO"></Image>
          </Col>
          <Col className="gridElement">
            <Image className="gridImage" src="https://drive.google.com/uc?export=view&id=1oQCzmHC6Tn3HtyPu_kGUXKzmanVbVog1"></Image>
          </Col>
        </Row>
        <Row>
          <Col className="gridElement">
            <Image className="gridImage wow fadeInUp" src="https://drive.google.com/uc?export=view&id=1nu2M5pF8i8WIVekjZI4GsR3-ezf2xc8O"></Image>
          </Col>
          <Col className="gridElement">
            <Image className="gridImage" src="https://drive.google.com/uc?export=view&id=1QTPUHdEv-34pIN09eJfHhAAWuNWaOZcJ"></Image>
          </Col>
        </Row>
        <Row>
            <iframe className="videoPlayer" title="video1" width="1000" height="562.50" src="https://www.youtube.com/embed/RGWqHGyrC0o"></iframe>
        </Row>
        <br/>
        <Row>
            <iframe className="videoPlayer" title="video2" width="1000" height="562.50" src="https://www.youtube.com/embed/FHfi6wp7XrM"></iframe>
        </Row>
        <br/>
        <Row>
        <iframe className="videoPlayer" title="video3" src="https://drive.google.com/file/d/1YCUPDfLzSUomPBK6RF6u8ZS4cq02VoPl/preview" width="1000" height="562.50"></iframe>
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