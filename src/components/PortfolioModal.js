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
                            <div className="modal-description">This is my portfolio page displaying some of
                            my previous work.  In itself this page is an application as it has taken many skills
                            to build.  I started with a blank page and have ended up with a beautiful site.  I
                            designed logos and layout entirely from scratch.  I built my own Webpack and used
                            many Bootstrap components to help out with the functionality of the site.  There are
                            two final pieces that I still need to complete.  First, I would like to switch the photos
                            of each application over to videos.  Second, I need to get this portfolio deployed for
                            the world to see!  (If you are viewing this online right now, it means that I was able to
                            accomplish my second goal).
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row>
                        <Col xs={9} className="tech">
                            <div><strong>Technologies Used: </strong>React, Bootstrap, Express, Digital Ocean, VIM, NGINX, Webpack, Babel</div>
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

export default PortfolioModal;