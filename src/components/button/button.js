
import React, { Component } from "react";
import './styles.css'; 

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { value, btnClass } = this.props;
    return (
      <div className="btn-container">
        <button type="submit" className={'btn '+btnClass}>{value}</button>
      </div>
    );
  }
}

export default Button;
