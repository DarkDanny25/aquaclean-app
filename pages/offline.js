import { css } from '@emotion/react';
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
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: #adb5bd;
  margin-bottom: 1rem;
`;

export default function Offline() {
  return (
    <Container>
      <Icon icon={faWifi} />
      <Title>¡Oops, parece que no tienes conexión!</Title>
      <Message>
        No pudimos cargar esta página. Por favor, verifica tu conexión a internet e inténtalo de nuevo.
      </Message>
      <FontAwesomeIcon icon={faFrown} css={css`font-size: 3rem; color: #ff6f61;`} />
    </Container>
  );
}