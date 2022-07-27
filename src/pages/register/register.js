
import React, { Component } from "react";
import './styles.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../../redux/actions';
import Input from "../../components/input/input";
import { Button } from "react-bootstrap";

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
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: ''
      }
    }
  }
  handleGender = (e) => {
    console.log(e.target.value);
    this.setState({ gender: e.target.value });

  }
  handleDropdown = (e) => {
    console.log(e.target.value);
    this.setState({ dropDown: e.target.value });

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
    }

    this.setState({errors});

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
    phoneNumber } = this.state;
    let validation = true;
    if(firstName.length < 5) {
      errors.firstName = 'First Name must be 5 characters long!';
      validation = false;
    }

    
    if(lastName.length < 5) {
      errors.lastName = 'Last Name must be 5 characters long!';
      validation = false;

    }

    const validEmailRegex =
      RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i);
      console.log(validEmailRegex.test(email));
    if (!validEmailRegex.test(email)) {
      errors.email = 'Please enter vaild email';
      validation = false;

    }

    if(password.length < 5 || password.length > 10) {
      errors.password = 'Pasword should not contain more than 10 chars or less thans 5 chars';
      validation = false;

    }

    if(password !== rePassword) {
      errors.rePassword = 'Password Mismatch';
      validation = false;
    }

    if(phoneNumber.length !== 10) {
      errors.phoneNumber = 'Phone number should contain 10 numbers';
      validation = false;
    }

    if(validation) {
      validation = true;
      // hit the api to add the register form
      const payload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        gender: gender,
      }
        
    this.props.appAction.registerUser(payload).then((res) => {
      if(res === 'success') {
          alert('registered successfully')
      }
    })

    } else {
      this.setState({errors});
    }


    // switch (name) {
    //   case 'firstName': 
    //     errors.firstName = 
    //       value.length < 5
    //         ? 'FirstName must be 5 characters long!'
    //         : '';
    //     break;
    //     case 'lastName': 
    //     errors.lastName = 
    //       value.length < 5
    //         ? 'last Name must be 5 characters long!'
    //         : '';
    //     break;
    //   case 'email': 
    //     errors.email = 
    //       validEmailRegex.test(value)
    //         ? ''
    //         : 'Email is not valid!';
    //     break;
    //   case 'password': 
    //     errors.password = 
    //       value.length < 8
    //         ? 'Password must be 8 characters long!'
    //         : '';
    //     break;
    //   default:
    //     break;
    // }
  
    this.setState({errors}, ()=> {
        console.log(errors)
    })
  }

  // validate()
  // componentDidMount = () => {
    // this.props.appAction.getUserDetails().then(() => {

    // });
    // this.props.appAction.updateUser().then(() => {
    //   alert();

    // })
  // }
  render() {
    const { errors } = this.state;
    return (

      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input labelName="First Name"
            type="text"
            placeholder="First Name" onChangeEvent={(event) => { this.setDetails(event.target.value, 'firstName') }} />
          <label className="errorStyle">{errors.firstName}</label>
          <Input labelName="Last Name"
            type="text"
            placeholder="Last Name" onChangeEvent={(event) => { this.setDetails(event.target.value, 'lastName') }} />
          <label className="errorStyle">{errors.lastName}</label>

          <Input labelName="Email"
            type="text"
            placeholder="example@" onChangeEvent={(event) => { this.setDetails(event.target.value, 'email') }} />
          <label className="errorStyle">{errors.email}</label>

          <Input labelName="Password"
            type="password"
            placeholder="password" onChangeEvent={(event) => { this.setDetails(event.target.value, 'password') }} />
          <label className="errorStyle">{errors.password}</label>

          <Input labelName="Re enter Password"
            type="password"
            placeholder="Re enter Password" onChangeEvent={(event) => { this.setDetails(event.target.value, 'rePassword') }} />
          <label className="errorStyle">{errors.rePassword}</label>
         
         
          {/* <div>
          <label>Gender</label>
          <input type="radio">Male</input>
          <input type="radio" >Female</input>
        </div> */}
          {/* <input type="radio" value="MALE" defaultChecked name="gender"/> Male */}
          <label>Gender</label>

          <div className="radio-buttons">
            Male
            <input
              id="windows"
              value="Male"
              name="platform"
              type="radio"
              onChange={this.handleGender}
            />
            Female
            <input
              id="mac"
              value="Female"
              name="platform"
              type="radio"
              onChange={this.handleGender}
            />
          </div>


          <Input labelName="Phone"
            type="phone"
            placeholder="phonenumber" onChangeEvent={(event) => { this.setDetails(event.target.value, 'phoneNumber') }} />
          <label className="errorStyle">{errors.phoneNumber}</label>

          <div className="profile">
            <label>PROFILE CREATING FOR</label>
            <select onChange={this.handleDropdown}>
              <option>select</option>
              <option>Self</option>
              <option>Daughter</option>
              <option>Son</option>
              <option>Friend</option>
              <option>Relative</option>
              <option>Brother</option>
            </select>

          </div>
          <Button type="submit" >Submit</Button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
