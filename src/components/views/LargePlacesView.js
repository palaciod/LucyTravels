import React, { Component } from "react";
import { ReactComponent as WorldMap } from "../styles/worldMaps.svg";
export class LargePlacesView extends Component {
  render() {
    return (
      <div className='largePlacesView'>
        <WorldMap />
      </div>
    );
  }
}

export default LargePlacesView;
