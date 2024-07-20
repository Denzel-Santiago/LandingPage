import React from 'react';
import Title from '../atoms/Title';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Title text="Michael Jackson" />
      <h2>King of pop</h2>
    </header>
  );
};

export default Header;
