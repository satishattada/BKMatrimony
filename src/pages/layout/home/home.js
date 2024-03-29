
import React, { Component } from "react";
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../../redux/actions';
import { Link } from "react-router-dom";
import ProfileCard from "../../../components/profile-card/profile-card";
import female from '../../../assets/female_large.jpg';
import { withParamsAndNavigate } from "../../../components/with-params-navigate/with-params-navigate";
import Button from "../../../components/button/button";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      usersData: [],
    }
  }

  componentDidMount = () => {

    if (this.props.userData.id) {
      this.setState({ userData: this.props.userData });
    }

    const gender = this.props.userData.gender === "Female"? 'Male': 'Female';
console.log(gender);
    this.props.appAction.getUsersDetails(gender).then((data) => {

      this.setState({ usersData: this.props.usersData });
    });

  }

  getColorStyle = (gender) => {
    return gender === 'Female' ? { color: 'blue', background: 'pink' } : { color: 'green', background: 'yellow' };


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
    return gender === 'Female' ? 'blueCls' : 'greenCls';
  }

  getProfile = (userData) => {
   this.props.appAction.selectProfile(userData).then(() => {
    this.props.navigate('/profile')
   })
  }
  render() {
    const { userData, usersData } = this.state;
    const className = "blueCls";
    return (
      <div className="home-container container ">
        {/* <div className="verify-details">
          <p className="details">
            your document verification is still pending!
            <a href="#" className='verify  btn  ' >verify</a>
          </p>
        </div> */}
        <div className="home-row">
          <div className=" row">
            <div className="home-sidebar col-md-3 col-sm-3">
              <div className="img">
                {/* propfilePhoto?<img className="female-image" src={propfilePhoto} alt="" />:
        <img className="female-image" src={propfilePhoto} alt="" /> */}

                {
                  (userData?.profilePhoto) ?
                    <img className="profile-female-image" src={userData?.profilePhoto?.image?.data} alt="" /> :
                    <img className="profile-female-image" src={female} alt="" />
                }
              </div>
              <div className="progress-bar " role="progressbar" >progress bar</div>
              <div className="side-navbar">
                {/* <a href="#" > Basic Details</a> */}
                <Link to={`/user-details/basic`}>{'Basic Details'}</Link>
                <Link to="/user-details/education">{'Education and Career'}</Link>
                <Link to="/user-details/media">{'Media(photos/videos)'}</Link>
                <Link to="/user-details/family">{'Family'}</Link>
                <Link to="/user-details/partner">{'Partner preference'}</Link>
                <Link to="/user-details/verify">{'verify(Facebook/Linkedin)'}</Link>

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
                      {/* <h2 className={`${className} welcome-message`} > */}
                      <h2 className='welcome-message '>

                         HI "
                        <span className="bold-name"><b>{userData.firstName} {userData.lastName}</b></span>
                        " welcome back.
                      </h2>
                      <ul >
                        <li>
                          <span className="bold-profile">
                            <Button value={'My Profile'} btnClass={'btn-warning'} onSubmitBtn={()=>{this.getProfile(userData)}} />
                            {/* <Link to="/profile">{'My Profile'}</Link> */}
                            </span>
                        </li><br></br>
                        <li >{userData.id}</li><br></br>
                        <li >{userData.email}</li><br></br>
                        <li >{userData.phoneNumber}</li>

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
              {/* <ProfileCard /> */}
              <div className="row">
                {usersData?.map((user, i) => {
                  return (
                    <div className="col-md-4">
                      <ProfileCard userData={user} getProfile={this.getProfile}/>
                    </div>
                  )
                  // <div className={this.getClass(user.gender)} key={i}> {user.firstName} 

                  // </div>)

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

export default connect(mapStateToProps, mapDispatchToProps)(withParamsAndNavigate(Home));

