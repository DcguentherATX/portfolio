import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const ApplicationModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modalTitle">
                    <div>Modal Title</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Modal Body</div>
            </Modal.Body>
            <Modal.Footer>
                <div>Modal Footer</div>
                <Button variant="primary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ApplicationModal;