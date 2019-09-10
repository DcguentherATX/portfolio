import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// images

import blog from '../../assets/images/Blog-Logo.png'

const Blog = (props) => {
    return (
        <div className="blog-container" id="blog">
            <Container className="inner-blog-container">
                <Row>
                    <Col lg={2}>
                        <img className="blog-logo" src={blog} alt="blog-logo" />
                    </Col>
                    <Col lg={10} className="blog-entries">
                        {/* <h3 className="blog-header">Blog</h3> */}
                        <div className="date">Monday, September 9, 2019</div>
                        <div className="entry">
                            <p> Hello World!  This is my first blog on my brand new portfolio website.  I decided to give
                                myself a bit of a design challenge and wanted to see how far I could get in an 8 hour period
                                designing a portfolio site from scratch.  At the end of the day, I'm pretty satisfied with the
                                results, but I did have some interesting struggles along the way.
            </p>
                            <p>Starting with a blank page used to be pretty intimidating when I first started learning how to
                                be a software engineer.  At this point, I'm much more comfortable in getting started from ground
                                zero.  I was able to get my webpack and babel up and running within thirty minutes, added a couple
                                script tags, and by the end of the first hour, I had built a server with express and had a basic
                                display on the screen.  I vividly remember the struggles I had when I first started out with webpack,
                                and I am excited about the progress I have seen.  Once that was complete, I created a new Github repo
                                and connected my portfolio application.  Remember, commit early and commit often folks!
            </p>
                            <p>After the initial webpack setup was completed, I switched over to building my file structure and
                                constructing a skeleton of a single page app.  I then set aside some time to sketch page layout and
                                design options.  From there, I created the DCG logo for the site and pushed full steam ahead.  I used
                                React to build the front end with the help of React Bootstrap, which created the easy grid layout and
                                resizing elements as the size of the window adjusts.  Perhaps my biggest challenge was implementing
                                the dropdown inside the navigation bar at the top.
                            </p>

                            <p>My development strategy was to work from the top down, starting with the navigation bar, then the
                                about section, followed by the applications, and finishing with the footer with social media links.  I
                                spent some additional time pulling up images and creating logos for each section, but overall, the day passed smoothly.
                                Although I am satisfied with my accomplishments for the day, I still want to work on a couple things.
                                Resizing with Bootstrap is giving me some trouble, especially in the case of the profile pic image and
                                the about section logo.  In addition, I was not able to get my Modals up and running by the end of the
                                day.  I will need to record some video content for these, however, I would like to have some placeholder
                                images of my applications.  Finally, I still need to deploy, which will hopefully happen by the end of
                                tomorrow.
                            </p>

                            <p>Well, that is about it for my first blog.  I know this first entry is not the most exciting as I am
                                just describing a personal challenge, but hopefully things will ramp up as I continue.  Thanks for
                                reading!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog;