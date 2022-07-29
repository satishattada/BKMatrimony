import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class DesiredPartnerPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }
    componentDidMount = () => {
        let userData = this.props.desiredPartnerInfo;
        this.setState({
            userData
        })
    }
    setDetails = (value, type) => {
        let { userData } = this.state;
        switch (type) {
            case 'age':
                userData.age = value
                break;
            case 'maritalStatus':
                userData.maritalStatus = value
                break;
                case 'height':
                    userData.height = value
                    break;
                    case 'mangalik':
                        userData.mangalik = value
                        break;
                        case 'unmarriedBrother':
                            userData.specialCases = value
                            break;
                            case 'marriedBrother':
                                userData.specialCases = value
                                break;
        }
        this.setState({ userData });
    }
    saveDetails = () => {

        let { userData } = this.state;
        this.props.setDesiredPartnerInfo(userData);
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
                            <Form.Label column sm="3">Age</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.age}
                                    onChange={(event) => { this.setDetails(event.target.value, 'age') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Marital Status</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.maritalStatus}
                                    onChange={(event) => { this.setDetails(event.target.value, 'maritalStatus') }}
                                />
                            </Col>
                        </Form.Group>
                       
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Height </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.height}
                                    onChange={(event) => { this.setDetails(event.target.value, 'height') }}
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
                            <Form.Label column sm="3">special Cases</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.specialCases}
                                    onChange={(event) => { this.setDetails(event.target.value, 'specialCases') }}
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
export default DesiredPartnerPopup;