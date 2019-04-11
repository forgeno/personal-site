import React, { Component } from 'react';
import "./style/ResumePage.css";
import { PDFReader  } from 'react-read-pdf'
import resumePDF from "../assets/images/Resume-2019.pdf"

class ResumePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      }
  }


  render() {
    return (
        <div id="resumepdf">
            <PDFReader url={resumePDF}/>
        </div>
    )
  }
}

export default ResumePage;