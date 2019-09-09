import React from 'react';

// images

import logo from '../../assets/images/octagonLogo.png';

class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <img src={logo} className="logo" alt="logo"></img>
            </div>
        )
    }
}

export default NavBar;