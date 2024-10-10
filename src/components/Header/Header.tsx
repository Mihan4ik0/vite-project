import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Icon from '../Icon/Icon';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleRedirect = (path: string) => {
    navigate(path);
  };

  return (
    <header className="header">
      <div className="header__logo" onClick={() => handleRedirect('/')}>
        <Icon />
      </div>
      <nav className="header__nav">
        <button onClick={() => handleRedirect('/list-quotes')} className="header__button">List Quotes</button>
        <button onClick={() => handleRedirect('/random-quotes')} className="header__button">Random Quotes</button>
        <button onClick={() => handleRedirect('/about')} className="header__button">About</button>
      </nav>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleSearch}
        className="header__search-input"
      />
    </header>
  );
};

export default Header;
