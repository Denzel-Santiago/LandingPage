import React from 'react';
import Image from '../atoms/Image';
import Text from '../atoms/Text';
import michaelJacksonData from '../../data/mJData';
import './HistorySection.css';

const HistorySection = () => {
  const { historyImage } = michaelJacksonData;
  const description = 'Michael Jackson, nacido el 29 de agosto de 1958, creció en el vibrante mundo de la música desde una edad temprana. Con solo seis años, ya era el líder de The Jackson 5, pero su verdadera revolución comenzó cuando se lanzó en solitario. Con una mezcla inigualable de talento, ambición y creatividad, transformó el panorama musical y cultural. Su vida, marcada por logros extraordinarios y desafíos personales, reflejó una búsqueda constante de perfección y conexión. Desde su impacto global como el "Rey del Pop" hasta sus esfuerzos por cambiar el mundo con su música, Michael Jackson vivió una vida llena de pasión y legado, dejando una marca imborrable en el corazón de millones.';
  const quote = '"Si te enfrentas a tu miedo, se vuelve menos temible. El hecho de que te enfrentes a tus miedos es lo que te hace grande." — Michael Jackson';

  return (
    
      <section className="history-section">
        <h2>Historia</h2>
      <Image src={historyImage.src} alt={historyImage.alt} />
      <Text>{description}</Text>
      <blockquote className="quote">{quote}</blockquote>
      </section>
   
    
  );
};

export default HistorySection;
