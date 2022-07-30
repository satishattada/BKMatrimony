import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css'


class EditPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }

    componentDidMount = () => {
        let userData = this.props.basicInfo;
        this.setState({ userData });
    }

    setDetails = (value, type) => {
        let { userData } = this.state;
        switch (type) {
            case 'firstName':
                userData.name = value;
                break;
                case 'lastName':
                userData.name = value;
                break;
            case 'birth':
                userData.birth = value;
                break;
            case 'age':
                userData.age = value;
                break;
            case 'location':
                userData.location = value;
                break;
            case 'gender':
                userData.gender = value;
                break;
            case 'height':
                userData.height = value;
                break;
            case 'maritalStatus':
                userData.maritalStatus = value;
                break;
            case 'motherTongue':
                userData.motherTongue = value;
        }
        this.setState({
            userData
        });
    }

    saveDetails = () => {

        let { userData } = this.state;
        this.props.setBasicInfo(userData);
        // this.props.handleClose();
    }

    render() {
        const { show, handleClose, basicInfo, title } = this.props;
        let { userData } = this.state;
        return (<>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='email-heading' closeButton>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">First Name</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.firstName}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(event) => { this.setDetails(event.target.value, 'firstName') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Last Name</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.lastName}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(event) => { this.setDetails(event.target.value, 'lastName') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Date Of Birth</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.birth}
                                    type="date"
                                    onChange={(event) => { this.setDetails(event.target.value, 'birth') }}

                                />
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Age</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.age}
                                    onChange={(event) => { this.setDetails(event.target.value, 'age') }}
                                />
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">location</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.location}
                                    onChange={(event) => { this.setDetails(event.target.value, 'location') }}
                                />
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Gender</Form.Label>
                            <Col sm="9">
                            <Form.Check type="radio" aria-label="radio 1" label='Male'/>                          
                            <Form.Check type="radio" aria-label="radio 1" label='Female'/>                        
                            </Col>                   
                        </Form.Group><Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Height</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.height}
                                    onChange={(event) => { this.setDetails(event.target.value, 'height') }}
                                />
                            </Col>
                        </Form.Group><Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Marital Status</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.maritalStatus}
                                    onChange={(event) => { this.setDetails(event.target.value, 'maritalStatus') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">MotherTongue</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.motherTongue}
                                    onChange={(event) => { this.setDetails(event.target.value, 'motherTongue') }}
                                />
                            </Col>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <button className='close-button' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <Button className='save-button' variant="primary" onClick={this.saveDetails}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </>)
    }
}
export default EditPopup;