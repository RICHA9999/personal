import React, { useRef } from 'react';
import './header.scss';

const Header = () => {
  const scrollRef = useRef(null);


  // Event handler for scroll
  const handleScroll = () => {
    // Update the scroll position in the state
  };

  // Scroll to the top of the page
  const gotoHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to the 'About' section
  const gotoAbout = () => {
    handleScroll();
    };

  // Scroll to the 'Projects' section
  const gotoProjects = () => {
   };

  // Scroll to the 'Contact' section
  const gotoContacts = () => {
    console.log('called');
    // if (scrollRef.current) {
    //   console.log('called');
    //   scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    // }

    const container = document.querySelector(".Header"); // Replace with your actual class or use an ID
    const scrollAmount = container.scrollHeight + 200;
    console.log(scrollAmount);
    container.scrollTo({
      top: scrollAmount,
      behavior: "auto", // or 'smooth' for instant scrolling
    });

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
          <div className='Header-navigation-button' onClick={gotoProjects}>
          <div className='Header-text'> Projects</div>
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
