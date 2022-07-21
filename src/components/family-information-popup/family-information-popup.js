import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class FamilyPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }
    componentDidMount = () => {
        let userData = this.props.familyInfo;
        this.setState({
            userData
        })
    }
    setDetails = (value, type) => {
        let { userData } = this.state;
        switch (type) {
            case 'motherOccupation':
                userData.motherOccupation = value
                break;
            case 'fatherOccupation':
                userData.fatherOccupation = value
                break;
                case 'marriedSister':
                    userData.marriedSister = value
                    break;
                    case 'unmarriedSisiter':
                        userData.unmarriedSisiter = value
                        break;
                        case 'unmarriedBrother':
                            userData.unmarriedBrother = value
                            break;
                            case 'marriedBrother':
                                userData.marriedBrother = value
                                break;
        }
        this.setState({ userData })
        console.log(value)
    }
    saveDetails = () => {

        let { userData } = this.state;
        this.props.setFamilyInfo(userData);
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
                            <Form.Label column sm="3">Mother's occupation</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.motherOccupation}
                                    onChange={(event) => { this.setDetails(event.target.value, 'motherOccupation') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Father's occupation</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.fatherOccupation}
                                    onChange={(event) => { this.setDetails(event.target.value, 'fatherOccupation') }}
                                />
                            </Col>
                        </Form.Group>
                       
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Married Sister(s) </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.marriedSister}
                                    onChange={(event) => { this.setDetails(event.target.value, 'marriedSister') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">unmarried Sisiter</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.unmarriedSisiter}
                                    onChange={(event) => { this.setDetails(event.target.value, 'unmarriedSisiter') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">unmarried Brother</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.unmarriedBrother}
                                    onChange={(event) => { this.setDetails(event.target.value, 'unmarriedBrother') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">married Brother</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.marriedBrother}
                                    onChange={(event) => { this.setDetails(event.target.value, 'marriedBrother') }}
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
export default FamilyPopup;