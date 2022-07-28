
import React, { Component } from "react";
import './styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';
import mar from './../../assets/mar3.jpg';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { Link } from "react-router-dom";
import { withParamsAndNavigate } from "../../components/with-params-navigate/with-params-navigate";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validationError: '',
      errors: {
        username: '',
        password: '',

      }
    }
  }

  setUserName = (username) => {
    const errors = this.state.errors;
    errors.username = '';
    this.setState({ errors, username, validationError: '' });
  }

  setPassword = (password) => {
    const errors = this.state.errors;
    errors.password = '';
    this.setState({ errors, password, validationError: '' })
  }

  validateForm = () => {
    const { username, password } = this.state;
    let { errors } = this.state;
    let validation = true;
    if (username.length === 0) {
      validation = false;
      errors.username = "Email should not be empty";
    }
    if (password.length === 0) {
      validation = false;
      errors.password = "Password should not be empty";

    }
    this.setState({ errors });

    return validation;
  }

  handleSubmit = () => {
    const payload = {
      email: this.state.username,
      password: this.state.password
    }
    const validationStatus = this.validateForm()
    if (validationStatus) {

      this.props.appAction.loginUser(payload).then((res) => {
        if (res === 'success') {
          const { navigate } = this.props;
          navigate('/profile')
        } else {
          this.setState({ validationError: res })
        }

      });
    }
  }
  register = () => {
    const { navigate } = this.props;
    navigate('/register')
  }

  render() {
    let { errors, validationError } = this.state;
    validationError = validationError ? validationError + ', Please try with valid credentials' : '';
    return (
      <div className="container">
        <div className="login-container">
          <div className="row m-0">
            <div className="col-md-5">
              <img className="wedding-image" src={mar} alt="wedding  logo" />
            </div>
            <div className="col-md-6">
              <div className="login-content">
                <div className="main-content">
                  <h1 className="lheading">Login</h1>
                  <label className="errorStyle">{validationError}</label>

                  <Input
                    testID="userNameTestId"
                    labelName="User Name"
                    type="text"
                    placeholder="User Name" onChangeEvent={(event) => { this.setUserName(event.target.value) }} />
                  <label className="errorStyle">{errors.username}</label>

                  <Input
                    testID="passwordTestId"

                    labelName="Password"
                    type="password"
                    placeholder="Password" onChangeEvent={(event) => { this.setPassword(event.target.value) }} />
                  <label className="errorStyle">{errors.password}</label>

                  <Button
                    testID="submitTestID"

                    btnClass="btn-warning" value="Login" onSubmitBtn={this.handleSubmit} />
                  <div className="fpli">
                    <Link to={`/forgot-password`}>{'ForgotPassword'} ?</Link>
                  </div>

                  <p className="dheading">Don't have an account?</p>

                  <Button
                    testID="registerTestID" btnClass="btn-danger" value="Register" onSubmitBtn={this.register} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  appAction: bindActionCreators(appAction, dispatch),
});

export const mapStateToProps = (state) => {
  return {
    userData: state.user.userData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withParamsAndNavigate(Login));

