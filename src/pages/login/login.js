
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './styles.css';
import Button from './../../components/button/button';
import userService from '../../services/user.service';
import we from './../../assets/wed3.jpg';
import Input from './../../components/input/input';

export default function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await userService.loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="row m-0">

          <div className="col-md-4">
            <div className="login-content">
              <div className="main-content">
                <h1>Login</h1>
                <Input labelName="User Name"
                  type="text"
                  placeholder="User Name" onChange={e => setUserName(e.target.value)} />

                <Input labelName="Password"
                  type="password"
                  placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <Button btnClass="btn-danger" value="Login" />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <img className="wedding-image" src={we} alt="wedding  logo" />
          </div>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}