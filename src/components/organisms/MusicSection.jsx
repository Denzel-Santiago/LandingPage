import React from 'react';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import michaelJacksonData from '../../data/mJData';
import './MusicSection.css';

const MusicSection = () => {
  const { musicImage } = michaelJacksonData;
  const description = 'Michael Jackson, el "Rey del Pop", redefinió la música con su innovador enfoque en vídeos musicales, coreografías impactantes y una fusión única de géneros. Con "Thriller", el álbum más vendido de todos los tiempos, y su icónico "moonwalk", dejó una huella imborrable en la industria. Su estilo audaz y su mensaje social inspiraron a generaciones de artistas y continúan influyendo en la música y la moda. ¡Michael Jackson sigue siendo una leyenda inmortal del pop!'
  return (
    <section className="music-section">
      <Image src={musicImage.src} alt={musicImage.alt} />
      <Text>{description}</Text>
    </section>
  );
};

export default MusicSection;
