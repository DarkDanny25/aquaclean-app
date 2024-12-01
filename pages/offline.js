// pages/offline.js
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
  font-family: 'Arial', sans-serif;
  color: #333;
  transition: all 0.3s ease-in-out;
`;

const Icon = styled.div`
  margin-bottom: 20px;
  img {
    width: 100px;
    height: 100px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #e74c3c;
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const OfflinePage = () => {
  return (
    <Container>
      <Icon>
        <img src="/icon-512x512.png" alt="Icono" />
      </Icon>
      <Title>¡Ups! Sin conexión a Internet</Title>
      <Message>No podemos mostrar la página, parece que no tienes conexión a Internet.</Message>
      <Message>Por favor, vuelve a intentarlo más tarde.</Message>
    </Container>
  );
};

export default OfflinePage;