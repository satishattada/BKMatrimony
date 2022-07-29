import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class NativePopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }
    componentDidMount = () => {
        let userData = this.props.nativeInfo;
        this.setState({
            userData
        })
    }
    setDetails = (value, type) => {
        let { userData } = this.state;
        switch (type) {
            case 'location':
                userData.location = value
                break;
            case 'familyValue':
                userData.familyValue = value
                break;
                case 'familyStatus':
                    userData.familyStatus = value
                    break;
                    case 'familyIncome':
                        userData.familyIncome = value
                        break;
        }
        this.setState({ userData });
    }
    saveDetails = () => {

        let { userData } = this.state;
        this.props.setnativeInfo(userData);
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
                            <Form.Label column sm="3">Native Location</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.location}
                                    onChange={(event) => { this.setDetails(event.target.value, 'location') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Family Value</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.familyValue}
                                    onChange={(event) => { this.setDetails(event.target.value, 'familyValue') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Family Status</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.familyStatus}
                                    onChange={(event) => { this.setDetails(event.target.value, 'familyStatus') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Family Income</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.familyIncome}
                                    onChange={(event) => { this.setDetails(event.target.value, 'familyIncome') }}
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
export default NativePopup;