import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class LocationPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locationInfo: this.props.locationInfo
        }
    }
    componentDidMount = () => {
        let locationInfo = this.props.locationInfo;
        this.setState({
            locationInfo
        })
    }
    setDetails = (value, type) => {
        let { locationInfo } = this.state;
        switch (type) {
            case 'countryOfResidence':
                locationInfo.countryOfResidence = value
                break;
            case 'location':
                locationInfo.location = value
                break;
        }
        this.setState({ locationInfo });
    }
    saveDetails = () => {

        let { locationInfo } = this.state;
        this.props.setLocationInfo(locationInfo);
        // this.props.handleClose();
    }


    render() {
        const { show, handleClose, title } = this.props;
        let { locationInfo } = this.state;
        return (<>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='email-heading' closeButton>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">countryOfResidence</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={locationInfo.countryOfResidence}
                                    onChange={(event) => { this.setDetails(event.target.value, 'countryOfResidence') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Location/City</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={locationInfo.location}
                                    onChange={(event) => { this.setDetails(event.target.value, 'location') }}
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
export default LocationPopup;