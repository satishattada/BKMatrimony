import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class CareerPopup extends Component {
    constructor(props) {
        super(props)
    this.state={
        careerInfo: this.props.careerInfo
    }
    }
    componentDidMount=()=>{
        let careerInfo = this.props.careerInfo;
        this.setState({ careerInfo });
    }
setDetails=(value,type)=>{
    let {careerInfo}=this.state;
    switch(type){
        case'education':
           careerInfo.education=value
        break;
        case'college':
        careerInfo.college=value
        break;
        case'working':
        careerInfo.working=value
        break;
        case'settleDownAbroad':
        careerInfo.settleDoenAbroad=value
        break;
        case'workAfterMarriage':
        careerInfo.workAfterMarriage=value
        break;

    }
    this.setState({careerInfo});
}
saveDetails = () => {

    let { careerInfo } = this.state;
    this.props.setCareerInfo(careerInfo);
    // this.props.handleClose();
}


    render() {
        const { show, handleClose,  title} = this.props;
        let {careerInfo}=this.state;
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
                            <Form.Label column sm="3">Education</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={careerInfo.education}
                                    onChange={(event) => { this.setDetails(event.target.value, 'education') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">College/university</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={careerInfo.college}
                                    onChange={(event) => { this.setDetails(event.target.value, 'college') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Working</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={careerInfo.working}
                                    onChange={(event) => { this.setDetails(event.target.value, 'working') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Settle Down Abroad</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={careerInfo.settleDownAbroad}
                                    onChange={(event) => { this.setDetails(event.target.value, 'settleDownAbroad') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Work After Marriage</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={careerInfo.workAfterMarriage}
                                    onChange={(event) => { this.setDetails(event.target.value, 'workAfterMarriage') }}
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
export default CareerPopup;