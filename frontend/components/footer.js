import React from 'react';
import { FooterContainer, FooterContent, Copyright, SocialIcons } from '../styles/footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Copyright>&copy; 2024 AquaClean. Todos los derechos reservados.</Copyright>
                <SocialIcons>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} size="1x" className="social-icon" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} size="1x" className="social-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="1x" className="social-icon" />
                    </a>
                </SocialIcons>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;