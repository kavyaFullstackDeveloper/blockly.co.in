import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="btn btn-outline-secondary" onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
