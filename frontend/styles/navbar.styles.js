import styled from '@emotion/styled';

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

export const NavbarList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0 20px;
    font-size: 18px;

    @media (max-width: 768px) {
        display: none;
        position: absolute;
        top: 70px;
        right: 10px;
        flex-direction: column;
        background-color: #333;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &.open {
        display: flex;
    }
`;

export const NavbarItem = styled.li`
    position: relative;
    margin-left: 40px;

    a {
        color: #bbb;
        text-decoration: none;
        padding: 0.25rem 0;
        transition: color 0.3s ease;
    }

    a:hover {
        color: #fff;
    }

    &.active a {
        color: #fff;
        border-bottom: 2px solid white;
        padding-bottom: 0.25rem;
    }

    @media (max-width: 768px) {
        margin: 10px 0;
        text-align: right;
    }
`;

export const Divider = styled.span`
    margin: 0 10px;
    color: white;
    font-size: 25px;
`;

export const Logo = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 2px;
`;

export const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const DropdownMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 10px;
    background-color: #333;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        display: none;
    }
`;