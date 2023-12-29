// Importing necessary dependencies from React and the styles file
import React from 'react';
import './footer.scss';
// Importing images for social media icons
import GmailImg from '../../../Assets/Google Plus.svg';
import InstagramImg from '../../../Assets/Instagram.svg';
import LinkedinImg from '../../../Assets/LinkedIn.svg';
import GithubImg from '../../../Assets/GitHub.svg';
// Importing constants for social media links
import { Gmail, Instagram, Linkedin, Github } from '../../../Constants/Constants.js';

// Functional component for the Footer
const Footer = () => {

    // Function to handle clicking on the Gmail icon
    const gotoGmail = () => {
        const mailtoLink = `mailto:${Gmail}`;
        window.location.href = mailtoLink;
    }

    // Function to handle clicking on the LinkedIn icon (opens in a new tab)
    const gotoLinkedIn = () => {
        window.open(Linkedin);
    }

    // Function to handle clicking on the GitHub icon (opens in a new tab)
    const gotoGithub = () => {
        window.open(Github);
    }

    // Function to handle clicking on the Instagram icon (opens in a new tab)
    const gotoInsta = () => {
        window.open(Instagram);
    }

    // JSX structure for the Footer component
    return (
        <div className='footer'>
            <div className="footer-heading-layout">
                {/* Heading for the footer section */}
                <div className="footer-heading-text">
                    Send me a
                    {/* Extra styling for part of the text */}
                    <span className="footer-heading-text-extra">
                        message
                    </span>
                    , I will be in touch with you shortly.
                </div>
            </div>
            <div className="footer-apps-layout">
                {/* Social media icons with click event handlers */}
                <div className="footer-apps" onClick={gotoLinkedIn}>
                    <img src={LinkedinImg} alt='' />
                </div>
                <div className="footer-apps" onClick={gotoGithub}>
                    <img src={GithubImg} alt='' />
                </div>
                <div className="footer-apps" onClick={gotoGmail}>
                    <img src={GmailImg} alt='' />
                </div>
                <div className="footer-apps" onClick={gotoInsta}>
                    <img src={InstagramImg} alt='' />
                </div>
            </div>
        </div>
    );
};

// Exporting the Footer component as the default export
export default Footer;
