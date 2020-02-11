import React, { Component } from "react";
import NavBar from "../views/Header";
import PhotoGrid from "../views/PhotoGridView";
import BottomBar from "../views/BottomPage";
import playamujere01 from "../styles/playamujere01.jpg";
import cancun from "../styles/cancun.jpg";
import cancun02 from "../styles/cancun02.jpg";
import cancun03 from "../styles/cancun03.jpg";
import cancun04 from "../styles/cancun04.jpg";
import cancun05 from "../styles/cancun05.jpg";
export class Cancun extends Component {
  constructor() {
    super();
    this.state = {
      photos: [playamujere01, cancun, cancun02, cancun03, cancun04, cancun05]
    };
  }
  render() {
    return (
      <div className='page' style={{ height: "100%" }}>
        <NavBar height={"10%"} />
        <PhotoGrid pictures={this.state.photos} />
        <BottomBar height={"25%"} />
      </div>
    );
  }
}

export default Cancun;
