import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Service from './components/Services'
import History from './components/History'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <History />
      <Contact />
    </div>
  );
}

export default App;
