import React, { Component } from 'react';
import "./style.css";
import Input from "../../components/input/input";
import mar5 from './../../assets/mar5.jpg';
import { Button } from "react-bootstrap";

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordVerify: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        this.setState({
            password:(event.target.value),
            passwordVerify:(event.target.value)
        })

    }
    handleSubmit(event){
        event.preventDefault();
        // this.setAlertMessage();
        if (this.state.password !== this.state.passwordVerify) {
            return this.setAlertMessage("Passwords must match");
    
    }
    
    }
render() {
    
    return (<div className="container">
        <form onSubmit={this.handleSubmit}>
            <div className='row'>
                <div className='col-md-5'>
                    <img className="wed-image" src={mar5} alt="wedding  logo" />
                </div>
                <div className='col-md-7'>
                    <h5 className='fpf'>Forget password</h5>
                    <div className='email-field'>

                        <Input labelName="Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />

                        <Input labelName="Re-type password"
                            type="password"
                            value={this.state.passwordVerify}
                            onChange={this.handleInputChange}
                        />
                        <div className='fps'>
                            <Button type="submit"   >Submit</Button>
                        </div>
                    </div>

                </div>

            </div>
        </form>

    </div>);
}
}

export default ForgotPassword;