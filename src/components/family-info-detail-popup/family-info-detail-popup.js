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
            case 'Sisters':
                userData.Sisters = value
                break;
            case 'familyValue':
                userData.familyValue = value
                break;
            case 'Brothers':
                userData.Brothers = value
                break;
            case 'familyAnnualIncome':
                userData.familyAnnualIncome = value
                break;
            case 'nativeCity':
                userData.nativeCity = value
                break;
            case 'nativeState':
                userData.nativeState = value
                break; case 'nativeCountry':
                userData.nativeCountry = value
                break;
            case 'nativeState':
                userData.nativeState = value
                break; case 'FamilyStatus':
                userData.FamilyStatus = value
                break;

                break; case 'aboutFamily':
                userData.aboutFamily = value
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
                            <Form.Select>
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
                                <Form.Select>
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
                            <Form.Select>
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
                            <Form.Select>
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
                            <Form.Label column sm="3">NativeCountry</Form.Label>
                            <Col sm="9">                           
          <Form.Control type="country" placeholder="Native Country" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">native City</Form.Label>
                            <Col sm="9">
                            <Form.Control type="city" placeholder="Native City" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">nativeState</Form.Label>
                            <Col sm="9">
                            <Form.Control type="State" placeholder="nativeState " />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Family Value</Form.Label>
                            <Col sm="9">
                            <Form.Select>
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
                            <Form.Select>
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
                            <Form.Control type="text" placeholder="Family income" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">About Family</Form.Label>
                            <Col sm="9">
                            <Form.Control
                                    as="textarea"                                  
                                    rows={3}
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