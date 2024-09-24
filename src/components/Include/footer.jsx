import React from 'react';
import '../../beauty/footer.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSlack } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="top">
                    <div className="logo-details">
                        <FontAwesomeIcon icon={faSlack} />
                        <span className="logo_name">Lorems</span>
                    </div>
                    <div className="media-icons">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
                <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">Company</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Get started</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><a href="#">App design</a></li>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Logo design</a></li>
                        <li><a href="#">Banner design</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Account</li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">My account</a></li>
                        <li><a href="#">Preferences</a></li>
                        <li><a href="#">Purchase</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Courses</li>
                        <li><a href="#">HTML & CSS</a></li>
                        <li><a href="#">JavaScript</a></li>
                        <li><a href="#">Photography</a></li>
                        <li><a href="#">Photoshop</a></li>
                    </ul>
                    <ul className="box input-box">
                        <li className="link_name">Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
            {/* <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2021 <a href="#">Lorem.</a> All rights reserved</span>
                    <span className="policy_terms">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms & condition</a>
                    </span>
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;
