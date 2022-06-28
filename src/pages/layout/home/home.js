
import React, { Component } from "react";
import './styles.css';
import female from '../../../assets/female_large.jpg';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="home-container container-fluid ">

        <img className="bk-logo" src={bk} alt=" " />

        <div className="home-row   row">
          <div className="home-sidebar col-md-3 col-sm-3">
            <img className="female-image" src={female} alt="" />
            <div class="progress-bar " role="progressbar" >progress bar</div>
            <div className="side-navbar">
              <a href="#" > Basic Details</a>
              <a href="#" > Education and Career</a>
              <a href="#" > Media(photos/videos)</a>
              <a href="#" > Family Details</a>
              <a href="#" > Partner preference</a>
              <a href="#" > verify(Facebook/Linkedin)</a>
            </div>
          </div>

          <div className="row">
            <div className=" col-md-3 col-sm-3">main detais</div>

          </div>
        </div>
      </div>



    );
  }
}

export default Home;
