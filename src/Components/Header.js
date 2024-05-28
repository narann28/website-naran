import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        Naran's<span>Portfolio.</span>
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#interests">Interests</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;