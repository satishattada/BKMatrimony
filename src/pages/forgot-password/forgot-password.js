import React, { Component } from 'react';
import "./style.css";
import Input from "../../components/input/input";
import mar5 from './../../assets/mar5.jpg';
import { connect } from 'react-redux';
import { withParamsAndNavigate } from '../../components/with-params-navigate/with-params-navigate';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';
import Button from '../../components/button/button';


class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordVerify: '',
            errors: {
                email: '',
                password: '',
                rePassword: ''
            }
        }

    }

    handleInputChange(event) {
        this.setState({
            password: (event.target.value),
            passwordVerify: (event.target.value)
        })

    }
    handleSubmit = (e) => {

        e.preventDefault();

        let errors = this.state.errors;
        const {

            email,
            password,
            passwordVerify,
        } = this.state;
        let validation = true;


        const validEmailRegex =
            RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i);
        console.log(validEmailRegex.test(email));
        if (!validEmailRegex.test(email)) {
            errors.email = 'Please enter vaild email';
            validation = false;

        }

        if (password.length < 5 || password.length > 10) {
            errors.password = 'Pasword should not contain more than 10 chars or less thans 5 chars';
            validation = false;

        }

        if (password !== passwordVerify) {
            errors.passwordVerify = 'Password Mismatch';
            validation = false;
        }


        if (validation) {
            validation = true;
            // hit the api to add the register form
            const payload = {

                email: email,
                password: password,
                passwordVerify: passwordVerify,

            }

            this.props.appAction.forgetPasswordUser(payload).then((res) => {
                if (res === 'success') {
                    alert('password reset successfully');
                    const { navigate } = this.props;
                    navigate('/')
                }
            })

        } else {
            this.setState({ errors });
        }



        this.setState({ errors }, () => {
            console.log(errors)
        })
    }
    login = () => {
        const { navigate } = this.props;
        navigate('/login')
    }
    render() {
        const { errors } = this.state;
        const { password, passwordVerify, email } = this.state;
        return (<div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className='row'>
                    <div className='col-md-5'>
                        <img className="wed-image" src={mar5} alt="wedding  logo" />
                    </div>
                    <div className='col-md-7'>
                        <div className='fp-content'>
                            <h5 className='fpf'>Forget password</h5>
                            <div className='email-field'>
                                <Input labelName="Email"
                                    type="email"
                                    value={email}
                                    onChange={this.handleInputChange}
                                />
                                <label className="errorStyle">{errors.email}</label>


                                <Input labelName="Password"
                                    type="password"
                                    value={password}
                                    onChange={this.handleInputChange}
                                />
                                <label className="errorStyle">{errors.password}</label>

                                <Input labelName="Re-type password"
                                    type="password"
                                    value={passwordVerify}
                                    onChange={this.handleInputChange}
                                />
                                <label className="errorStyle">{errors.passwordVerify}</label>


                                <Button btnClass='btn-warning'  value="Submit" />

                                <Button  btnClass="btn-danger" value="Back To Login" onSubmitBtn={this.login} />

                            </div>
                        </div>
                    </div>

                </div>
            </form>

        </div>);
    }
}
const mapDispatchToProps = (dispatch) => ({
    appAction: bindActionCreators(appAction, dispatch),
});



export default connect(mapDispatchToProps)(withParamsAndNavigate(ForgotPassword));