import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

// images

import logo from '../../assets/images/boxLogo.png';

class Navigation extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <Navbar className="navbar" sticky="top">
                <Navbar.Brand href="home">
                    <img src={logo} width="60" height="60" className="logo" alt="DCG Logo" />
                </Navbar.Brand>
                <div className="portfolio-name">
                    David Carl Guenther
                    </div>
                <div className="social-media">
                    Social
                    </div>
            </Navbar>
        )
    }
}

export default Navigation;