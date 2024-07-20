import React from 'react';
import Slider from '../molecules/Slider';
import Text from '../atoms/Text';
import michaelJacksonData from '../../data/mJData';
import './ArtistSection.css';

const ArtistSection = () => {
  const { artistImages } = michaelJacksonData;
  const description = 'Michael Jackson, conocido como el "Rey del Pop", fue uno de los artistas más influyentes y exitosos de la música del siglo XX. Su carrera despegó cuando era niño con The Jackson 5, pero alcanzó el estrellato global como solista. Su innovador enfoque del pop, junto con su habilidad para mezclar géneros como el rock, el funk y el soul, redefinió el panorama musical,Jackson era famoso por sus espectaculares habilidades de baile, especialmente su distintivo moonwalk, y por sus vídeos musicales cinematográficos que revolucionaron el medio. Álbumes como Thriller, Bad y Dangerous no solo establecieron récords de ventas, sino que también dejaron una huella imborrable en la cultura pop. Su estilo inconfundible y su capacidad para conectar con audiencias de todo el mundo lo convirtieron en una leyenda que sigue influyendo en artistas y músicos de todas las generaciones.';

  return (
    <section className="artist-section">
      <Slider images={artistImages} />
      <Text>{description}</Text>
    </section>
  );
};

export default ArtistSection;
