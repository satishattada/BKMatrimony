import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css'
import FileBase64 from 'react-file-base64';

class AddMediaPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMedia: null,
        }

    }
    //       // Callback~
    getFiles = (file) => {
        console.log(file);
        // const profilePhoto = {
        //     image: {
        //         mime: "image/jpeg",
        //         data: file.base64
        //     }
        // };

        this.setState({ selectedMedia: file.base64 });
    }

    updateMedia = () => {
        const { selectedMedia } = this.state;

        this.props.updateMedia(selectedMedia);
    }
    render() {
        const { show, handleClose, title } = this.props;
        const { selectedMedia } = this.state;
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='email-heading' closeButton>
                    <Modal.Title >{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {selectedMedia &&
                        <img className="profile-female-image" src={selectedMedia} alt="" />
                    }

                    <FileBase64
                        multiple={false}
                        onDone={this.getFiles.bind(this)} />

                </Modal.Body>
                <Modal.Footer>
                    <button className='close-button' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <Button className='save-button' variant="primary" onClick={this.updateMedia}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>)
    }
}
export default AddMediaPopup;