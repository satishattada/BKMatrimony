
import React, { Component } from "react";
import './styles.css'; 

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="container">

        <h1>login page</h1>
        <button className="btn btn-primary">click me</button>
      </div>
    );
  }
}

export default Login;
