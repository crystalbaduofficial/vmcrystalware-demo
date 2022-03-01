import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarLink, 
    SidebarWrapper, 
    SidebarMenu, 
    SideBtnWrap, 
    SidebarRoute 
} from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="/capabilities" onClick={toggle}>Capabilities</SidebarLink>
                    <SidebarLink to="/packages" onClick={toggle}>Packages & Plans</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Text Me To Get Started </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
