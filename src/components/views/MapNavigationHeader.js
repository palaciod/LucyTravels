import React, { Component } from "react";

export class MapNavigationHeader extends Component {
  render() {
    return (
      <div className='mapNavBar'>
        <div className='mapNavBarContainer'>North America</div>
        <div className='mapNavBarContainer'>South America</div>
        <div className='mapNavBarContainer'>Europe</div>
      </div>
    );
  }
}

export default MapNavigationHeader;
