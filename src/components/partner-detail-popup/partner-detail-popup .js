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
            partnerDetailInfo: this.props.partnerDetailInfo
        }
    }
    componentDidMount = () => {
        let partnerDetailInfo = this.props.partnerDetailInfo;
        this.setState({
            partnerDetailInfo
        })
    }
    setDetails = (value, type) => {
        let { partnerDetailInfo } = this.state;
        switch (type) {
            case 'religion':
                partnerDetailInfo.religion = value
                break;
            case 'motherTongue':
                partnerDetailInfo.motherTongue = value
                break;
            case 'caste':
                partnerDetailInfo.caste = value
                break;
            case 'manglik':
                partnerDetailInfo.manglik = value
                break;
            case 'gothram':
                partnerDetailInfo.gothram = value
                break;
            case 'aboutPartner':
                partnerDetailInfo.aboutPartner = value
                break;
            case 'specialCases':
                partnerDetailInfo.specialCases = value
                break;
            case 'diet':
                partnerDetailInfo.diet = value
                break;
            case 'annualIncome':
                partnerDetailInfo.annualIncome = value
                break;
            case 'qualification':
                partnerDetailInfo.qualification = value
                break;
            case 'stateOfResidence':
                partnerDetailInfo.stateOfResidence = value
                break;
            case 'cityOfResidence':
                partnerDetailInfo.cityOfResidence = value
                break;
        }
        this.setState({ partnerDetailInfo });
    }
    saveDetails = () => {

        let { partnerDetailInfo } = this.state;
        this.props.setPartnerDetailInfo(partnerDetailInfo);
        // this.props.handleClose();
    }


    render() {
        const { show, handleClose, title } = this.props;
        let { partnerDetailInfo } = this.state;
        console.log(partnerDetailInfo)
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
                            <Form.Label column sm="3">Age</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.age}
                                    onChange={(event) => { this.setDetails(event.target.value, 'age') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Height</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.height}
                                    onChange={(event) => { this.setDetails(event.target.value, 'height') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Religion</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.religion}
                                    onChange={(event) => { this.setDetails(event.target.value, 'religion') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Mother Tongue </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.motherTongue}
                                    onChange={(event) => { this.setDetails(event.target.value, 'motherTongue') }}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Caste </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.caste}
                                    onChange={(event) => { this.setDetails(event.target.value, 'caste') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Marital Status</Form.Label>
                            <Col sm="9">
                                <Form.Select defaultValue={partnerDetailInfo.maritalStatus}
                                    onChange={(event) => { this.setDetails(event.target.value, 'maritalStatus') }}>
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
                                    defaultValue={partnerDetailInfo.countryOfResidence}
                                    onChange={(event) => { this.setDetails(event.target.value, 'countryOfResidence') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">State of Residence</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.stateOfResidence}
                                    onChange={(event) => { this.setDetails(event.target.value, 'stateOfResidence') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">City of Residence</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.cityOfResidence}
                                    onChange={(event) => { this.setDetails(event.target.value, 'cityOfResidence') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Manglik</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.manglik}
                                    onChange={(event) => { this.setDetails(event.target.value, 'manglik') }}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Gothram</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.gothram}
                                    onChange={(event) => { this.setDetails(event.target.value, 'gothram') }}
                                />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Educational Qualification</Form.Label>
                            <Col sm="9">

                                <Form.Control type="text"
                                    defaultValue={partnerDetailInfo.qualification}
                                    onChange={(event) => { this.setDetails(event.target.value, 'qualification') }}
                                />

                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Annual Income</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.annualIncome}
                                    onChange={(event) => { this.setDetails(event.target.value, 'annualIncome') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Special Cases</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={partnerDetailInfo.specialCases}
                                    onChange={(event) => { this.setDetails(event.target.value, 'specialCases') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Diet</Form.Label>
                            <Col sm="9">
                                <Form.Select
                                    defaultValue={partnerDetailInfo.diet}
                                    onChange={(event) => { this.setDetails(event.target.value, 'diet') }}>
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
                                    defaultValue={partnerDetailInfo.aboutPartner}
                                    onChange={(event) => { this.setDetails(event.target.value, 'aboutPartner') }}
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