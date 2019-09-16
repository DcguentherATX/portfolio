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
                        <div className="date">Monday, September 16, 2019</div>
                        <div className="entry">
                            <p> I just wanted to follow up on my progress after my initial challenge last Monday.  My goals were
                                to fix the profile resizing error, add modals for each application, create video content for those
                                modals, and then deploy the site.  I was able to accomplish all of these quickly with the exception
                                of creating the video content, which is on my docket for this week.
            </p>
                            <p> Fixing the aspect ratio for the profile pic was as easy as adding another wrapper outside the image container and providing
                                some simple CSS.  If you would like to see the code for that, feel free to check out my portfolio repo via my Github
                                account, which is linked below.  Adding the modals was fairly simple as Bootstrap has nice modal components readily
                                available.  A little additional styling, and I was all set.  I did play around with making the modals reusable components,
                                however, with the content for each application being so different, I felt it was better to keep the unique.
            </p>
                            <p>Deployment was an interesting challenge as I decided to use Digital Ocean, which I had never used before.  I
                                easily linked my domain name to my VPC and was able to deploy within 30 minutes.  I used Gulp to manage
                                my build tasks and Forever to keep my site deployed at all times, even when I was not logged in to my server.
                                Overall, it was a fun learning process and I now have a portfolio launched for the world to view.
            </p>
                            <p> The final piece of the puzzle is to add videos of some of the applications on the modals.  I hope to accomplish this
                                in the next few days.  In addition, I would like to create a database to store blog entries and enhance the site with
                                a search/sort function for the entries.  I'm very proud of how the portfolio has turned out.  I love the sleek design and
                                simple UI.  I can't wait to keep building!
            </p>
                        </div>
                        <div className="date">Monday, September 9, 2019</div>
                        <div className="entry">
                            <p> Hello World!  This is my first blog on my brand new portfolio website.  I decided to give
                                myself a bit of a design challenge and wanted to see how far I could get in an 8 hour period
                                designing a portfolio site from scratch.  At the end of the day, I'm satisfied with the
                                results, but I did have some interesting challenges along the way.
            </p>
                            <p>Starting with a blank page used to be intimidating when I first started learning how to
                                be a software engineer.  At this point, I'm much more comfortable in getting started from ground
                                zero.  I was able to get my Webpack and Babel up and running within thirty minutes, added a couple
                                script tags, and by the end of the first hour, I had built a server with express and had a basic
                                display on the screen.  I vividly remember when I first started out with Webpack and how complicated it seemed.
                                Now, I am comfortable building a project from a blank page!  Once that was complete, I created a new Github repo
                                and connected my portfolio application.  Remember, commit early and commit often folks!
            </p>
                            <p>After the initial Webpack setup was complete, I switched over to building my file structure and
                                constructing a skeleton of a single page app.  I then set aside some time to sketch page layout and
                                design options.  From there, I created the DCG logo for the site and and began working on turning my
                                wireframes into a reality.  I used React to build the front end with the help of React Bootstrap, which
                                created the easy grid layout and resized elements as the size of the window adjusts.  Perhaps my biggest
                                challenge was implementing the dropdown inside the navigation bar at the top.  There was an additional arrow
                                that was visible to the right of the three bar image I used and it took me some time to disguise it.
                            </p>

                            <p>My development strategy was to work from the top down, starting with the navigation bar, then the
                                about section, followed by the applications, and finishing with the footer with social media links.  I
                                spent some additional time pulling up images and creating logos for each section, but overall, the day passed smoothly.
                                Although I am satisfied with my accomplishments for the day, I still want to work on a couple things.
                                Resizing with Bootstrap is giving me some trouble, especially in the case of the profile pic image and
                                the about section logo.  In addition, I was not able to get my modals up and running by the end of the
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