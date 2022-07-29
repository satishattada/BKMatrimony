import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class PartnerDetailPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }
    componentDidMount = () => {
        let userData = this.props.partnerDetailInfo;
        this.setState({
            userData
        })
    }
    setDetails = (value, type) => {
        let { userData } = this.state;
        switch (type) {
            case 'religion':
                userData.religion = value
                break;
            case 'MotherTongue':
                userData.MotherTongue = value
                break;
                case 'Caste':
                    userData.Caste = value
                    break;
                    case 'manglik':
                        userData.Manglik = value
                        break;
                        case 'gothram':
                            userData.gothram = value
                            break;
                            case 'aboutPartner':
                                userData.aboutPartner = value
                                break;
                                case 'specialCases':
                            userData.gothram = value
                            break;
                            case 'diet':
                            userData.diet = value
                            break;
                            case 'annualIncome':
                            userData.annualIncome = value
                            break;
                            case 'education':
                            userData.education = value
                            break;
                           
        }
        this.setState({ userData });
    }
    saveDetails = () => {

        let { userData } = this.state;
        this.props.setPartnerDetailInfo(userData);
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
                            <Form.Label column sm="3">Height</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.height}
                                    onChange={(event) => { this.setDetails(event.target.value, 'height') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">religion</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.religion}
                                    onChange={(event) => { this.setDetails(event.target.value, 'religion') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">MotherTongue </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.MotherTongue}
                                    onChange={(event) => { this.setDetails(event.target.value, 'MotherTongue') }}
                                />
                            </Col>
                        </Form.Group>
                       
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Caste </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.Caste}
                                    onChange={(event) => { this.setDetails(event.target.value, 'Caste') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">maritalStatus</Form.Label>
                            <Col sm="9">
                            <Form.Select>
                                    <option>select</option>
                                    <option>Doesn't matter</option>
                                    <option>Never Married</option>
                                    <option>Annulled</option>
                                    <option>Awaiting Divorce</option>
                                    <option>Divorced</option>
                                    <option>Widowed</option>
                                </Form.Select>
                                
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Country of Residence</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.CountryOfResidence  }
                                    onChange={(event) => { this.setDetails(event.target.value, 'CountryOfResidence') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">State of Residence</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.StateOfResidence  }
                                    onChange={(event) => { this.setDetails(event.target.value, 'StateOfResidence') }}
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
                            <Form.Label column sm="3">gothram</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.gothram}
                                    onChange={(event) => { this.setDetails(event.target.value, 'gothram') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">gothram</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.gothram}
                                    onChange={(event) => { this.setDetails(event.target.value, 'gothram') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">gothram</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.gothram}
                                    onChange={(event) => { this.setDetails(event.target.value, 'gothram') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Educational Qualification</Form.Label>
                            <Col sm="9">
                                
                                    <Form.Control type="text"  />
                                
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">annualIncome</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.annualIncome}
                                    onChange={(event) => { this.setDetails(event.target.value, 'annualIncome') }}
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
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Diet</Form.Label>
                            <Col sm="9">
                            <Form.Select>
                                    <option>select</option>
                                    <option>Non-veg</option>
                                    <option>Veg</option>
                                    <option>Both</option>                                                                    
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">About Partner</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                as="textarea"  
                                   Row={3}
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
export default PartnerDetailPopup;