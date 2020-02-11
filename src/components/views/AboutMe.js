import React, { Component } from "react";
import LargeAbout from "./LargeAbout";
import SmallAbout from "./SallAbout";
export class AboutMe extends Component {
  constructor() {
    super();
    this.state = {
      smallVersion: false
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.windowResizeListener);
    this.setInitialNavBarStatus();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResizeListener);
  }
  windowResizeListener = () => {
    var width = window.innerWidth;
    var height = window.innerHeight;

    if (width < 750) {
      this.setState({ smallVersion: true });
    } else {
      this.setState({ smallVersion: false });
    }
  };

  setInitialNavBarStatus() {
    const width = window.innerWidth;
    if (width < 750) {
      this.setState({ smallVersion: true });
    } else {
      this.setState({ smallVersion: false });
    }
  }
  render() {
    if (this.state.smallVersion) {
      return <SmallAbout />;
    } else {
      return <LargeAbout />;
    }
  }
}

export default AboutMe;
