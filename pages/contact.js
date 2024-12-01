import { useEffect, useState } from 'react';
import { faEnvelope, faPhone, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {
  FormContainer,
  InputField,
  TextArea,
  Button,
  IconContainer,
  Wrapper,
  ImageHeader,
  FormOverlay,
  ContactDetails,
  InfoSection,
  FooterContainer,
  Notification,
} from '../frontend/styles/contact.styles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    topic: '',
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleKeyPress = (e, field) => {
    const key = e.key;
    if (field === 'name') {
      if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/.test(key)) {
        e.preventDefault();
      }
    } else if (field === 'message') {
      if (!/^[A-Za-z0-9ÁáÉéÍíÓóÚúÑñ\s.,;!?()#]+$/.test(key)) {
        e.preventDefault();
      }
    } else if (field === 'topic') {
      if (!/^[A-Za-z0-9ÁáÉéÍíÓóÚúÑñ\s.,;!?]+$/.test(key)) {
        e.preventDefault();
      }
    }
  };

  const validateName = (name) => {
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
    if (name.trim().length < 3) return "El nombre debe tener al menos 3 caracteres.";
    if (name.trim().length > 50) return "El nombre no debe exceder los 50 caracteres.";
    if (!regex.test(name)) return "El nombre solo debe contener letras y espacios.";
    return null;
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validateMessage = (message) => {
    if (message.trim().length < 10) return "El mensaje debe tener al menos 10 caracteres.";
    if (message.trim().length > 300) return "El mensaje no debe exceder los 300 caracteres.";
    return null;
  };

  const validateTopic = (topic) => {
    if (topic && topic.trim().length < 3) {
      return "El tema debe tener al menos 3 caracteres. Ejemplos: 'Información sobre el barco', 'Solicitar colaboración', 'Ideas de mejora'.";
    }
    if (topic && topic.trim().length > 100) {
      return "El tema no debe exceder los 100 caracteres.";
    }
    return null;
  };

  const validateForm = () => {
    const { name, email, message, topic } = formData;
    let errorMessage = null;

    errorMessage = validateName(name) || errorMessage;
    if (!validateEmail(email)) {
      errorMessage = "El correo electrónico no es válido.";
    }
    errorMessage = validateMessage(message) || errorMessage;
    errorMessage = validateTopic(topic) || errorMessage;

    return errorMessage;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    
    if (errorMessage) {
      setNotification({ type: 'error', message: errorMessage });
      return;
    }

    try {
      const response = await axios.post('https://backend-aquaclean.onrender.com/api/contact', formData);
      setNotification({ type: 'success', message: 'Mensaje enviado exitosamente' });

      setFormData({
        name: '',
        email: '',
        message: '',
        topic: '',
      });

      const subscriptionId = localStorage.getItem('subscriptionId');

      if (subscriptionId) {
        const notificationResponse = await axios.post('https://backend-aquaclean.onrender.com/api/push/send-notification', {
          subscriptionId,
          title: '¡Gracias por contactarnos!',
          message: 'Tu mensaje ha sido enviado correctamente.',
        });
      }

    } catch (error) {
      setNotification({ type: 'error', message: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.' });
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div>
      {notification && (
        <Notification type={notification.type}>
          <FontAwesomeIcon icon={notification.type === 'success' ? faCheckCircle : faExclamationCircle} />
          {notification.message}
        </Notification>
      )}

      <Wrapper>
        <ImageHeader src="/img/fondo5.jpg" alt="header image" />
        <FormOverlay>
          <FormContainer onSubmit={handleSubmit}>
            <h1>Contáctanos</h1>
            <p>El futuro de la limpieza de cuerpos de agua en Yucatán empieza aquí, cuéntanos sobre tu experiencia.</p>
            <InputField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'name')}
              placeholder="Nombre"
              required
              maxLength={50}
            />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo"
              required
            />
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'message')}
              placeholder="Tu mensaje"
              required
              maxLength={300}
            />
            <InputField
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyPress(e, 'topic')}
              placeholder="Tema a tratar..."
              maxLength={100}
            />
            <Button type="submit">Enviar</Button>
          </FormContainer>
        </FormOverlay>
        
        <ContactDetails>
          <h3>Por un Yucatán más limpio...</h3>
          <IconContainer>
            <FontAwesomeIcon icon={faPhone} />
            <span>+52 987 106 5744</span>
          </IconContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@aquaclean.com.mx</span>
          </IconContainer>
        </ContactDetails>
      </Wrapper>

      <FooterContainer>
        <InfoSection>
          <h2>¿Cuál es el siguiente paso?</h2>
          <p>¡Estás a un paso de mejorar nuestra comunidad con tus comentarios!</p>
          <ol>
            <li>1. Contáctanos por email</li>
            <p>Comparte tus opiniones y sugerencias para ayudarnos a mejorar nuestros productos y sitio web.</p>
            <li>2. Juntos podemos mejorar</li>
            <p>Tus comentarios nos permiten evitar errores y seguir innovando en todo lo que hacemos.</p>
            <li>3. Gracias a ti crecemos más</li>
            <p>Nuestro proyecto responde a una necesidad, y con tu ayuda podemos crecer aún más. No dudes en compartir tus ideas con nosotros.</p>
          </ol>
        </InfoSection>
      </FooterContainer>
    </div>
  );
};

export default ContactForm;