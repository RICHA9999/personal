import React from 'react';
import photoIMG from '../../../Assets/picture1.jpg';
import './photo.scss';

// Basic functional component
const Photo = () => {

  return (
    <div className='photo'>
      <div className='photo-header'>
        I’m
        <span className='photo-header photo-name'>
          Richa. </span>I can help you create an impactful websites.
      </div>
      <div className="photo-content">
        <div className='photo-button-one'>
          <div className='photo-text'>
            Web development UI/UX
          </div>
        </div>
        <div className='photo-img'>
          <img className='img' src={photoIMG} alt='' />
        </div>
        <div className='photo-button-two'>
          <div className='photo-text'>
            Full stack aspirit
          </div>
        </div>
      </div>
    </div>

  );

};

export default Photo;
