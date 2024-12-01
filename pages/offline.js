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
  padding: 20px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #6c757d;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
  }
`;

const WifiIcon = styled(FontAwesomeIcon)`
  font-size: 10rem;
  color: #dc3545;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 12rem;
  }
`;

const FrownIcon = styled(FontAwesomeIcon)`
  font-size: 8rem;
  color: #dc3545;
  margin-top: 1rem;

  @media (max-width: 480px) {
    font-size: 5rem;
  }

  @media (min-width: 1200px) {
    font-size: 10rem;
  }
`;

export default function Offline() {
  return (
    <Container>
      <WifiIcon icon={faWifi} />
      <Title>¡Oops, parece que no tienes conexión!</Title>
      <Message>
        No pudimos cargar esta página. Por favor, verifica tu conexión a internet e inténtalo de nuevo.
      </Message>
      <FrownIcon icon={faFrown} />
    </Container>
  );
}