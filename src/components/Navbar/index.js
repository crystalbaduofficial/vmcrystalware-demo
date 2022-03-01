import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import Image from '../../logo/logo.png';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    LogoImg,
    MobileIcon, 
    NavItem, 
    NavMenu, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import { IconContext } from 'react-icons/lib';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else { 
            setScrollNav(false);
        }
    };
        
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    };

    const toggleBottom = () => {
        scroll.scrollToBottom()
    };
    
    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            <LogoImg src=
                            {Image} type='image' />
                        </NavLogo>
                        
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="home" 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    onClick={toggleHome}>Home</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks 
                                    to="capabilities"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    Capabilities
                                </NavLinks>
                            </NavItem> 
                            
                            <NavItem>
                                <NavLinks 
                                    to="packages"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >Packages
                                </NavLinks>
                            </NavItem>


                        
                            <NavItem>
                                <NavBtn>
                                    <NavBtnLink 
                                        to="/"
                                        // onClick={toggleHome}
                                        onClick={toggleBottom}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}>Get Started</NavBtnLink>
                                </NavBtn>
                            </NavItem>
                            
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
