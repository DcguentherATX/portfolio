import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const FikeModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modalTitle">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Media Content Coming Soon</div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="modal-button" variant="dark" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FikeModal;