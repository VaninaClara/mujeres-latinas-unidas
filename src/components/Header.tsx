import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-mlu.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-title">
        <Link to="/">
          <img src={logo} alt="Logo Mujeres Latinas Unidas+" className="logo-large" />
        </Link>
        <h1 className="titulo">Mujeres Latinas Unidas+</h1>
      </div>
    </header>
  );
};

export default Header;
