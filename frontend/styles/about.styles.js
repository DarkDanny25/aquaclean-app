import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: center;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
`;

export const TitleContainer = styled.div`
  position: relative;
  height: 70vh;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0; 
  color: #fff; 
  position: absolute;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  bottom: 70px; 
  left: 90px; 
  z-index: 2; 

  @media (max-width: 768px) {
    font-size: 3rem;
    bottom: 50px;
    left: 50px;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    bottom: 40px;
    left: 30px;
  }
`;

export const TitleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/img/fondo4.jpg'); 
  background-size: cover; 
  background-position: center; 
  width: 100%; 
  z-index: 1; 
`;

export const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1; 
`;

export const Subtitle = styled.h2`
  font-size: 3rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Card = styled.div`
  display: flex; 
  flex-direction: column; 
  background-color: #d9d9d9; 
  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  height: 300px;
  width: 500px; 
  max-width: 100%; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2.3rem; 
  margin-bottom: 1rem;
  color: #2e2e2e; 

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const CardText = styled.p`
  font-size: 1.7rem;
  color: #333; 

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 0.7px;
  background-color: #2e2e2e; 
  margin: 2rem auto;
`;

export const ImageTextContainer = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin: 2rem 0; 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 40%; 
  max-width: 400px; 
  border-radius: 10px; 
  margin-right: 20px; 

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 0 20px 0;
  }
`;

export const TextContainer = styled.div`
  max-width: 600px; 
  padding: 0 20px;
  text-align: left; 

  @media (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;

export const ObjectiveTitle = styled.h3`
  font-size: 2rem; 
  color: #2e2e2e; 

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ObjectiveText = styled.p`
  font-size: 1.5rem; 
  color: #555; 
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;