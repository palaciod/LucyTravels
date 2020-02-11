import React, { Component } from "react";
import NavBar from "../views/Header";
import AboutBody from "../views/AboutMe";
import BottomBar from "../views/BottomPage";
export class About extends Component {
  render() {
    return (
      <div className='page' style={{ height: "100%" }}>
        <NavBar height={"10%"} />
        <AboutBody />
        <BottomBar height={"25%"} />
      </div>
    );
  }
}

export default About;
