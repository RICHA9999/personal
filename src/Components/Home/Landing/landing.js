import React from 'react';
import './landing.scss'; // Import the SCSS file

const Landing = ({ children }) => {
  return (
    <div className="container">
      {children}
      Hello
    </div>
  );
};

export default Landing;
