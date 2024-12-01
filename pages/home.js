import React from 'react';
import { useRouter } from 'next/router';
import { 
  PageContainer, 
  ContentContainer, 
  TextContainer, 
  Title, 
  Description, 
  Button, 
  ImageContainer 
} from '../frontend/styles/home.styles';

const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/about');
  };

  return (
    <PageContainer>
      <ContentContainer>
        <TextContainer>
          <Title>Bienvenido a la web informativa de nuestro producto</Title>
          <Description>
            Con cada viaje, limpiamos los cenotes y construimos un futuro sostenible para las próximas generaciones,
            uniendo tecnología e innovación al servicio del planeta
          </Description>
          <Button onClick={handleButtonClick}>Comenzar</Button>
        </TextContainer>
        <ImageContainer />
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;