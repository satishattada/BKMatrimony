
import React, { Component } from "react";
import './styles.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormSelect from "react-bootstrap/esm/FormSelect";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="register">
          <h3 className="register-heading">Registeration </h3>
       <Form>
       <Form.Group as={Row} className="mb-4" controlId="formBasicFirstName">
        <Form.Label column sm="4">First Name</Form.Label>
        <Col sm="6">
        <Form.Control type="text" placeholder="first name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4" controlId="formBasicLastName">
        <Form.Label column sm="4">Last Name</Form.Label>
        <Col sm="6">
        <Form.Control type="text" placeholder="last name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-4" controlId="formBasicEmail">
        <Form.Label column sm="4">Email address</Form.Label>
        <Col sm="6">
        <Form.Control type="email" placeholder="Enter email" />
        </Col>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formBasicPassword">
        <Form.Label column sm="4">Create Password</Form.Label>
        <Col sm="6">
        <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
     
      <Form.Group as={Row} className="mb-4" controlId="formBasicProfileCreatingFor">
        <Form.Label column sm="4">Profile Creating For</Form.Label>
        <Col sm="6">
        <FormSelect>
          <option>Select</option>
          <option>Self</option>
          <option>sister</option>
          <option>brother</option>
          <option>friend</option>
          <option>relative</option>
          <option>son</option>
          <option>daughter</option>
    
        </FormSelect>
        </Col>
      </Form.Group>
      
      <Form.Group as={Row}  className="mb-4" controlId="formBasicDateOfBirth">
        <Form.Label column sm="4">Date Of Birth</Form.Label>
        <Col sm="6">
        <Form.Control type="date" placeholder="dd/mm/yyy" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}  className="mb-4" controlId="formBasicGender">
        <Form.Label column sm="4">Gender</Form.Label>
        
        <Col sm="4">
        <Form.Check type="radio" aria-label="radio 2" />
        </Col>
        <Col sm="4">
        <Form.Check type="radio" aria-label="radio 2" />
        </Col>
      </Form.Group>
      <Button className="reg" type="submit">
        Submit
      </Button>
    </Form>
    </div>
      </div>
    );
  }
}

export default Register;





























