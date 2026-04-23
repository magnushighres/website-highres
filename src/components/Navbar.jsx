import React from 'react';

const Navbar = ({ data }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo-link">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Highres Logo" className="logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#work">{data.work}</a></li>
          <li><a href="#about">{data.about}</a></li>
          <li><a href="#contact">{data.contact}</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
