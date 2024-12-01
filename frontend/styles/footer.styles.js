import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    padding: 1rem;
    position: relative;
    bottom: 0;
    width: 100%;
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Copyright = styled.p`
    margin: 0;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;

    .social-icon {
        margin: 0 10px;
        cursor: pointer;
        color: white;
        transition: color 0.3s ease;
    }

    a:hover .social-icon {
        color: #3b5998;
    }

    a:nth-child(2):hover .social-icon {
        color: #000000;
    }

    a:nth-child(3):hover .social-icon {
        color: #C13584;
    }

    @media (max-width: 768px) {
        justify-content: center;
    }

    @media (max-width: 480px) {
        .social-icon {
            margin: 0 5px;
        }
    }
`;