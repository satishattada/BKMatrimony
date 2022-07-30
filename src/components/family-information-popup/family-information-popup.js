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
            familyInfo: this.props.familyInfo
        }
    }
    componentDidMount = () => {
        let familyInfo = this.props.familyInfo;
        this.setState({
            familyInfo
        })
    }
    setDetails = (value, type) => {
        let { familyInfo } = this.state;
        switch (type) {
            case 'motherOccupation':
                familyInfo.motherOccupation = value
                break;
            case 'fatherOccupation':
                familyInfo.fatherOccupation = value
                break;
                case 'marriedSister':
                    familyInfo.marriedSister = value
                    break;
                    case 'unmarriedSisiter':
                        familyInfo.unmarriedSisiter = value
                        break;
                        case 'unmarriedBrother':
                            familyInfo.unmarriedBrother = value
                            break;
                            case 'marriedBrother':
                                familyInfo.marriedBrother = value
                                break;
        }
        this.setState({ familyInfo })
        console.log(value)
    }
    saveDetails = () => {

        let { familyInfo } = this.state;
        this.props.FamilyInfo(familyInfo);
        // this.props.handleClose();
    }


    render() {
        const { show, handleClose, title } = this.props;
        let { familyInfo } = this.state;
        console.log(familyInfo)
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
                            <Form.Label column sm="3">Mother's occupation</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={familyInfo.motherOccupation}
                                    onChange={(event) => { this.setDetails(event.target.value, 'motherOccupation') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Father's occupation</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={familyInfo.fatherOccupation}
                                    onChange={(event) => { this.setDetails(event.target.value, 'fatherOccupation') }}
                                />
                            </Col>
                        </Form.Group>
                       
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Married Sister(s) </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={familyInfo.marriedSister}
                                    onChange={(event) => { this.setDetails(event.target.value, 'marriedSister') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">unmarried Sisiter</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={familyInfo.unmarriedSisiter}
                                    onChange={(event) => { this.setDetails(event.target.value, 'unmarriedSisiter') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">unmarried Brother</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={familyInfo.unmarriedBrother}
                                    onChange={(event) => { this.setDetails(event.target.value, 'unmarriedBrother') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">married Brother</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={familyInfo.marriedBrother}
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