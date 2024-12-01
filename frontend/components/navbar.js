import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    NavbarContainer, 
    NavbarList, 
    NavbarItem, 
    Divider, 
    Logo, 
    HamburgerButton 
} from '../styles/navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const buttonRef = useRef(null);

    const navItems = [
        { name: 'Inicio', path: '/home' },
        { name: 'Medios', path: '/media' },
        { name: 'Manual', path: '/manual' },
        { name: 'Acerca De', path: '/about' },
        { name: 'Contacto', path: '/contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        setIsMenuOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleItemClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <NavbarContainer>
            <Link href="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Logo src="/img/logo.png" alt="AquaClean Logo" />
                <Divider>|</Divider>
                <span style={{ color: 'white', fontSize: '1.7rem' }}>AquaClean</span>
            </Link>

            <HamburgerButton onClick={toggleMenu} ref={buttonRef}>
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
            </HamburgerButton>

            <NavbarList ref={navRef} className={isMenuOpen ? 'open' : ''}>
                {navItems.map((item, index) => (
                    <NavbarItem key={index} className={router.pathname === item.path ? 'active' : ''}>
                        <Link href={item.path} onClick={handleItemClick}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarList>
        </NavbarContainer>
    );
};

export default Navbar;