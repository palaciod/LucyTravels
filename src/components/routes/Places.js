import React, { Component } from "react";
import NavBar from "../views/Header";
import BottomBar from "../views/BottomPage";
import LargePlacesView from "../views/LargePlacesView";
import SmallPlacesView from "../views/SmallPlaces";
export class Places extends Component {
  constructor() {
    super();
    this.state = {
      smallVersion: false
    };
  }

  componentDidMount() {
    this.windowSizeAdapter();
    window.addEventListener("resize", this.windowSizeListener);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.windowSizeListener);
  }
  windowSizeListener = () => {
    this.windowSizeAdapter();
  };
  windowSizeAdapter() {
    var width = window.innerWidth;

    if (width < 750) {
      this.setState({ smallVersion: true });
    } else {
      this.setState({ smallVersion: false });
    }
    console.log(`This is my smallVersion Status: ${this.state.smallVersion}`);
  }

  render() {
    if (this.state.smallVersion) {
      return (
        <div className='page' style={{ height: "100%" }}>
          <NavBar height={"10%"} />
          <SmallPlacesView />
          <BottomBar height={"25%"} />
        </div>
      );
    } else {
      return (
        <div className='page' style={{ height: "100%" }}>
          <NavBar height={"10%"} />
          <LargePlacesView />
          <BottomBar height={"25%"} />
        </div>
      );
    }
  }
}

export default Places;
