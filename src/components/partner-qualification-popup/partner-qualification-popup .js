import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class QualificationPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }
    componentDidMount = () => {
        let userData = this.props.qualificationInfo;
        this.setState({
            userData
        })
    }
    setDetails = (value, type) => {
        let { userData } = this.state;
        switch (type) {
            case 'annualIncome':
                userData.annualIncome = value
                break;
            case 'qualification':
                userData.qualification = value
                break;
           
        }
        this.setState({ userData })
        console.log(value)
    }
    saveDetails = () => {

        let { userData } = this.state;
        this.props.setQualificationInfo(userData);
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
                            <Form.Label column sm="3">Annual Income</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.annualIncome}
                                    onChange={(event) => { this.setDetails(event.target.value, 'annualIncome') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Educational Qualification</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.qualification}
                                    onChange={(event) => { this.setDetails(event.target.value, 'qualification') }}
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
export default QualificationPopup;