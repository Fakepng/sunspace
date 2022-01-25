import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ handleToggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <img src={require("../../images/logo.svg").default} alt='Logo' />
                    </NavLogo>
                    <MobileIcon onClick={handleToggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/'>หน้าหลัก</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='service'>บริการ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='ability'>ความสามารถ</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='history'>ผลงาน</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='contact'>
                            ติดต่อ
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
