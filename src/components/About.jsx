import React from 'react';

const About = ({ data }) => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content fade-in-up">
          <div className="about-text">
            <h2>{data.heading}</h2>
            <p>{data.paragraph_1}</p>
            <p>{data.paragraph_2}</p>
            <p>{data.paragraph_3}</p>
            <p style={{fontStyle: 'italic', marginTop: '1rem', color: 'var(--text-primary)'}}>
              {data.signature}
            </p>
            <div className="capability-list" aria-label="Tjenester">
              <span>Creative direction</span>
              <span>Motion packages</span>
              <span>Stage visuals</span>
              <span>3D pipelines</span>
            </div>
            
            <div className="about-stats">
              {data.stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-glow"></div>
            <img 
              src={`${import.meta.env.BASE_URL}about.png`} 
              alt="Creative Vision" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
