import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TravellaModal from './TravellaModal';
import StationModal from './StationModal';
import FikeModal from './FikeModal';
import PortfolioModal from './PortfolioModal';


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
            showTravellanModal: false,
            showStationModal: false,
            showFikeModal: false,
            showPortfolioModal: false
        }

        this.handleShowTravellaModal = this.handleShowTravellaModal.bind(this);
        this.handleCloseTravellaModal = this.handleCloseTravellaModal.bind(this);
        this.handleShowStationModal = this.handleShowStationModal.bind(this);
        this.handleCloseStationModal = this.handleCloseStationModal.bind(this);
        this.handleShowFikeModal = this.handleShowFikeModal.bind(this);
        this.handleCloseFikeModal = this.handleCloseFikeModal.bind(this);
        this.handleShowPortfolioModal = this.handleShowPortfolioModal.bind(this);
        this.handleClosePortfolioModal = this.handleClosePortfolioModal.bind(this);
    };

    handleShowTravellaModal() {
        this.setState({ showTravellaModal: true });
    }

    handleCloseTravellaModal() {
        this.setState({ showTravellaModal: false });
    }

    handleShowStationModal() {
        this.setState({ showStationModal: true });
    }

    handleCloseStationModal() {
        this.setState({ showStationModal: false });
    }

    handleShowFikeModal() {
        this.setState({ showFikeModal: true });
    }

    handleCloseFikeModal() {
        this.setState({ showFikeModal: false });
    }

    handleShowPortfolioModal() {
        this.setState({ showPortfolioModal: true });
    }

    handleClosePortfolioModal() {
        this.setState({ showPortfolioModal: false });
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
                                    <Button variant="outline-light" className="btn" onClick={this.handleShowTravellaModal}>Learn More</Button>
                                    <TravellaModal show={this.state.showTravellaModal} onHide={this.handleCloseTravellaModal} handleClose={this.handleCloseApplicationModal} title="Travella" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="project pairing-station">
                            <Card className="card">
                                <Card.Img variant="top" className="project-image" src={station} />
                                <Card.Body>
                                    <Card.Title className="project-title">The Pairing Station</Card.Title>
                                    <Button variant="outline-light" onClick={this.handleShowStationModal}>Learn More</Button>
                                    <StationModal show={this.state.showStationModal} onHide={this.handleCloseStationModal} handleClose={this.handleCloseStationModal} title="The Pairing Station" />
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
                                    <Button variant="outline-light" onClick={this.handleShowFikeModal}>Learn More</Button>
                                    <FikeModal show={this.state.showFikeModal} onHide={this.handleCloseFikeModal} handleClose={this.handleCloseFikeModal} title="Fike" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="project portfolio">
                            <Card className="card">
                                <Card.Img variant="top" className="project-image" src={portfolio} />
                                <Card.Body>
                                    <Card.Title className="project-title">DCG Portfolio</Card.Title>
                                    <Button variant="outline-light" onClick={this.handleShowPortfolioModal}>Learn More</Button>
                                    <PortfolioModal show={this.state.showPortfolioModal} onHide={this.handleClosePortfolioModal} handleClose={this.handleClosePortfolioModal} title="DCG Portfolio" />
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