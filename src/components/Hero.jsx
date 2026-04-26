import React from 'react';

const Hero = ({ data }) => {
  const disciplines = ['3D', 'Motion', 'VFX', 'Event visuals'];

  return (
    <section className="hero" id="home">
      {/* Fallback to a gradient if video fails to load, but we try to load a nice abstract video */}
      <video 
        className="hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-grid" aria-hidden="true"></div>
      
      <div className="hero-content fade-in-up">
        <img src={`${import.meta.env.BASE_URL}icon.svg`} alt="Highres Icon" className="hero-icon" />
        <div className="eyebrow">Highres Studio · Oslo</div>
        <h1 className="hero-title">{data.title_start} <span className="accent">{data.title_accent}</span> {data.title_end}</h1>
        <p className="hero-subtitle">{data.subtitle}</p>
        <div className="hero-pills" aria-label="Fagområder">
          {disciplines.map((item) => <span key={item}>{item}</span>)}
        </div>
        <a href="#work" className="btn-primary">{data.cta_button}</a>
      </div>

      <a className="scroll-cue" href="#work" aria-label="Gå til prosjekter">
        <span></span>
      </a>
    </section>
  );
};

export default Hero;
