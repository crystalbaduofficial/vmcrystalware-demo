import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav `
    background: ${({ scrollNav }) => ( scrollNav ? 'black' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 1110px) {
        transition: 0.8s all text-emphasis-style;
        padding-right: 8%;
    }
`;

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 40px;
    margin: 10 0 0 0;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR) `
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 40px;
    object-fit: contain;
    height: 30%;
    width: 30%;
    z-index: 999;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #26aeeb;
    }  

`
export const LogoImg = styled.img `
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    height: 200px;
    margin-top: 57px;

    &:hover {
        transition: all 0.2s ease-in-out;
    }  

`

export const MobileIcon = styled.div`
    display: none;
    color: white;
    
    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    

    @media screen and (max-width: 960px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: 40px;
`;

export const NavLinks = styled(LinkS)`
    color: whitesmoke;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #26aeeb;
        
    }
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #26aeeb;
    }  
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 20%;
    
    
    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #26aeeb;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transform: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        outline: 2px white solid;
    }    
`
