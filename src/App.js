import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import FloatingContact from './components/FloatingContact';
import ThemeToggle from './components/ThemeToggle';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header />
        <FloatingContact />
        <div className="theme-toggle">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more pages like <Route path="/projects" element={<Projects />} /> here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
