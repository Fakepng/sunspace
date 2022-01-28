import React, { useState, useEffect } from 'react';
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    // const Close = () => setClick(false);

    const [browsernavbar, setBrowserNavbar] = useState('BrowserNavbarTransparent');
    const listenScrollEventBrowser = e => {
        if (window.scrollY < 100) {
            return setBrowserNavbar('BrowserNavbarTransparent');
        } else if (window.scrollY > 100) {
            return setBrowserNavbar('BrowserNavbar');
        }
    }

    const [mobilenavbar, setMobileNavbar] = useState('MobileViewTransparent');
    const listenScrollEventMobile = e => {
        if (window.scrollY < 100) {
            return setBrowserNavbar('MobileViewTransparent');
        } else if (window.scrollY > 100) {
            return setBrowserNavbar('MobileView');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEventBrowser);
        return () => window.removeEventListener('scroll', listenScrollEventBrowser);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEventMobile);
        return () => window.removeEventListener('scroll', listenScrollEventMobile);
    }, [])

    return (
        <>
            <div className={browsernavbar}>
                <ul className='BrowserMenu'>
                    <a href='#home' className='BrowserLogo'>
                        <img src={"/images/logo.svg"} alt='Logo' />
                    </a>
                    <li>
                        <a href="#home">หน้าหลัก</a>
                    </li>
                    <li>
                        <a href="#service">บริการ</a>
                    </li>
                    <li>
                        <a href="#ability">ความสามารถ</a>
                    </li>
                    <li>
                        <a href="#history">ผลงาน</a>
                    </li>
                    <li>
                        <a href="#contact" className='NavBtn'>ติดต่อ</a>
                    </li>
                </ul>
            </div>
            <div className={mobilenavbar}>
                <a href='#home' className='MobileLogo'>
                        <img src={"/images/logo.svg"} alt='Logo' />
                </a>
                <div className='MobileDiv' onClick={handleClick}>
                    {
                        click ? <AiOutlineClose className='MobileBar' /> : <FaBars className='MobileBar' />
                    }
                </div>
            </div>
            <div className='MobileFull'>
                <ul className={click ? 'MobileItem' : 'MobileItemClose'}>
                    <li>
                        <a href="#home" onClick={handleClick}>หน้าหลัก</a>
                    </li>
                    <li>
                        <a href="#service" onClick={handleClick}>บริการ</a>
                    </li>
                    <li>
                        <a href="#ability" onClick={handleClick}>ความสามารถ</a>
                    </li>
                    <li>
                        <a href="#history" onClick={handleClick}>ผลงาน</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleClick} className='NavBtn'>ติดต่อ</a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
