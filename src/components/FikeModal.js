import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// images

import fikeTop from '../../assets/images/Fike-Page-Top.png';
import fikeBottom from '../../assets/images/Fike-with-Footer.png';

const FikeModal = (props) => {
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
                            <img className="modal-image" src={fikeTop} alt="Fike header" />
                            <img className="modal-image" src={fikeBottom} alt="Fike footer" />
                        </Col>
                        <Col>
                            <div className="modal-description">
                                Fike is a single page shoe retail site that allows the user to browse
                                shoe options, makes recommendations based on selections, and provides
                                product reviews.  My main responsibility was managing the carousel at
                                the bottom of the page that recommended similar items to the user.  The
                                user could then click on any shoe in the carousel and this would reload
                                the main image for the page, providing additional details for the user
                                to review.  In addition, I developed an interactive footer with Bootstrap
                                that adjusted size and collapsed based on breakpoints.
                          </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row>
                        <Col xs={9}>
                            <div className="tech" ><strong>Technologies Used: </strong>React, Bootstrap, Axios, Express, MongoDB, Mongoose
                            AWS EC2, PM2, NGINX, Webpack, Babel, Node.js</div>
                        </Col>
                        <Col className="modal-close">
                            <Button className="modal-button" variant="dark" onClick={props.handleClose}>
                                Close
                </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Footer>
        </Modal>
    );
}

export default FikeModal;