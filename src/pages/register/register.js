
import React, { Component } from "react";
import './styles.css'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    // this.props.appAction.getUserDetails().then(() => {

    // });
    this.props.appAction.updateUser().then(() => {
      alert();

    })
  }
  render() {
    return (
      <div className="container">
        <h1>register page</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
