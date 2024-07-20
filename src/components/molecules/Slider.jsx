import React from 'react';
import './Slider.css';

const Slider = ({ images }) => {
  return (
    <div className="slider">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} className="slide" />
      ))}
    </div>
  );
};

export default Slider;
