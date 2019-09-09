import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// images

import profilePic from '../../assets/images/david.jpg';

const AboutMe = (props) => {
    return (
        <div>
            <Container className="about-container">
                <Row>
                    <Col>
                        <img src={profilePic} alt="David Carl Guenther"></img>
                    </Col>
                    <Col>
                        About Me!
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutMe;