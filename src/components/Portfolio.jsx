import React, { useState, useEffect } from 'react';

const Portfolio = ({ data }) => {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectFiles = ['film01', 'film02', 'film03', 'film04', 'film05', 'film06'];
        
        const loadedProjects = await Promise.all(
          projectFiles.map(async (filename, index) => {
            try {
              const response = await fetch(`${import.meta.env.BASE_URL}projects/${filename}.json`);
              if (!response.ok) throw new Error('Not found');
              const data = await response.json();
              return {
                id: index + 1,
                filename: filename,
                title: data.title,
                category: data.subtitle,
                image: `${import.meta.env.BASE_URL}projects/${filename}.png`,
                embed_code: data.video_embed || data.vimeo_embed || data.embed
              };
            } catch (err) {
              console.error(`Error loading ${filename}:`, err);
              return null; // Return null if file doesn't exist yet
            }
          })
        );
        
        // Filter out any missing projects
        setProjects(loadedProjects.filter(p => p !== null));
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeProject]);

  const openModal = (project) => {
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <section className="portfolio" id="work">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Showreel / selected work</span>
          <h2 className="section-title">{data.title_start} <span className="accent">{data.title_accent}</span></h2>
          <p>Motion, 3D og visuelle leveranser bygget for skjerm, scene og kampanje.</p>
        </div>
        
        {isLoading ? (
          <p className="loading-text">Laster inn prosjekter...</p>
        ) : (
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div 
                className="portfolio-item fade-in-up" 
                key={project.id} 
                style={{animationDelay: `${project.id * 0.1}s`}}
                onClick={() => openModal(project)}
              >
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <span className="portfolio-index">0{project.id}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <span className="portfolio-category">{project.category}</span>
                  <span className="portfolio-action">Se film</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Lukk film">×</button>
            <div className="modal-header">
              <span className="modal-index">Film 0{activeProject.id}</span>
              <div className="modal-title-block">
                <h3>{activeProject.title}</h3>
                <p>{activeProject.category}</p>
              </div>
            </div>
            <div className="modal-video-wrapper" dangerouslySetInnerHTML={{ __html: activeProject.embed_code }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
