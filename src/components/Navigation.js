import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// images

import logo from '../../assets/images/boxLogo.png';
import menu from '../../assets/images/Menu-Lines.png';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Navbar className="navbar" sticky="top">
                <Navbar.Brand href="#top">
                </Navbar.Brand>
                <div className="portfolio-name">
                    David Carl Guenther
                    </div>
                <div className="delete-itinerary-dropdown">
                    <DropdownButton className="overall-dropdown"
                        alignRight
                        title={
                            <img className="menu" src={menu}></img>
                        }
                        id="dropdown-menu-align-right"
                    >
                        <Dropdown.Item className="drop" eventKey="1" href="#about-me">About Me</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="2" href="#applications">Applications</Dropdown.Item>
                        <Dropdown.Item className="drop" eventKey="3" href="#blog">Blog</Dropdown.Item>
                        <Dropdown.Item className="lastdrop" eventKey="4" href="#connect">Connect</Dropdown.Item>
                    </DropdownButton>
                </div>
                {/* <img className="menu" src={menu}></img> */}
            </Navbar>
        )
    }
}

export default Navigation;