import styled from '@emotion/styled';

export const Notification = styled.div`
  position: fixed;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  z-index: 1000;
  background-color: ${(props) => (props.type === 'success' ? '#28a745' : '#dc3545')};

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    top: 50px;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    top: 40px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  margin-top: 60px;

  @media (max-width: 1024px) {
    height: 60vh;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 425px) {
    height: 40vh;
  }
`;

export const ImageHeader = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 60vh;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 425px) {
    height: 40vh;
  }
`;

export const FormOverlay = styled.div`
  position: absolute;
  top: 70%;
  left: 5%;
  transform: translateY(-1%);
  width: 33%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 1024px) {
    top: 65%;
    width: 50%;
  }

  @media (max-width: 768px) {
    top: 60%;
    width: 90%;
    left: 5%;
    transform: translateY(-5%);
  }

  @media (max-width: 425px) {
    width: 95%;
    padding: 1rem;
    top: 55%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 425px) {
      font-size: 1.3rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 425px) {
      font-size: 0.8rem;
    }
  }
`;

export const InputField = styled.input`
  margin-bottom: 1rem;
  color: #000;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    padding: 0.6rem;
  }
`;

export const TextArea = styled.textarea`
  margin-bottom: 1rem;
  color: #000;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-height: 120px;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    padding: 0.6rem;
    min-height: 100px;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

export const ContactDetails = styled.div`
  margin-top: 30rem;
  margin-left: 85px;

  h3 {
    font-size: 1.7rem;
    color: #666;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 425px) {
      font-size: 1rem;
      text-align: center;
    }
  }

  svg {
    font-size: 1.3rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }

  span {
    margin-left: 0.5rem;
    font-size: 1.3rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 425px) {
      font-size: 0.9rem;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0.8rem;
  }

  @media (max-width: 425px) {
    margin-top: 0.5rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 10rem 5%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 5rem 2%;
  }

  @media (max-width: 768px) {
    padding: 3rem 2%;
  }

  @media (max-width: 425px) {
    padding: 2rem 1%;
    text-align: center;
  }
`;

export const InfoSection = styled.div`
  text-align: left;
  margin-top: -130px;
  margin-right: 20px;
  max-width: 650px;

  @media (min-width: 1025px) {
    margin-top: -130px;
    margin-left: auto;
    margin-right: 5%;
    text-align: left;
  }

  @media (max-width: 1024px) {
    margin-top: 35rem;
    margin-right: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    margin-top: 35rem;
  }

  @media (max-width: 425px) {
    margin-top: 35rem;
    max-width: 100%;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 3rem;
    color: #333;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 425px) {
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 425px) {
      font-size: 0.9rem;
    }
  }

  ol {
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    color: #333;

    @media (max-width: 768px) {
      padding-left: 1rem;
    }

    @media (max-width: 425px) {
      padding-left: 0.5rem;
    }
  }

  li {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
`;