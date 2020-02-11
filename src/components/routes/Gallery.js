import React, { Component } from "react";
import NavBar from "../views/Header";
import PhotoTable from "../views/PhotoTable";
import BottomBar from "../views/BottomPage";

export class Gallery extends Component {
  render() {
    return (
      <div className='page' style={{ height: "100%" }}>
        <NavBar height={"10%"} />

        <PhotoTable />
        <BottomBar height={"25%"} />
      </div>
    );
  }
}

export default Gallery;
