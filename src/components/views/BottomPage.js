import React, { Component } from "react";

export class BottomPage extends Component {
  render() {
    return (
      <div className='bottomPage' style={{ height: this.props.height }}>
        <div className='firstHalf'>
          <div className='followMe'>Follow Me</div>
          <div className='instaIcon'>
            <a
              href='https://www.instagram.com/exploreeatlife/'
              style={{ color: "whitesmoke" }}
            >
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
        <div className='secondHalf'>
          <div className='authorDetails'>Developed by Palacio Studios</div>
          <div className='authorGitHub'>
            <a
              href='https://github.com/palaciod'
              style={{ color: "whitesmoke", textDecoration: "none" }}
            >
              <i className='fab fa-github'></i> palaciod
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomPage;
