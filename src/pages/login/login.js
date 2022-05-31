
import React, { Component } from "react";
import './styles.css';
import we from './../../assets/wed3.jpg';
import Input from './../../components/input/input';
import Button from './../../components/button/button';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(we);
    return (
      <div className="login-container">
        <div className="row m-0">
          <div className="col-md-4">
            <div className="login-content">
            <div className="main-content">
              <h1>Login</h1>
              <Input
                labelName="User Name"
                type="text"
                placeholder="User Name"
              />

              <Input
                labelName="Password"
                type="password"
                placeholder="Password"
              />
              <Button btnClass="btn-danger" value="Login"/>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <img className="wedding-image" src={we} alt="wedding  logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
