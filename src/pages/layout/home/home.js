
import React, { Component } from "react";
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import UserService from './../../../services/user.service';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../../redux/actions';
import { Outlet, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      usersData: [],
    }
  }

  componentDidMount = () => {
    if (!this.props.userData.id) {
      this.props.appAction.getUserDetails().then(() => {
        this.setState({ userData: this.props.userData });
      })
    } else {
      this.setState({ userData: this.props.userData });
    }

    // if no new data
    this.props.appAction.getUsersDetails().then((data) => {

      this.setState({ usersData: this.props.usersData });
    });

    // if new data loads every time 
    // this.props.appAction.getUsersDetails().then((data) => {
    //   this.setState({ usersData: data });
    // });

    // UserService.getUsers().then(
    //   (data) => {
    //     this.setState({ usersData: data });
    //   },
    //   (error) => {
    //     error.toString();
    //   },
    // );
  }

  getColorStyle = (gender) => {
    return gender === 'Female'? {color:'blue',background:'pink'}: {color:'green',background:'yellow'};


    // let colorCode = '';
    // if(gender === 'Female') {
    //   colorCode = 'blue';
    // // return {color:'blue'}

    // } else {
    //   colorCode = 'green'
    // // return {color:'green'}

    // }

    // return {color:colorCode}
  }

  getClass = (gender) => {
    return gender === 'Female'? 'blueCls': 'greenCls';
  }

  render() {
    const { userData, usersData } = this.state;
    const className = "blueCls";
    const propfilePhoto =  "data:image/jpeg;base64,"+userData?.profilePhoto?.image?.data;
    return (
      <div className="home-container container ">
        <div className="verify-details">
          <p className="details">
            your document verification is still pending!
            <a href="#" className='verify  btn  ' >verify</a>
          </p>
        </div>
        <div className="home-row">
          <div className=" row">
        <div className="home-sidebar col-md-3 col-sm-3">
        <div class="img">
              <img className="female-image" src={propfilePhoto} alt="" />
        </div>
              <div className="progress-bar " role="progressbar" >progress bar</div>
              <div className="side-navbar">
                {/* <a href="#" > Basic Details</a> */}
                <Link to="/user-details">{'Basic Details'}</Link>
                <Link to="/user-details">{'Education and Career'}</Link>
                <Link to="/user-details">{'Media(photos/videos)'}</Link>
                <Link to="/user-details">{'Family'}</Link>
                <Link to="/user-details">{'Partner preference'}</Link>
                <Link to="/user-details">{'verify(Facebook/Linkedin)'}</Link>

                {/* <a href="#" > Education and Career</a>
                <a href="#" > Media(photos/videos)</a>
                <a href="#" > Family Details</a>
                <a href="#" > Partner preference</a>
                <a href="#" > verify(Facebook/Linkedin)</a> */}
              </div>
            </div>
            <div className="main-home1  col-md-8 col-sm-8">
              <div className="user-card">
                <div className="row" >
                  <div className="col-md-8 col-sm-8">
                    <div className="dash-name">
                      <h2 className={`${className} welcome-message`} >
                        "HI "
                        <span><b>{userData.name}</b></span>
                        ", welcome back"
                      </h2>
                      <ul>
                        <li>
                          <Link to="/profile">{'My Profile'}</Link>
                        </li>
                        <li>{userData.id}</li>
                        <li>{userData.email}</li>
                        <li>{userData.phoneNumber}</li>

                      </ul>
                    </div>
                  </div>
                  <div className="trust-score col-m-4 col-sm-4">
                    <a className="QuestionCircle" href="#" data-toggle="collapse">
                      <FontAwesomeIcon className='QuestionCircle' icon={faQuestionCircle} />
                    </a>
                    <div className="trust-meter-dash" >
                      <span className="dash-trust-meter" >
                        <span className="pointer-trust-meter"></span>
                        <h5 className="trust-score-text" >Trust Score 20%</h5>
                        <p className="text-center" >
                          <a href="#">Improve text score</a>
                        </p>

                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row  " >row</div>
              <div>
                {usersData.map((user, i) => {
                  // return (<div style={this.getColorStyle(user.gender)} key={i}> {user.name} </div>)
                  return (<div className={this.getClass(user.gender)} key={i}> {user.name} </div>)

                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  appAction: bindActionCreators(appAction, dispatch),
});

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    usersData: state.user.usersData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

