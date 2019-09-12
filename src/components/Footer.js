import React from 'react';
import logo from '../../assets/images/boxLogo.png';

// images

import instagram from '../../assets/images/instagramLogoBlack.jpg';
import github from '../../assets/images/githubWhiteLogo.png';
import linkedIn from '../../assets/images/linkedInLogoWhite.png';

const Footer = (props) => {
    return (
        <div className="footer-container" id="connect">
            <img className="footer-logo" src={logo} alt="DCG Logo"></img>
            <div className="social-media">
                <a href="https://github.com/DcguentherATX" target="_blank"><img className="social-logo" src={github} alt="github logo" /></a>
                <a href="https://www.linkedin.com/in/david-guenther" target="_blank"><img className="social-logo" src={linkedIn} alt="linkedIn logo" /></a>
                <a href="https://www.instagram.com/dcguenther/" target="_blank"><img className="social-logo instagram-logo" src={instagram} alt="instagram logo" /></a>
            </div>
        </div>
    )
}

export default Footer;