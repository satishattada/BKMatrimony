import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
import './styles.css'; 
import { Header} from '../../components';
import { withParamsAndNavigate } from "../../components/with-params-navigate/with-params-navigate";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';

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

  submitPfrofile = () => {
      this.props.navigate('/profile');
  }
  render() {
    return (
      <div className='layout-container'>
        <Header logout={this.submitLogout} profile={this.submitProfile} />
    
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
export default connect(null, mapDispatchToProps)(withParamsAndNavigate(Layout));
