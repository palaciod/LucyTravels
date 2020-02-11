import React, { Component } from "react";

export class PhotoGridView extends Component {
  componentDidMount() {
    console.log(this.props.pictures[0]);
  }
  render() {
    return (
      <div className='photoGrid'>
        <h2>Adventures in Cancun</h2>
        <div className='row'>
          <div className='cell'>
            <img className='cellPicture' src={this.props.pictures[0]}></img>
          </div>
          <div className='cell'>
            <img className='cellPicture' src={this.props.pictures[1]}></img>
          </div>
          <div className='cell'>
            <img className='cellPicture' src={this.props.pictures[2]}></img>
          </div>
          <div className='cell'>
            <img className='cellPicture' src={this.props.pictures[3]}></img>
          </div>
        </div>
        {/*  */}
        <br></br>
        <div className='row'>
          <div className='cell'>
            <img className='cellPicture' src={this.props.pictures[4]}></img>
          </div>
          <div className='cell'>
            <img className='cellPicture' src={this.props.pictures[5]}></img>
          </div>
          <div className='cell'>
            <img className='cellPicture' src={this.props.pictures[2]}></img>
          </div>
          <div className='cell'>
            <img className='cellPicture' src={this.props.pictures[3]}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGridView;
