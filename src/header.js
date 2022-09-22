import React from 'react';
import './header.css';

const Header = () => (
  <header>
    <h1>A Benjamin think...</h1>
    <ul>
      <a href="/">Home</a>
      <span> | </span>
      <a href="/Calculator">Calculator</a>
      <span> | </span>
      <a href="/Quote">Quotes</a>
    </ul>
  </header>
);

export default Header;
