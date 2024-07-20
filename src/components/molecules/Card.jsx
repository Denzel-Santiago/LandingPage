// src/components/molecules/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ album }) => {
  return (
    <div className="card">
      <img src={album.src} alt={album.title} className="card__image" />
      <div className="card__content">
        <h3 className="card__title">{album.title}</h3>
        <p className="card__description">{album.description}</p>
      </div>
    </div>
  );
};

export default Card;
