import React from 'react';
import './Page1.css';
import mavsLogo from '../assets/mavs-logo.png';
import bullsLogo from '../assets/bulls-logo.png';

const Page1 = () => {
  const images = [
    // Add your image objects with title and src properties here
    { title: 'Mavericks', src: mavsLogo },
    { title: 'Bulls', src: bullsLogo },
  ];

  return (
      <div className="container">
        <h2>Gallery</h2>
        <div className="image-grid">
          {images.map((image, index) => (
              <div key={index} className="image-container">
                <h3>{image.title}</h3>
                <img src={image.src} alt={image.title} />
              </div>
          ))}
        </div>
      </div>
  );
};

export default Page1;
