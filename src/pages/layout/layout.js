import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import './styles.css';
import { Header } from '../../components';
import { withParamsAndNavigate } from "../../components/with-params-navigate/with-params-navigate";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';
import Login from "../login/login";

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  submitLogout = () => {
    this.props.appAction.logoutUser().then(() => {
      this.props.navigate('/login');
    });

  }

  submitProfile = (userData) => {
    this.props.appAction.selectProfile(userData).then(() => {
      this.props.navigate('/profile')
     })
  }
  render() {
    const{userData}=this.props
    // if no access token, redirect to login
    if (!this.props.accessToken) {
      return <Login />
    }
    return (
      <div className='layout-container'>
        <Header logout={this.submitLogout} profile={()=>{this.submitProfile(userData)}} />

        <div className="page-container">
          <Outlet />
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  appAction: bindActionCreators(appAction, dispatch),
});

export const mapStateToProps = (state) => {
  return {
    accessToken: state.user.accessToken,
    userData:state.user.userData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withParamsAndNavigate(Layout));
