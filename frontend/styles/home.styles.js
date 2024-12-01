import styled from '@emotion/styled';

export const PageContainer = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #1c1c1c;
  overflow: hidden;
  position: relative;
  padding: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: #000;
    clip-path: polygon(0 60%, 100% 20%, 100% 100%, 0% 100%);
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 60px 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  color: #fff;
  text-align: left;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 43px;
  margin-bottom: 20px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-top: 50px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  color: #b0b0b0;
  margin-bottom: 32px;
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  padding: 10px 45px;
  background-color: transparent;
  color: #ffffff; 
  border: 2px solid #32cd32;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #32cd32; 
    color: #1c1c1c; 
    border-color: #32cd32; 
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 700px;
  height: 400px;
  background-image: url('/img/fondo1.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;