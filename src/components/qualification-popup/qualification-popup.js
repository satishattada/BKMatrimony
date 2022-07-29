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
        userData:''
    }
    }
    componentDidMount=()=>{
        let userData=this.props.careerInfo;
        this.setState({
            userData
        })
    }
setDetails=(value,type)=>{
    let {userData}=this.state;
    switch(type){
        case'education':
           userData.education=value
        break;
        case'college':
        userData.college=value
        break;
        case'working':
        userData.working=value
        break;
        case'settleDownAbroad':
        userData.settleDoenAbroad=value
        break;
        case'workAfterMarriage':
        userData.workAfterMarriage=value
        break;

    }
    this.setState({userData});
}
saveDetails = () => {

    let { userData } = this.state;
    this.props.setCareerInfo(userData);
    // this.props.handleClose();
}


    render() {
        const { show, handleClose, careerInfo, title} = this.props;
        let {userData}=this.state;
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
                                    defaultValue={userData.education}
                                    onChange={(event) => { this.setDetails(event.target.value, 'education') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">College/university</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.college}
                                    onChange={(event) => { this.setDetails(event.target.value, 'college') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Working</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.working}
                                    onChange={(event) => { this.setDetails(event.target.value, 'working') }}
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
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Work After Marriage</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={userData.workAfterMarriage}
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