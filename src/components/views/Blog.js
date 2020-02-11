import React, { Component } from "react";
export class Blog extends Component {
  render() {
    return (
      <div className='blog'>
        <br></br>
        <h1>{this.props.content[0]}</h1>
        <h3>{this.props.content[1]}</h3>
        <h4>{this.props.content[2]}</h4>
        <img
          className='blogPicture'
          src={this.props.content[4]}
          alt='BlogPicture'
        ></img>
        <br></br>
        <br></br>
        <p className='blogParagraph'>{this.props.content[3]}</p>
        <br></br>
        <p className='blogParagraph'>{this.props.content[5]}</p>
        <br></br>
      </div>
    );
  }
}

export default Blog;
