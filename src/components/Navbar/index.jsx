import React from 'react';
import { Nav, NavLink, Bar, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={require("../../images/logo.svg").default} alt='Logo' />
                </NavLink>
                <Bar />
                <NavMenu>
                    <NavLink to='/'>
                        หน้าหลัก
                    </NavLink>
                    <NavLink to='/service'>
                        บริการ
                    </NavLink>
                    <NavLink to='/ability'>
                        ความสามารถ
                    </NavLink>
                    <NavLink to='/history'>
                        ผลงาน
                    </NavLink>
                    <NavBtnLink to='/contact'>ติดต่อ</NavBtnLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to='/contact'>ติดต่อ</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    );
}

export default Navbar;
