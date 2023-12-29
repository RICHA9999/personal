import React, { useState, useEffect } from 'react';
import './landing.scss'; // Import the SCSS file
import Header from '../Header/header.js';
import Photo from '../Photo/photo.js';
import Contact from '../Contact/contact.js';
import Footer from '../Footer/footer.js';
import Loader from '../Loader/loader.js';

// const Landing = () => {
//   return (
//     <div className='landing-page'>
//       <div className="landing-page-container">
//         <Header />
//       </div>
//       <Photo />
//       <Contact />
//       <Footer />
//     </div>


//   );
// };

const Landing = () => {
  const [photoLoaded, setPhotoLoaded] = useState(false);

  useEffect(() => {
    const delay = 3000; // 2 seconds

    const timer = setTimeout(() => {
      setPhotoLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='landing-page'>
      <div className="landing-page-container">
        <Header />
        {!photoLoaded && <Loader />}
      </div>

      {photoLoaded && <><Photo /><Contact /><Footer /></>}
    </div>
  );
};

export default Landing;
