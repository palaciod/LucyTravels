import React, { Component } from "react";
import natalia09 from "../styles/natalia09.jpg";
export class CurrentEvents extends Component {
  render() {
    return (
      <div className='currentEventsContainer'>
        <br></br>
        <br></br>
        <div className='instaContainer'>
          <div className='currentEventHeader'>
            <div className='header-item'>
              <img
                src={natalia09}
                alt='Lucy Instagram'
                className='nataliaInstaProfilePicture'
              ></img>
            </div>
            <div className='header-item'>About</div>
          </div>
          <br></br>
          <div className='aboutMeParagraphContainer'>
            <p className='aboutMeParagraph'>
              Hi! You can call me Lucy. I am currently a Physician Assistant
              from New York City trying to explore every corner of the globe. I
              have traveled to over 20 countries and I have a passion for
              meeting new people, experiencing new cultures, and visiting new
              places.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentEvents;
