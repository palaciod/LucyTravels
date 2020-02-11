import React, { Component } from "react";
import natalia10 from "../styles/natalia10.jpg";
import playamujere01 from "../styles/playamujere01.jpg";
import portland01 from "../styles/portland01.jpg";
import pr01 from "../styles/pr01.jpg";
import natalia02 from "../styles/natalia02.jpg";
import nyc01 from "../styles/nyc01.jpg";
import roma05 from "../styles/roma05.jpg";
import colombia05 from "../styles/colombia05.jpg";
import paris05 from "../styles/paris05.jpg";
import switz05 from "../styles/switz05.jpg";
export class PhotoTable extends Component {
  render() {
    return (
      <div className='photoTableView'>
        <br></br>
        <a href='/cancun'>
          <div className='photoRow'>
            <img
              src={playamujere01}
              alt='GalleryImage'
              className='galleryPhoto'
            ></img>
            <div className='outer'>
              <div className='photoLocation'>Cancun, Mexico</div>
            </div>
          </div>
        </a>
        <br></br>
        <a href='/portland'>
          <div className='photoRow'>
            <img
              src={portland01}
              alt='GalleryImage'
              className='galleryPhoto'
            ></img>
            <div className='outer'>
              <div className='photoLocation'>Portland, Oregon</div>
            </div>
          </div>
        </a>
        <br></br>
        <a href='/puertoRico'>
          <div className='photoRow'>
            <img src={pr01} alt='GalleryImage' className='galleryPhoto'></img>
            <div className='outer'>
              <div className='photoLocation'>Viejo San Juan, Puerto Rico</div>
            </div>
          </div>
        </a>
        <br></br>
        <a href='morocco'>
          <div className='photoRow'>
            <img
              src={natalia02}
              alt='GalleryImage'
              className='galleryPhoto'
            ></img>
            <div className='outer'>
              <div className='photoLocation'>Marrakech, Morocco</div>
            </div>
            <br></br>
          </div>
        </a>
        <br></br>
        <a href='/nyc'>
          <div className='photoRow'>
            <img src={nyc01} alt='GalleryImage' className='galleryPhoto'></img>
            <div className='outer'>
              <div className='photoLocation'>New York, New York</div>
            </div>
            <br></br>
          </div>
        </a>
        <br></br>
        <a href='/rome'>
          <div className='photoRow'>
            <img src={roma05} alt='GalleryImage' className='galleryPhoto'></img>
            <div className='outer'>
              <div className='photoLocation'>Italy, Rome</div>
            </div>
            <br></br>
          </div>
        </a>
        <br></br>
        <a href='/medellín'>
          <div className='photoRow'>
            <img
              src={colombia05}
              alt='GalleryImage'
              className='galleryPhoto'
            ></img>
            <div className='outer'>
              <div className='photoLocation'>Colombia, Medellín</div>
            </div>
            <br></br>
          </div>
        </a>
        <br></br>
        <a href='/paris'>
          <div className='photoRow'>
            <img
              src={paris05}
              alt='GalleryImage'
              className='galleryPhoto'
            ></img>
            <div className='outer'>
              <div className='photoLocation'>France, Paris</div>
            </div>
            <br></br>
          </div>
        </a>
        <br></br>
        <a href='zurich'>
          <div className='photoRow'>
            <img
              src={switz05}
              alt='GalleryImage'
              className='galleryPhoto'
            ></img>
            <div className='outer'>
              <div className='photoLocation'>Switzerland, Zurich</div>
            </div>
            <br></br>
          </div>
        </a>
        <br></br>
      </div>
    );
  }
}

export default PhotoTable;
