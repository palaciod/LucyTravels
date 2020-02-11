import React, { Component } from "react";
import "../styles/Style.css";
import SmallNavBar from "./SmallHeader";
import LargeNavBar from "./LargeNavBar";
export class Header extends Component {
  constructor() {
    super();
    this.state = {
      smallNavBarStatus: false
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

    if (width < 750) {
      this.setState({ smallNavBarStatus: true });
    } else {
      this.setState({ smallNavBarStatus: false });
    }
  };

  setInitialNavBarStatus() {
    const width = window.innerWidth;
    if (width < 750) {
      this.setState({ smallNavBarStatus: true });
    } else {
      this.setState({ smallNavBarStatus: false });
    }
  }
  render() {
    if (this.state.smallNavBarStatus) {
      return <SmallNavBar height={this.props.height} />;
    } else {
      return <LargeNavBar height={this.props.height} />;
    }
  }
}

export default Header;
