import { 
    Container, 
    Title, 
    Subtitle, 
    Card, 
    CardTitle, 
    CardText, 
    TitleContainer, 
    TitleBackground, 
    DarkOverlay, 
    HorizontalLine,
    ImageTextContainer,
    Image,
    TextContainer,
    ObjectiveTitle,
    ObjectiveText
} from '../frontend/styles/about.styles';

const AboutPage = () => {
  return (
    <Container  style={{ marginTop: '60px' }}>
      <TitleContainer>
        <TitleBackground />
        <DarkOverlay />
        <Title>Sobre nosotros</Title>
      </TitleContainer>
      <Subtitle>Quienes somos...</Subtitle>
      <p style={{ fontSize: '1.8rem', marginBottom: '4rem', color: '#555', lineHeight: '1.5', maxWidth: '800px', margin: '0 auto' }}>
        Somos un equipo comprometido con el medio ambiente, dedicado a la limpieza de cuerpos de agua en la península de Yucatán.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card>
          <CardTitle>Misión</CardTitle>
          <CardText>
            Mejorar la limpieza de los cuerpos de agua en Yucatán mediante el uso de tecnología.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Visión</CardTitle>
          <CardText>
            Ser la empresa líder en Yucatán en soluciones tecnológicas para la limpieza de cuerpos de agua.
          </CardText>
        </Card>
      </div>

      <HorizontalLine />

      <ImageTextContainer>
        <Image src="/img/about.jpg" alt="Barco recolector" />
        <TextContainer>
          <ObjectiveTitle>Lo que hacemos...</ObjectiveTitle>
          <ObjectiveText>
            Nuestro equipo tiene como objetivo ayudar al medio ambiente con un barco recolector de basura, diseñado para limpiar cuerpos de agua en Yucatán, especialmente los cenotes. Este proyecto apoya a los equipos de limpieza, facilitando la recolección de desechos y promoviendo la conservación de estos ecosistemas.
          </ObjectiveText>
        </TextContainer>
      </ImageTextContainer>
    </Container>
  );
};

export default AboutPage;