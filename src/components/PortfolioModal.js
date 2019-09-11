import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// images

import about from '../../assets/images/Port-Top.png';
import applications from '../../assets/images/Port-App.png';
import blog from '../../assets/images/Port-Blog.png';

const PortfolioModal = (props) => {
    return (
        <Modal show={props.show} onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="modalTitle">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={7}>
                            <img className="modal-image" src={about} alt="DCG about section" />
                            <img className="modal-image" src={applications} alt="DCG applications" />
                            <img className="modal-image" src={blog} alt="DCG blog" />
                        </Col>
                        <Col>
                            <div className="modal-description"></div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button className="modal-button" variant="dark" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PortfolioModal;