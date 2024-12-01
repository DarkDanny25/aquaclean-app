import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faFrown } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 2rem;
`;

export default function Offline() {
  return (
    <Container>
      <FontAwesomeIcon 
        icon={faWifi} 
        style={{ fontSize: '10rem', backgroundColor: '#dc3545', marginBottom: '1.5rem' }} 
      />
      <Title>¡Oops, parece que no tienes conexión!</Title>
      <Message>
        No pudimos cargar esta página. Por favor, verifica tu conexión a internet e inténtalo de nuevo.
      </Message>
      <FontAwesomeIcon 
        icon={faFrown} 
        style={{ fontSize: '8rem', backgroundcolor: '#dc3545', marginTop: '1rem' }} 
      />
    </Container>
  );
}