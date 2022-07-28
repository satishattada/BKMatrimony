
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {

        username: '',
        password: '',

      }
    }
  }

  setUserName = (username) => {
    this.setState({ username })
  }

  setPassword = (password) => {
    this.setState({ password })
  }
  validateForm = () => {
    const { username, password } = this.state
    let validation = true;
    if (username.length === 0) {
      validation = false;
    }
    if (password.length === 0) {
      validation = false;
    }
    return validation;
  }

  handleSubmit = () => {
    const payload = {
      email: this.state.username,
      password: this.state.password
    }
    const validationStatus = this.validateForm()
    if (validationStatus === false) {
      alert('please fill  the required fields')
    }
    console.log(this.state);
    this.props.appAction.loginUser(payload).then(() => {

    })


  }
  register=()=>{
    const { navigate } = this.props;
    navigate('/register')
  }

  render() {
    const { errors } = this.state;
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
                  <Input labelName="User Name"
                    type="text"
                    placeholder="User Name" onChangeEvent={(event) => { this.setUserName(event.target.value) }} />
                  <label className="errorStyle">{errors.username}</label>

                  <Input labelName="Password"
                    type="password"
                    placeholder="Password" onChangeEvent={(event) => { this.setPassword(event.target.value) }} />
                  <label className="errorStyle">{errors.password}</label>

                  <Button btnClass="btn-warning" value="Login" onSubmitBtn={this.handleSubmit} />
                 <div className="fpli">
                 <Link  to={`/forgot-password`}>{'ForgotPassword'} ?</Link>
                 </div>
                    
                    <p className="dheading">Don't have an account?</p>

                  <Button  btnClass="btn-danger"  value="Register" onSubmitBtn={this.register} />
                
                </div>
              </div>


            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withParamsAndNavigate(Login));

