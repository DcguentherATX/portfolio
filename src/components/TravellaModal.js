import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// images

import mainPage from '../../assets/images/Travella-Home-Screen.png';
import categories from '../../assets/images/Travella-Category-Page.png';
import timeline from '../../assets/images/Travella.png';
// import TraVideo from '../../assets/images/TravellaVideo.mov';

const TravellaModal = (props) => {
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
                            <img className="modal-image" src={mainPage} alt="Travella main page" />
                            <img className="modal-image" src={categories} alt="Travella category page" />
                            <img className="modal-image" src={timeline} alt="Travella itinerary image" />
                            {/* <embed src={TraVideo} autoStart="true" allowFullScreen />; */}

                        </Col>
                        <Col>
                            <div className="modal-description">
                                Travella is an application that focuses on building itineraries for travellers.
                                The home page is a cinemagraph that asks the user for their destination.  Once
                                this is entered, the user is redirected to the category page.  This shows options
                                for top spots, restaurants, nightlife, things to do, and nearby attractions.  The
                                user can select as many options as they would like.  Once finished, the user can view
                                their itinerary on the timeline page.  This displays the selected activities for the
                                day in a chronological order.
                        </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row>
                        <Col xs={9}>
                            <div className="tech"><strong>Technologies Used:</strong> React, Bootstrap, Axios, Express,
                        MongoDB, Mongoose, Webpack, Babel, Node.js</div>
                        </Col>
                        <Col className="modal-close">
                            <Button className="modal-button" variant="dark" onClick={props.handleClose}>
                                Close
                </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Footer>
        </Modal >
    );
}

export default TravellaModal;