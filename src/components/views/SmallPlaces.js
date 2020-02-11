import React, { Component } from "react";
import { ReactComponent as NorthAmericaMap } from "../styles/northmaericawithstates.svg";
import { ReactComponent as SouthAmericanMap } from "../styles/southamericasvg.svg";
import { ReactComponent as Europe } from "../styles/europesvg.svg";
import { ReactComponent as Asia } from "../styles/asiasvg.svg";

export class SmallPlaces extends Component {
  constructor() {
    super();
    this.state = {
      mapState: "northAmerica"
    };
  }
  northAmericaMap = () => {
    this.setState({ mapState: "northAmerica" });
    console.log(this.state.mapState);
  };
  southAmericaMap = () => {
    this.setState({ mapState: "southAmerica" });
    console.log(this.state.mapState);
  };
  europeMap = () => {
    this.setState({ mapState: "europe" });
    console.log(this.state.mapState);
  };
  asiaMap = () => {
    this.setState({ mapState: "asia" });
    console.log(this.state.mapState);
  };
  render() {
    if (this.state.mapState === "northAmerica") {
      return (
        <div className='SmallPlacesView'>
          <br></br>
          <div className='mapNavBar'>
            <div className='mapNavBarContainer' onClick={this.northAmericaMap}>
              N° America
            </div>
            <div className='mapNavBarContainer' onClick={this.southAmericaMap}>
              S° America
            </div>
            <div className='mapNavBarContainer' onClick={this.europeMap}>
              Europe
            </div>
            <div className='mapNavBarContainer' onClick={this.asiaMap}>
              Asia
            </div>
          </div>
          <NorthAmericaMap />
        </div>
      );
    } else if (this.state.mapState === "southAmerica") {
      return (
        <div className='SmallPlacesView'>
          <br></br>
          <div className='mapNavBar'>
            <div className='mapNavBarContainer' onClick={this.northAmericaMap}>
              N° America
            </div>
            <div className='mapNavBarContainer' onClick={this.southAmericaMap}>
              S° America
            </div>
            <div className='mapNavBarContainer' onClick={this.europeMap}>
              Europe
            </div>
            <div className='mapNavBarContainer' onClick={this.asiaMap}>
              Asia
            </div>
          </div>
          <SouthAmericanMap />
        </div>
      );
    } else if (this.state.mapState === "asia") {
      return (
        <div className='SmallPlacesView'>
          <br></br>
          <div className='mapNavBar'>
            <div className='mapNavBarContainer' onClick={this.northAmericaMap}>
              N° America
            </div>
            <div className='mapNavBarContainer' onClick={this.southAmericaMap}>
              S° America
            </div>
            <div className='mapNavBarContainer' onClick={this.europeMap}>
              Europe
            </div>
            <div className='mapNavBarContainer' onClick={this.asiaMap}>
              Asia
            </div>
          </div>
          <Asia />
        </div>
      );
    } else {
      return (
        <div className='SmallPlacesView'>
          <br></br>
          <div className='mapNavBar'>
            <div className='mapNavBarContainer' onClick={this.northAmericaMap}>
              N° America
            </div>
            <div className='mapNavBarContainer' onClick={this.southAmericaMap}>
              S° America
            </div>
            <div className='mapNavBarContainer' onClick={this.europeMap}>
              Europe
            </div>
            <div className='mapNavBarContainer' onClick={this.asiaMap}>
              Asia
            </div>
          </div>
          <Europe />
        </div>
      );
    }
  }
}

export default SmallPlaces;
