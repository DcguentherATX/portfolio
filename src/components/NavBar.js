import React from 'react';

// images

import logo from '../../assets/images/boxLogo.png';

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