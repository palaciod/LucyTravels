import React, { Component } from "react";

export class LargeNavBar extends Component {
  toHome = () => {
    window.location.assign("/");
  };
  toAbout = () => {
    window.location.assign("/about");
  };
  toGallery = () => {
    window.location.assign("/gallery");
  };
  toPlaces = () => {
    window.location.assign("/places");
  };
  render() {
    return (
      <div className='navbar' style={{ height: this.props.height }}>
        <div
          className='nav-item'
          style={{ cursor: "pointer" }}
          onClick={this.toHome}
        >
          <a href='/' className='a-link-large-navbar'>
            Home
          </a>
        </div>
        <div
          className='nav-item'
          style={{ cursor: "pointer" }}
          onClick={this.toAbout}
        >
          <a href='/about' className='a-link-large-navbar'>
            About
          </a>
        </div>
        <div
          className='nav-item'
          style={{ cursor: "pointer" }}
          onClick={this.toGallery}
        >
          <a href='/gallery' className='a-link-large-navbar'>
            Photo Gallery
          </a>
        </div>
        <div
          className='nav-item'
          style={{ cursor: "pointer" }}
          onClick={this.toPlaces}
        >
          <a href='/places' className='a-link-large-navbar'>
            Destinations
          </a>
        </div>

        {/* <div className='nav-item'>
          <a href='/followMe' className='a-link-large-navbar'>
            Social Media
          </a>
        </div> */}
      </div>
    );
  }
}

export default LargeNavBar;
