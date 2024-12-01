import styled from '@emotion/styled';

export const Header = styled.div`
  position: relative;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 30%;
  width: 100%;
  font-size: 5rem;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  margin: 0;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  position: absolute;
  top: 60%;
  width: 100%;
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  margin: 0;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Section = styled.h2`
  font-size: 2.5rem;
  color: #2e2e2e;
  text-align: center;
  margin: 20px 0 5px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const SectionManual = styled.h2`
  font-size: 2.1rem;
  color: #1e1e1e;
  text-align: center;
  margin: 20px 0 5px 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const SectionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 60px;
`;

export const InstructionsText = styled.p`
  font-size: 1.8rem;
  color: #777;
  text-align: center;
  margin-bottom: 90px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
    height: 200px;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    height: 150px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1.07rem;
  color: #333;
  text-align: left;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding-left: 1em;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #1e90ff;
  }
`;

export const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ControlImage = styled(Image)`
  max-width: 500px;
  height: 300px;

  @media (max-width: 768px) {
    max-width: 90%;
    height: 250px;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    height: 200px;
  }
`;