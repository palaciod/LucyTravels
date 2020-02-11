import React, { Component } from "react";

export class SmallHeader extends Component {
  jug = () => {
    console.log("jug");
  };
  render() {
    return (
      <div className='smallNavBar' style={{ height: this.props.height }}>
        <div className='dropdown'>
          <span className='nav-item'> ≡ Navigation</span>
          <div className='dropdown-content'>
            <a href='/' className='dropDownLink' onClick={this.jug}>
              Home
            </a>
            <a href='/about' className='dropDownLink'>
              About
            </a>
            <a href='/gallery' className='dropDownLink'>
              Photo Gallery
            </a>
            <a href='/places' className='dropDownLink'>
              Places
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallHeader;
