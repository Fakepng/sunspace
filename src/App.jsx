import React from 'react';
import './App.css';
import Home from './pages';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import Service from './components/Services';
import History from './components/History'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <History />
    </div>
  );
}

export default App;
