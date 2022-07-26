
import React, { Component } from "react";
import './styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';
import we from './../../assets/wed3.jpg';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  setUserName = (username) => {
    this.setState({ username })
  }

  setPassword = (password) => {
    this.setState({ password })
  }

  handleSubmit = () => {
    const payload = {
      email: this.state.username,
      password: this.state.password
    }
  
    this.props.appAction.loginUser(payload).then(() => {
    })
  
  }

  render() {
    return (
    <div className="login-container">
      <div className="row m-0">
        <div className="col-md-4">
          <div className="login-content">
            <div className="main-content">
              <h1>Login</h1>
              <Input labelName="User Name"
                type="text"
                placeholder="User Name" onChangeEvent={(event) => {this.setUserName(event.target.value)}} />

              <Input labelName="Password"
                type="password"
                placeholder="Password" onChangeEvent={(event) => {this.setPassword(event.target.value)}} />
              <Button btnClass="btn-danger" value="Login" onSubmitBtn={this.handleSubmit}/>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img className="wedding-image" src={we} alt="wedding  logo" />
        </div>
      </div>

    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  appAction: bindActionCreators(appAction, dispatch),
});

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

