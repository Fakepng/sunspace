import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
      setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
            <Navbar handleToggle={handleToggle} />
            <HeroSection />
            <Services />
        </>
    );
};

export default Home;
