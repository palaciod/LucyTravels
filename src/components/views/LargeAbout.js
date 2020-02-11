import React, { Component } from "react";
import natalia09 from "../styles/natalia09.jpg";
export class SmallAbout extends Component {
  render() {
    return (
      <div className='aboutMeContainer'>
        <br></br>
        <div className='centerAbout'>
          <div className='aboutLeftBody'>
            <br></br>
            <div className='imageContainer'>
              <br></br>
              <img
                className='image'
                src={natalia09}
                alt='Lucy Instagram'
                className='nataliaInstaProfilePicture'
              ></img>
              <div className='aboutMeParagraphTitle'>
                <p className='titleUnderImage' style={{ textAlign: "center" }}>
                  Lucy{" "}
                </p>
              </div>
            </div>
          </div>
          <div className='aboutRightBody'>
            <div className='aboutHeader'> About Luz</div>
            <div className='aboutMeParagraphContainer'>
              <p className='aboutMeParagraph'>
                Hi! You can call me Lucy. I am currently a Physician Assistant
                from New York City trying to explore every corner of the globe.
                I have traveled to over 20 countries and I have a passion for
                meeting new people, experiencing new cultures, and visiting new
                places.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallAbout;
