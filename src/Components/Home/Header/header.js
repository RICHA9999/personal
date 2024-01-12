import React from 'react';
import './header.scss';

const Header = () => {


  // Scroll to the top of the page
  const gotoHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to the 'About' section
  const gotoAbout = () => {
    window.open('/about');
    };

  // Scroll to the 'Projects' section
  const gotoResume = () => {
    window.open('https://drive.google.com/file/d/1zZQ-8w-pDYnheDldDrPfLxkHbHJYz_5W/view?usp=sharing');
   };

  // Scroll to the 'Contact' section
  const gotoContacts = () => {
    window.open('/contact');
    };

  return (
    <div className='Header'>
      <div className='Header-inner-container'>
        {/* Logo and Name */}
        <div className='Header-name-label'>
          <div className='Header-button-name'>
            <div className='Header-button-init'>
              R
            </div>
          </div>
          <span className='Header-navigation-button'>
            Richa
          </span>
        </div>
        
        {/* Navigation Buttons */}
        <div className='Header-navigation-button-container'>
          <div className='Header-navigation-button' onClick={gotoHome}>
          <div className='Header-text'> Home</div>
          </div>
          <div className='Header-navigation-button' onClick={gotoAbout}>
          <div className='Header-text'> About</div>
          </div>
          <div className='Header-navigation-button' onClick={gotoResume}>
          <div className='Header-text'> Resume</div>
          </div>
          <div className='Header-button-contact' onClick={gotoContacts}>
            <div className='Header-button-init'>
            <div className='Header-text'> Lets talk</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
