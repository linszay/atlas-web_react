// Header.js my first component
import React from 'react';
import './Header.css';
import atlas_logo from '../assets/holberton-logo.png';

const Header = () => {
  return (
    <header className="App-header">
        <img src={atlas_logo} className="App-logo" alt="Holberton Logo" />
        <h1>School Dashboard</h1>
    </header>
  );
};

export default Header;
