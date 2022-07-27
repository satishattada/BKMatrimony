import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';


class MediaPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }
    componentDidMount = () => {
        let userData = this.props.mediaInfo;
        this.setState({
            userData
        })
    }
    setDetails = (value, type) => {
        let { userData } = this.state;
        switch (type) {
            case 'qualification':
                userData.qualification = value
                break;
            case 'college':
                userData.college = value
                break;
            case 'workingWith':
                userData.workingWith = value
                break;
            case 'workingAs':
                userData.workingAs = value
                break;
            case 'workingAfterMarriage':
                userData.workingAfterMarriage = value
                break;
           

        }
        this.setState({ userData })
        console.log(value)
    }
    saveDetails = () => {

        let { userData } = this.state;
        this.props.setMediaInfo(userData);
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
                            <Form.Label column sm="3">Educational Qualification</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.qualification}
                                    onChange={(event) => { this.setDetails(event.target.value, 'qualification') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">College you attended</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.college}
                                    onChange={(event) => { this.setDetails(event.target.value, 'college') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Working With </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.workingWith}
                                    onChange={(event) => { this.setDetails(event.target.value, 'workingWith') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Working As</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.workingAs}
                                    onChange={(event) => { this.setDetails(event.target.value, 'workingAs') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Annual Income</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.annualIncome}
                                    onChange={(event) => { this.setDetails(event.target.value, 'annualIncome') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Work After Marriage</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.workingAfterMarriage}
                                    onChange={(event) => { this.setDetails(event.target.value, 'workingAfterMarriage') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Settle Down Abroad</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.settleDownAbroad}
                                    onChange={(event) => { this.setDetails(event.target.value, 'settleDownAbroad') }}
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
export default MediaPopup;