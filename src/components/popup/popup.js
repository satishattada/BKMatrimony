import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import './style.css'

class Popup extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { show, handleClose, inputValue, title} = this.props;
        return (<>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='email-heading' closeButton>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <InputGroup className="mb-3">
        <Form.Control
            value={inputValue}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>

                </Modal.Body>
                <Modal.Footer>
                    <button className='close-button' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <Button className='save-button' variant="primary" onClick={handleClose}>
                        Save 
                    </Button>
                </Modal.Footer>
            </Modal>

        </>)
    }
}
export default Popup;