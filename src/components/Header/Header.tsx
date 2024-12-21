import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Icon from '../Icon/Icon';

const Header: React.FC = () => {
  const navigate = useNavigate();

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
    </header>
  );
};

export default Header;
