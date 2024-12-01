import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-image: url('/img/fondo2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 60px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

export const Title = styled.h1`
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  font-size: 3.5rem;
  margin: 0;
  z-index: 2;
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  margin: 0;
  max-width: 600px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
  z-index: 2;
  padding: 0 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const NewsSection = styled.section`
  padding: 2rem;
  text-align: center;
`;

export const NewsTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: #333;
`;

export const NewsSubtitle = styled.p`
  font-size: 2.3rem;
  color: #666;
  margin: 0.5rem 0 2rem 0;
`;

export const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  max-width: 800px;
  height: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

export const NewsItem = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover .description {
    opacity: 1;
  }

  @media (max-width: 768px) {
    &:hover .description {
      opacity: 1;
    }
  }
`;

export const NewsImage = styled.img`
  width: 100%;
  height: 185px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`;

export const NewsDescription = styled.p`
  padding: 0.8rem;
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    opacity: 1;
    background: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const SeparatorLine = styled.div`
  width: 100%;
  height: 0.7px;
  background-color: #2e2e2e;
  margin: 2rem 0;
`;

export const GallerySection = styled.section`
  padding: 2rem;
  text-align: center;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const GalleryItem = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }

  &:hover div {
    opacity: 1;
  }

  @media (min-width: 769px) {
    &:hover > div {
      opacity: 1;
    }
  }
`;

export const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }
`;

export const GalleryTitle = styled.h3`
  color: #f0f0f0;
  font-size: 1.8rem;
  margin: 0;
  text-align: center;
  padding: 0.5rem 1rem;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const GalleryText = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  margin: 0;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const DataSection = styled.section`
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const DataItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  animation: ${fadeIn} 1s ease;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const DataTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const DataValue = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: #237246;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AnimatedSpan = styled.span`
  display: inline-block;
  animation: ${bounce} 1s infinite ease;
`;

export const DataDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;