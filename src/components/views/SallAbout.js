import React, { Component } from "react";
import natalia09 from "../styles/natalia09.jpg";
export class SallAbout extends Component {
  render() {
    return (
      <div className='smallAboutVersion'>
        <br></br>
        <div className='smallAboutMeContainer'>
          <br></br>
          <img
            className='image'
            src={natalia09}
            alt='Lucy Instagram'
            className='smallAboutProfileImage'
          ></img>
          <br></br>
          <div className='smallAboutHeader'> About Luz</div>
          <p className='smallAboutMeParagraph'>
            Hi! You can call me Lucy. I am currently a Physician Assistant from
            New York City trying to explore every corner of the globe. I have
            traveled to over 20 countries and I have a passion for meeting new
            people, experiencing new cultures, and visiting new places.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default SallAbout;
