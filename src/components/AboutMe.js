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
                        <p>This is where I will need to write the story about who I am and
                        how I became a software engineer.  Hopefully this is interesting.
                        </p>
                        <p>I just want to check out how doing multiple paragraphs will look on the
                            screen.  Just testing things out to see if I can make this look great.
                        </p>
                        <p>In addition to talking about my past, I can talk about my life in New York
                            and why I prefer Austin.  Also, discussing a career change later in life
                            could be inspiring to others who are scared to make the change.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;