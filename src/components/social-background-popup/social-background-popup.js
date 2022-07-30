import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class BackgroundPopup extends Component {
    constructor(props) {
        super(props)
    this.state={
        backgroundInfo:this.props.backgroundInfo
    }
    }
    componentDidMount=()=>{
        let backgroundInfo=this.props.backgroundInfo;
        this.setState({
            backgroundInfo
        })
    }
setDetails=(value,type)=>{
    let {backgroundInfo}=this.state;
    switch(type){
        case'religion':
           backgroundInfo.religion=value
        break;
        case'MotherTongue':
        backgroundInfo.MotherTongue=value
        break;
        case'caste':
        backgroundInfo.caste=value
        break;
        case'manglik':
        backgroundInfo.manglik=value
        break;
        case'gothram':
        backgroundInfo.ghotram=value
        break;

    }
    this.setState({backgroundInfo});
}
saveDetails = () => {

    let { backgroundInfo } = this.state;
    this.props.setBackgroundInfo(backgroundInfo);
    // this.props.handleClose();
}


    render() {
        const { show, handleClose, title} = this.props;
        let {backgroundInfo}=this.state;
        return (<>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='email-heading' closeButton>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Religion</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={backgroundInfo.religion}
                                    onChange={(event) => { this.setDetails(event.target.value, 'religion') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">MotherTongue</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={backgroundInfo.motherTongue}
                                    onChange={(event) => { this.setDetails(event.target.value, 'motherTongue') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Caste</Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={backgroundInfo.caste}
                                    onChange={(event) => { this.setDetails(event.target.value, 'caste') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Manglik  </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={backgroundInfo.manglik}
                                    onChange={(event) => { this.setDetails(event.target.value, 'manglik') }}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="3">Gothram </Form.Label>
                            <Col sm="9">
                                <Form.Control
                                    defaultValue={backgroundInfo.gothram}
                                    onChange={(event) => { this.setDetails(event.target.value, 'gothram') }}
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
export default BackgroundPopup;