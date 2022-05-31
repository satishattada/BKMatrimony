
import React, { Component } from "react";
import './styles.css'; 

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { labelName, type, placeholder } = this.props;
    return (
      <div className="input-container">
        <label>{labelName}</label>
        <input className="input-field" type={type} placeholder={placeholder}></input>
      </div>
    );
  }
}

export default Input;
