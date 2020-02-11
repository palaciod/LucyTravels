import React, { Component } from "react";
import BottomBar from "../views/BottomPage";
import Blogs from "../views/Blogs";
import CurrentEvents from "../views/CurrentEvents";
import NavBar from "../views/Header";
export class Home extends Component {
  constructor() {
    super();
    this.state = {
      opacityNumber: 1,
      smallVersion: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listentToScroll);
    this.windowSizeAdapter();
    window.addEventListener("resize", this.windowSizeListener);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.listentToScroll);
    window.removeEventListener("resize", this.windowSizeListener);
  }
  hideScrollBar() {
    window.scrollbars.visible = false;
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
  listentToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // Need a switch statement
    if (winScroll < 20) {
      this.setState({ opacityNumber: 1 });
    } else if (winScroll < 30) {
      this.setState({ opacityNumber: 0.98 });
    } else if (winScroll < 40) {
      this.setState({ opacityNumber: 0.96 });
    } else if (winScroll < 50) {
      this.setState({ opacityNumber: 0.94 });
    } else if (winScroll < 60) {
      this.setState({ opacityNumber: 0.92 });
    } else if (winScroll < 70) {
      this.setState({ opacityNumber: 0.9 });
    } else if (winScroll < 80) {
      this.setState({ opacityNumber: 0.88 });
    } else if (winScroll < 90) {
      this.setState({ opacityNumber: 0.85 });
    } else if (winScroll < 100) {
      this.setState({ opacityNumber: 0.8 });
    } else if (winScroll < 110) {
      this.setState({ opacityNumber: 0.75 });
    } else if (winScroll < 120) {
      this.setState({ opacityNumber: 0.7 });
    }
    console.log(this.props.height);
  };
  render() {
    if (this.state.smallVersion) {
      return (
        <div className='page'>
          <NavBar />
          <div className='body'>
            {/* <div
              className='parallax'
              style={{ opacity: this.state.opacityNumber }}
            >
              Lucy's Travel Plans
            </div> */}
            <br></br>
            <div className='mainBody'>
              <div className='leftBody'>
                <Blogs />
              </div>
              {/* <div className='rightBody'>
                <CurrentEvents />
              </div> */}
            </div>
            <BottomBar />
          </div>
        </div>
      );
    } else {
      //
      return (
        <div className='page'>
          <NavBar />
          <div className='body'>
            <div
              className='parallax'
              style={{ opacity: this.state.opacityNumber }}
            >
              Lucy's Travel Plans
            </div>
            <br></br>
            <div className='mainBody'>
              <div className='leftBody'>
                <Blogs />
              </div>
              {/* <div className='rightBody'>
                <CurrentEvents />
              </div> */}
            </div>
            <BottomBar />
          </div>
        </div>
      );
    }
  }
}

export default Home;
