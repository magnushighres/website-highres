import React from 'react';

const Hero = ({ data }) => {
  return (
    <section className="hero" id="home">
      {/* Fallback to a gradient if video fails to load, but we try to load a nice abstract video */}
      <video 
        className="hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
        poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
      >
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content fade-in-up">
        <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="Highres Icon" className="hero-icon" />
        <h1 className="hero-title">{data.title_start} <span className="accent">{data.title_accent}</span> {data.title_end}</h1>
        <p className="hero-subtitle">{data.subtitle}</p>
        <a href="#work" className="btn-primary">{data.cta_button}</a>
      </div>
    </section>
  );
};

export default Hero;
