// src/components/Header/Header.tsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">Logo</div>
      <nav className="header__nav">
        <button className="header__button">List Quotes</button>
        <button className="header__button">Random Quotes</button>
        <button className="header__button">About</button>
      </nav>
      <button className="header__button--cta">Search</button>
    </header>
  );
};

export default Header;
