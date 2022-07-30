import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class FamilyInfoDetailPopup extends Component {
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
            case 'sisters':
                familyInfo.sisters = value
                break;
            case 'familyValue':
                familyInfo.familyValue = value
                break;
            case 'brothers':
                familyInfo.brothers = value
                break;
            case 'income':
                familyInfo.income = value
                break;
            case 'city':
                familyInfo.city = value
                break;
            case 'value':
                familyInfo.value = value
                break;

            case 'country':
                familyInfo.country = value
                break;
            case 'state':
                familyInfo.state = value
                break;
            case 'status':

                familyInfo.status = value
                break;

            case 'aboutFamily':
                familyInfo.aboutFamily = value
                break;
        }
        this.setState({ familyInfo })
        console.log(value)
    }
    saveDetails = () => {
        // let familyInfo = this.props.familyInfo;
        // this.setState({
        //     familyInfo
        // })

        let { familyInfo } = this.state;

        this.props.setFamilyInfo(familyInfo);
        // this.props.handleClose();
    }

    render() {
        const { show, handleClose, title } = this.props;
        let { familyInfo } = this.state;
        console.log(familyInfo)
        if (!show) {
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
                            <Form.Label column sm="3">Mother occupation</Form.Label>
                            <Col sm="9">
                                <Form.Select
                                    defaultValue={familyInfo.motherOccupation}
                                    onChange={(event) => { this.setDetails(event.target.value, 'motherOccupation') }}>
                                    <option>select</option>
                                    <option>Business</option>
                                    <option>Employed-Govt</option>
                                    <option>Employed-Private</option>
                                    <option>Employed-Psu</option>
                                    <option>not-Employed</option>
                                    <option>Passed Away</option>
                                    <option>Retired</option>
                                    <option>Professional</option>
                                </Form.Select>

                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Father's occupation</Form.Label>
                            <Col sm="9">
                                <Form.Select defaultValue={familyInfo.fatherOccupation}
                                    onChange={(event) => { this.setDetails(event.target.value, 'fatherOccupation') }}>
                                    <option>select</option>
                                    <option>Business</option>
                                    <option>Employed-Govt</option>
                                    <option>Employed-Private</option>
                                    <option>Employed-Psu</option>
                                    <option>not-Employed</option>
                                    <option>Passed Away</option>
                                    <option>Retired</option>
                                    <option>Professional</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Sister(s) </Form.Label>
                            <Col sm="9">
                                <Form.Select
                                    defaultValue={familyInfo.brothers}
                                    onChange={(event) => { this.setDetails(event.target.value, 'brothers') }}>
                                    <option>select</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Brother(s)</Form.Label>
                            <Col sm="9">
                                <Form.Select defaultValue={familyInfo.sisters}
                                    onChange={(event) => { this.setDetails(event.target.value, 'sisters') }}>
                                    <option>select</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Native Country</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Native Country"
                                    defaultValue={familyInfo.country}
                                    onChange={(event) => { this.setDetails(event.target.value, 'country') }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Native City</Form.Label>
                            <Col sm="9">
                                <Form.Control type="city" placeholder="Native City"
                                    defaultValue={familyInfo.city}
                                    onChange={(event) => { this.setDetails(event.target.value, 'city') }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Native State</Form.Label>
                            <Col sm="9">
                                <Form.Control type="State" placeholder="nativeState "
                                    defaultValue={familyInfo.state}
                                    onChange={(event) => { this.setDetails(event.target.value, 'state') }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Family Value</Form.Label>
                            <Col sm="9">
                                <Form.Select
                                    defaultValue={familyInfo.value}
                                    onChange={(event) => { this.setDetails(event.target.value, 'value') }}>
                                    <option>select</option>
                                    <option>Liberal</option>
                                    <option>moderate</option>
                                    <option>Moral</option>
                                    <option>Traditional</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Family Status</Form.Label>
                            <Col sm="9">
                                <Form.Select
                                    defaultValue={familyInfo.status}
                                    onChange={(event) => { this.setDetails(event.target.value, 'status') }}>
                                    <option>select</option>
                                    <option>Affluent Class</option>
                                    <option>middle Class</option>
                                    <option>Upper Middleclass</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Family Income</Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Family income"
                                    defaultValue={familyInfo.income}
                                    onChange={(event) => { this.setDetails(event.target.value, 'income') }} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">About Family</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    defaultValue={familyInfo.aboutFamily}
                                    onChange={(event) => { this.setDetails(event.target.value, 'aboutFamily') }}
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
export default FamilyInfoDetailPopup;