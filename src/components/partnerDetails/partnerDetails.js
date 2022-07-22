import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';


class BasicPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }
    componentDidMount = () => {
        let userData = this.props.basicInfo;
        this.setState({
            userData
        })
    }
    setDetails = (value, type) => {
        let { userData } = this.state;
        switch (type) {
            case 'aboutYourself':
                userData.aboutYourself = value
                break;
            case 'height':
                userData.height = value
                break;
            case 'maritalStatus':
                userData.maritalStatus = value
                break;
            case 'motherTongue':
                userData.motherTongue = value
                break;
            case 'religion':
                userData.religion = value
                break;
            case 'manglik':
                userData.manglik = value
                break;
            case 'caste':
                userData.caste = value
                break;
            case 'specialCases':
                userData.specialCases = value
                break;
            case 'country':
                userData.specialCases = value
                break;
            case 'state':
                userData.specialCases = value
                break;
            case 'city':
                userData.specialCases = value
                break;

        }
        this.setState({ userData })
        console.log(value)
    }
    saveDetails = () => {

        let { userData } = this.state;
        this.props.setBasicInfo(userData);
        // this.props.handleClose();
    }


    render() {
        const { show, handleClose, title } = this.props;
        let { userData } = this.state;
        return (<>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='email-heading' closeButton>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">About Yourself</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    as="textarea"
                                    defaultValue={userData.aboutYourself}
                                    rows={3}
                                    onChange={(event) => { this.setDetails(event.target.value, 'aboutYourself') }}
                                />
                                {/* <Form.Control
                                    defaultValue={userData.aboutYourself}
                                    onChange={(event) => { this.setDetails(event.target.value, 'aboutYourself') }}
                                /> */}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Height</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.height}
                                    onChange={(event) => { this.setDetails(event.target.value, 'height') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Marital Statusy</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.maritalStatus}
                                    onChange={(event) => { this.setDetails(event.target.value, 'maritalStatus') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Mother Tongue</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.motherTongue}
                                    onChange={(event) => { this.setDetails(event.target.value, 'motherTongue') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Religion</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.religion}
                                    onChange={(event) => { this.setDetails(event.target.value, 'religion') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Caste</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.caste}
                                    onChange={(event) => { this.setDetails(event.target.value, 'caste') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Manglik</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.manglik}
                                    onChange={(event) => { this.setDetails(event.target.value, 'manglik') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Special Cases</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.specialCases}
                                    onChange={(event) => { this.setDetails(event.target.value, 'specialCases') }}
                                />
                            </Col>
                        </Form.Group>
                        {/* <Form.Group as={Row} className="mb-3">
                            <Form.Header column sm="3">Location</Form.Header> 
                            </Form.Group> */}
                        {/* <Form.Header>Location</Form.Header> */}
                        <h4>location</h4>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Country </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.country}
                                    onChange={(event) => { this.setDetails(event.target.value, 'country') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">State</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.state}
                                    onChange={(event) => { this.setDetails(event.target.value, 'state') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">City</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.city}
                                    onChange={(event) => { this.setDetails(event.target.value, 'city') }}
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
export default BasicPopup;