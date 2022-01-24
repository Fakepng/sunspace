import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import Ability from './pages/ability';
import Contact from './pages/contact';
import History from './pages/history';
import Service from './pages/service';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/ability" element={<Ability/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </Router>
  );
}

export default App;
