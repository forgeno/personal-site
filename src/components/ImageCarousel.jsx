import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";


class ImageCarousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    
      
    render() {
        return (
            <Carousel autoPlay>
                <div>
                    <img src={this.props.data["image1"]} />
                    <p className="legend">{this.props.cap["cap1"]}</p>
                </div>
                <div>
                    <img src={this.props.data["image2"]} />
                    <p className="legend">{this.props.cap["cap2"]}</p>
                </div>
                <div>
                    <img src={this.props.data["image3"]} />
                    <p className="legend">{this.props.cap["cap3"]}</p>
                </div>
                <div>
                    <img src={this.props.data["image4"]} />
                    <p className="legend">{this.props.cap["cap4"]}</p>
                </div>
            </Carousel>
        );
    }
}

export default ImageCarousel;