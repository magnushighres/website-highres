import React from 'react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <a href="#home" className="logo-link">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Highres Logo" className="logo-img-footer" />
        </a>
        <p>&copy; {currentYear} {data.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
