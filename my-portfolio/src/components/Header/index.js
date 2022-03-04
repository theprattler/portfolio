import React from 'react';
//import Navigation from './components/Navigation';

function Header() {
  return (
    <section>
      <h1 id="header">J Michael Smith</h1>
      <nav>
      <ul>
        <li>
          <a href="#about">
            About Me
          </a>
        </li>
        <li>
          <a href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact Me
          </a>
        </li>
        <li>
          <a href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
    </section>
  )
}

export default Header;