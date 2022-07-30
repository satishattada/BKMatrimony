import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './style.css'

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state={
            value:'',
        }

    }
    submitData=(type)=>{
        const {value}=this.state;
        this.props.submitPopupData(value,type)
    }
    changeValue=(e)=>{
console.log(e.target.value)
this.setState({
    value:e.target.value,
})
    }
    render() {
        const { show, handleClose, inputValue, title,type  } = this.props;
        return (<>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='email-heading' closeButton>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <Form.Control
                        type={type}
                            defaultValue={inputValue}
                            onChange={this.changeValue}
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>

                </Modal.Body>
                <Modal.Footer>
                    <button className='close-button' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <Button className='save-button' variant="primary" onClick={()=>{this.submitData(type)}}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </>)
    }
}
export default Popup;