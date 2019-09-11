import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// images

import top from '../../assets/images/Station-Top.png';
import middle from '../../assets/images/Station-Middle.png';
import bottom from '../../assets/images/Station-Bottom.png';

const StationModal = (props) => {
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
                            <img className="modal-image" src={top} alt="top of Pairing Station page" />
                            <img className="modal-image" src={middle} alt="middle of Pairing Station page" />
                            <img className="modal-image" src={bottom} alt="bottom of Pairing Station page" />
                        </Col>
                        <Col>
                            <div className="modal-description">
                                The Pairing Station is application that helps you plan your next meal and pair that
                                meal with some delicious wine.  The user can enter an ingredient into the search bar.
                                This pings an API that returns a list of meal options based on that ingredient.  The
                                first result becomes the main recipe with the remaining recipes listed on the carousel
                                below.  Simultaneously, the wine database is hit with the ingredient request and sends
                                a wine suggestion as a pairing for the meal.
                          </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row>
                        <Col className="tech" xs={9}>
                            <div><strong>Technologies Used:</strong> React, Bootstrap, Axios, Express, MongoDB, Mongoose,
                            Webpack, Babel, Node.js, Javascript, HTML, CSS</div>
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

export default StationModal;