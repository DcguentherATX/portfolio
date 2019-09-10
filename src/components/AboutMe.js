import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// images

import profilePic from '../../assets/images/david.jpg';

const AboutMe = (props) => {
    return (
        <Container className="about-container">
            <Row>
                <Col lg={4} className="pic-container">
                    <img src={profilePic} alt="David Carl Guenther" className="profile-pic" id="about-me"></img>
                </Col>
                <Col lg={8} className="story-container">
                    <h3 className="about-header">About Me</h3>
                    <div className="about-story">
                        <p>My name is David and I am a recent transplant to Austin, TX from New York, NY.  I
                            am a full-stack software engineer that is passionate about UI design and developing
                            visually appealing applications.  This website contains a portfolio of my work, a
                            blog about my current events, and also links to connect on social media.
                        </p>Software development has become my passion and I live to code.  I find pleasure in building
                        stunning websites from a blank page and I enjoy the creativity involved in web design.  I have
                        worked on small teams of four to six developers to create production level applications of which
                        I have screenshots below.  I never thought that I would find my true calling when it comes to a
                        career, but now I know that I have found as a software engineer.
                        <p>
                        </p>
                        <p>I have been in Austin for a little under a year and am enjoying everything that the city
                            has to offer.  There is a fantastic food scene here, plenty of outdoor activities to enjoy,
                            and the culture is unbeatable.  My summer has ended with a trip to Hamilton pool, which is
                            absolutely stunning, as well as a day trip on Lake Travis enjoying the sun with some good
                            friends.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;