import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// images

import travella from '../../assets/images/Travella.png';
import station from '../../assets/images/Pairing-Station.png';
import fike from '../../assets/images/Fike.png';
import portfolio from '../../assets/images/Portfolio.png';
import applications from '../../assets/images/Applications.png';

class Projects extends React.Component {
    constructor() {
        super();

        this.state = {
            showApplicationModal: false
        }

        this.handleShowApplicationModal = this.handleShowApplicationModal.bind(this);
        this.handleCloseApplicationModal = this.handleCloseApplicationModal.bind(this);


    };

    handleShowApplicationModal() {
        this.setState({ showApplicationModal: true });
    }

    handleCloseApplicationModal() {
        this.setState({ showApplicationModal: false });
    }

    render() {
        return (
            <div className="project-container" id="applications">
                {/* <h3 className="project-header">Applications</h3> */}
                <img src={applications} alt="applications logo" className="applications" />
                <Container className="inner-project-container">
                    <Row className="top-row">
                        <Col className="project travella">
                            <Card className="card">
                                <Card.Img variant="top" className="project-image" src={travella} />
                                <Card.Body className="project-info">
                                    <Card.Title className="project-title">Travella</Card.Title>
                                    <Button variant="outline-light" className="btn">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="project pairing-station">
                            <Card className="card">
                                <Card.Img variant="top" className="project-image" src={station} />
                                <Card.Body>
                                    <Card.Title className="project-title">The Pairing Station</Card.Title>
                                    <Button variant="outline-light">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="bottom-row">
                        <Col className="project fike">
                            <Card className="card">
                                <Card.Img variant="top" className="project-image" src={fike} />
                                <Card.Body>
                                    <Card.Title className="project-title">Fike</Card.Title>
                                    <Button variant="outline-light">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="project portfolio">
                            <Card className="card">
                                <Card.Img variant="top" className="project-image" src={portfolio} />
                                <Card.Body>
                                    <Card.Title className="project-title">DCG Portfolio</Card.Title>
                                    <Button variant="outline-light">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Projects;