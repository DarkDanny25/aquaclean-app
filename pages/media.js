import React, { useState, useEffect } from 'react';
import {
  Header,
  Title,
  Subtitle,
  NewsSection,
  NewsTitle,
  NewsSubtitle,
  NewsContainer,
  NewsItem,
  NewsImage,
  NewsDescription,
  SeparatorLine,
  GallerySection,
  GalleryContainer,
  GalleryItem,
  GalleryOverlay,
  GalleryText,
  GalleryTitle,
  DataSection,
  DataContainer,
  DataItem,
  DataTitle,
  DataValue,
  DataDescription,
  AnimatedSpan,
} from '../frontend/styles/media.styles';

const formatNumber = (value, format) => {
  if (format === 'percentage') return `${value}%`;
  if (format === 'kilo' && value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value;
};

const Media = () => {
  const [data, setData] = useState([
    { title: 'Cenotes Limpios', value: 30, description: 'Cenotes limpiados en el último mes.', format: 'number' },
    { title: 'Microplásticos Detectados', value: 2500, description: 'Microplásticos detectados hasta ahora.', format: 'kilo' },
    { title: 'Voluntarios Activos', value: 50, description: 'Porcentaje de voluntarios activos.', format: 'percentage' },
    { title: 'Biodiversidad Restaurada', value: 100, description: 'Especies protegidas durante las limpiezas.', format: 'kilo' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          value: Math.floor(item.value + Math.random() * 20 - 10),
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header>
        <Title>Los medios</Title>
        <Subtitle>Entérate de las últimas noticias acerca de nuestro proyecto y el ambiente</Subtitle>
      </Header>

      <NewsSection>
        <NewsTitle>Noticias</NewsTitle>
        <NewsSubtitle>Entérate de lo que está ocurriendo en los cuerpos de agua</NewsSubtitle>
        
        <NewsContainer>
          <NewsItem>
            <NewsImage src="/img/galeria1.jpg" alt="Cenote en proceso de limpieza" />
            <NewsDescription>Avances en la limpieza de cenotes con nuestro barco recolector.</NewsDescription>
          </NewsItem>
          <NewsItem>
            <NewsImage src="/img/galeria2.jpg" alt="Tecnología innovadora en Yucatán" />
            <NewsDescription>Incorporamos sensores avanzados para detectar microplásticos en el agua.</NewsDescription>
          </NewsItem>
          <NewsItem>
            <NewsImage src="/img/galeria3.jpg" alt="Resultados de recolección de basura" />
            <NewsDescription>Más de 500 kg de basura retirados de cenotes en los últimos tres meses.</NewsDescription>
          </NewsItem>
          <NewsItem>
            <NewsImage src="/img/galeria4.jpg" alt="Concientización ambiental en comunidades" />
            <NewsDescription>Campañas de concientización ambiental llegan a las comunidades locales.</NewsDescription>
          </NewsItem>
        </NewsContainer>
      </NewsSection>

      <SeparatorLine />

      <DataSection>
        <h2 style={{ color:'#333', fontSize:'45px' }}>Datos Ambientales</h2>
        <p style={{ color:'#666', fontSize:'35px', marginBottom:'20px' }}>Actualizaciones clave sobre los cuerpos de agua en Yucatán</p>
        <DataContainer>
          {data.map((item, index) => (
            <DataItem key={index}>
              <DataTitle>{item.title}</DataTitle>
              <DataValue>
                <AnimatedSpan>{formatNumber(item.value, item.format)}</AnimatedSpan>
              </DataValue>
              <DataDescription>{item.description}</DataDescription>
            </DataItem>
          ))}
        </DataContainer>
      </DataSection>

      <SeparatorLine />

      <GallerySection>
        <NewsTitle>Galería</NewsTitle>
        <NewsSubtitle>Imágenes acerca de nuestro trabajo</NewsSubtitle>
        
        <GalleryContainer>
          <GalleryItem style={{ backgroundImage: `url(/img/galeria5.jpg)` }}>
            <GalleryOverlay>
              <GalleryTitle>Barco Recolector</GalleryTitle>
              <GalleryText>Descubre nuestro innovador barco recolector, diseñado para limpiar los cenotes de Yucatán y proteger su biodiversidad. ¡Juntos podemos hacer la diferencia!</GalleryText>
            </GalleryOverlay>
          </GalleryItem>
          <GalleryItem style={{ backgroundImage: `url(/img/galeria6.jpg)` }}>
            <GalleryOverlay>
              <GalleryTitle>Cenote en Progreso</GalleryTitle>
              <GalleryText>Observa el impacto positivo de nuestro trabajo en los cenotes. Con cada limpieza, contribuimos a la conservación de estos valiosos ecosistemas.</GalleryText>
            </GalleryOverlay>
          </GalleryItem>
          <GalleryItem style={{ backgroundImage: `url(/img/galeria7.jpg)` }}>
            <GalleryOverlay>
              <GalleryTitle>Jornada de Limpieza</GalleryTitle>
              <GalleryText>Únete a nosotros en nuestras jornadas de limpieza, donde estudiantes y voluntarios trabajan codo a codo para mantener nuestros cuerpos de agua limpios y saludables.</GalleryText>
            </GalleryOverlay>
          </GalleryItem>
          <GalleryItem style={{ backgroundImage: `url(/img/galeria8.jpg)` }}>
            <GalleryOverlay>
              <GalleryTitle>Detectando Plásticos</GalleryTitle>
              <GalleryText>Con tecnología avanzada, nuestro barco detecta microplásticos en el agua. Invertimos en innovación para asegurar un futuro más limpio para nuestros cenotes.</GalleryText>
            </GalleryOverlay>
          </GalleryItem>
        </GalleryContainer>
      </GallerySection>
    </>
  );
};

export default Media;