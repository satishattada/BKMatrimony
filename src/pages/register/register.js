
import React, { Component } from "react";
import './styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';
import Input from "../../components/input/input";
import { withParamsAndNavigate } from "../../components/with-params-navigate/with-params-navigate";
import mar4 from './../../assets/mar4.jpg';
import Button from "../../components/button/button";

export class Register extends Component {

  constructor(props) {

    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: '',
      rePassword: '',
      phoneNumber: '',
      profileFor: '',
      validationError: null,
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        gender: '',
        dropdown: ''
      }
    }
  }
  handleGender = (e) => {
    this.setState({ gender: e.target.value });
    // this.setState({ errors });
  }
  handleDropdown = (e) => {
    this.setState({ profileFor: e.target.value });

  }

  setDetails = (value, type) => {
    let errors = this.state.errors;

    switch (type) {
      case 'firstName':
        errors.firstName = '';
        this.setState({ firstName: value });
        break;
      case 'lastName':
        errors.lastName = '';
        this.setState({ lastName: value });
        break;
      case 'email':
        errors.email = '';

        this.setState({ email: value });
        break;
      case 'password':
        errors.password = '';

        this.setState({ password: value });
        break;
      case 'rePassword':
        errors.rePassword = '';

        this.setState({ rePassword: value });
        break;
      case 'phoneNumber':
        errors.phoneNumber = '';

        this.setState({ phoneNumber: value });
        break;
      default:
        break;
    }

    this.setState({ errors });

  }
  handleSubmit = (e) => {

    e.preventDefault();

    let errors = this.state.errors;
    const { firstName,
      lastName,
      email,
      password,
      rePassword,
      gender,
      phoneNumber,
      profileFor, } = this.state;
    let validation = true;
    if (firstName.length < 5) {
      errors.firstName = 'First Name must be 5 characters long!';
      validation = false;
    }


    if (lastName.length < 5) {
      errors.lastName = 'Last Name must be 5 characters long!';
      validation = false;

    }

    const validEmailRegex =
      RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i);
    if (!validEmailRegex.test(email)) {
      errors.email = 'Please enter vaild email';
      validation = false;

    }

    if (password.length < 5 || password.length > 10) {
      errors.password = 'Pasword should not contain more than 10 chars or less thans 5 chars';
      validation = false;

    }

    if (password !== rePassword) {
      errors.rePassword = 'Password Mismatch';
      validation = false;
    }

    if (phoneNumber.length !== 10) {
      errors.phoneNumber = 'Phone number should contain 10 numbers';
      validation = false;
    }

    if (!gender) {
      errors.gender = 'Gender is required';
      validation = false;

    }
    if (!profileFor) {
      errors.dropdown = ' please select the options';
      validation = false;

    }

    if (validation) {
      validation = true;
      // hit the api to add the register form
      const payload = {
        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        password: password,
        phoneNumber: phoneNumber,
        gender: gender,
        profileFor: profileFor
      }

      this.props.appAction.registerUser(payload).then((res) => {
        if (res === 'success') {
          alert('registered successfully');
          const { navigate } = this.props;
          navigate('/')
        } else {
          this.setState({ validationError: res })

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

    let { errors, validationError } = this.state;
    validationError = validationError ? validationError + ', Please try with another Email' : '';
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img className="wedding-image" src={mar4} alt="wedding  logo" />
          </div>
          <div className="col-md-7">
            <div className="regspage">
              <h4 className="register">Register Page</h4>
              <label className="errorStyle">{validationError}</label>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <Input labelName="First Name"
                    type="text"
                    placeholder="First Name" onChangeEvent={(event) => { this.setDetails(event.target.value, 'firstName') }} />
                  <label className="errorStyle">{errors.firstName}</label>
                </div>
                <div>
                  <Input labelName="Last Name"
                    type="text"
                    placeholder="Last Name" onChangeEvent={(event) => { this.setDetails(event.target.value, 'lastName') }} />
                  <label className="errorStyle">{errors.lastName}</label>
                </div>
                <div>
                  <Input labelName="Email"
                    type="text"
                    placeholder="Example@" onChangeEvent={(event) => { this.setDetails(event.target.value, 'email') }} />
                  <label className="errorStyle">{errors.email}</label>
                </div>
                <div>
                  <Input labelName="Password"
                    type="password"
                    placeholder="Password" onChangeEvent={(event) => { this.setDetails(event.target.value, 'password') }} />
                  <label className="errorStyle">{errors.password}</label>
                </div>
                <div>
                  <Input labelName="Re enter Password"
                    type="password"
                    placeholder="Re enter Password" onChangeEvent={(event) => { this.setDetails(event.target.value, 'rePassword') }} />
                  <label className="errorStyle">{errors.rePassword}</label>
                </div>
                <div>



                  <label className="gender">Gender</label>

                  <div className="radio-buttons">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        value="Male"
                        onChange={this.handleGender} />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Male
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        value="Female"
                        onChange={this.handleGender} />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Female
                      </label>
                    </div>
                  </div>
                  <label className="errorStyle">{errors.gender}</label>

                </div>
                <div>
                  <Input labelName="Phone"
                    type="phone"
                    placeholder="phonenumber" onChangeEvent={(event) => { this.setDetails(event.target.value, 'phoneNumber') }} />
                  <label className="errorStyle">{errors.phoneNumber}</label>
                </div>
                <div>
                  <label className="profile">Profile Creating For</label><br></br>
                  <select className="profile-option" onChange={this.handleDropdown}>
                    <option value="">Select</option>
                    <option value="self">Self</option>
                    <option value="daughter">Daughter</option>
                    <option value="son">Son</option>
                    <option value="friend">Friend</option>
                    <option value="relative">Relative</option>
                    <option value="brother">Brother</option>
                  </select>
                  <label className="errorStyle">{errors.dropdown}</label>
                </div>
                <br></br>

                <Button btnClass="btn-warning" value="Submit" />

                <p className="am-text">Already a Member ?</p>


                <Button btnClass="btn-danger" value="Back To Login" onSubmitBtn={this.login} />


              </form>
            </div>
          </div>
        </div>
      </div>

    );
    // onClick={() => { this.handleSubmit() }}
  }
}

const mapDispatchToProps = (dispatch) => ({
  appAction: bindActionCreators(appAction, dispatch),
});

const mapStateToProps = (state) => {
  return {
    userData: state.user.userData,
    usersData: state.user.usersData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withParamsAndNavigate(Register));
