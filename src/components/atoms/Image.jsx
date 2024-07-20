import React from 'react';
import './Image.css';

const Image = ({ src, alt }) => {
  return <img className="image" src={src} alt={alt} />;
};

export default Image;
