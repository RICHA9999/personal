import React from 'react';
import './contact.scss';
// Importing constants for social media links
import { Gmail, Instagram, Linkedin, Github } from '../../../Constants/Constants.js';


// Functional component
const Contact = () => {
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
  return (
    <><div className='contact'>
      <div className="contact-button">
        <div className="contact-button-text" onClick={gotoGmail}>
          Gmail
        </div>
        <div className="contact-button-text" onClick={gotoLinkedIn}>
          LinkedIn
        </div>
        <div className="contact-button-text" onClick={gotoGithub}>
          GitHub
        </div>
        <div className="contact-button-text" onClick={gotoInsta}>
          Instagram
        </div>
      </div>
    </div>
      <div className="contact-about-me">
        <div className="contact-about-me-heading">
          <div className="contact-about-me-title">
            About Me.
          </div>
          <div className="contact-about-me-layout">
            A standout frontend developer mastered in React. With a knack for infusing creativity into interfaces, she transforms design concepts into captivating web applications. A true team player, seamlessly collaborates, elevating projects with her innovative mindset, dedication to excellence, and adept skills in fostering a collaborative development environment.
          </div>
        </div>
        <div className="contact-about-me-buttons">
          <div className='contact-about-me-buttons-layout'>
            <div className="contact-about-me-buttons-text">
              Creative
            </div>
          </div>
          <div className="contact-about-me-buttons-text extra-text">
            UI/UX skills
          </div>
          <div className='contact-about-me-buttons-layout'>
            <div className="contact-about-me-buttons-text">
              Complex thinking
            </div>
          </div>
          <div className="contact-about-me-buttons-text extra-text">
            Resourceful
          </div>
          <div className='contact-about-me-buttons-layout'>
            <div className="contact-about-me-buttons-text">
              Introspective
            </div>
          </div>
          <div className="contact-about-me-buttons-text extra-text">
            Debugs all
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
