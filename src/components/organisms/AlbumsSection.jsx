// src/components/organisms/AlbumsSection.jsx
import React from 'react';
import {albums} from '../../data/mJData';
import Card from '../molecules/Card';
import './AlbumsSection.css';

const AlbumsSection = () => {
  
  return (
    <section className="albums-section">
      <h2>Álbumes</h2>
      <div className="cards-container">
        {albums.map((album, index) => (
          <Card key={index} album={album} />
        ))}
      </div>
    </section>
  );
};

export default AlbumsSection;
