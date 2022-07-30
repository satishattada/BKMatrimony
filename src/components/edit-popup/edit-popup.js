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
            basicInfo: this.props.basicInfo
        }
    }

    componentDidMount = () => {
        let basicInfo = this.props.basicInfo;
        this.setState({ basicInfo });
    }

    setDetails = (value, type) => {
        let { basicInfo } = this.state;
        switch (type) {
            case 'firstName':
                basicInfo.firstName = value;
                break;
            case 'lastName':
                basicInfo.lastName = value;
                break;
            case 'birth':
                basicInfo.birth = value;
                break;
            case 'age':
                basicInfo.age = value;
                break;
            case 'location':
                basicInfo.location = value;
                break;
            case 'gender':
                basicInfo.gender = value;
                break;
            case 'height':
                basicInfo.height = value;
                break;
            case 'maritalStatus':
                basicInfo.maritalStatus = value;
                break;
            case 'motherTongue':
                basicInfo.motherTongue = value;
            case 'gender':
                    basicInfo.gender = value;
        }
        this.setState({
            basicInfo
        });
    }

    saveDetails = () => {

        let { basicInfo } = this.state;
        this.props.setBasicInfo(basicInfo);
        // this.props.handleClose();
    }

    render() {
        const { show, handleClose, title } = this.props;
        const { basicInfo} = this.state;
        console.log(basicInfo)
        if(!show) {
            return;
        }
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
                                    defaultValue={basicInfo.firstName}
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
                                    defaultValue={basicInfo.lastName}
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
                                    defaultValue={basicInfo.birth}
                                    type="date"
                                    onChange={(event) => { this.setDetails(event.target.value, 'birth') }}

                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Age</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={basicInfo.age}
                                    onChange={(event) => { this.setDetails(event.target.value, 'age') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">location</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={basicInfo.location}
                                    onChange={(event) => { this.setDetails(event.target.value, 'location') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Gender</Form.Label>
                            <Col sm="9">
                                <Form.Check type="radio"
                                id={`male`} 
                                name={'gender'}
                                checked={basicInfo.gender === 'Male'? true: false}
                                aria-label="radio 1" label='Male' 
                                onChange={(event) => { this.setDetails('Male', 'gender') }}

                                    />
                                <Form.Check type="radio"
                                id={`female`} 
                                name={'gender'}
                                checked={basicInfo.gender === 'Female'? true: false}
                                aria-label="radio 1" label='Female' 
                                onChange={(event) => { this.setDetails('Female', 'gender') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Height</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={basicInfo.height}
                                    onChange={(event) => { this.setDetails(event.target.value, 'height') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Marital Status</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={basicInfo.maritalStatus}
                                    onChange={(event) => { this.setDetails(event.target.value, 'maritalStatus') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">MotherTongue</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={basicInfo.motherTongue}
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