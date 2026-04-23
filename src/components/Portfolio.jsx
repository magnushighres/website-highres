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
              const response = await fetch(`/projects/${filename}.json`);
              if (!response.ok) throw new Error('Not found');
              const data = await response.json();
              return {
                id: index + 1,
                filename: filename,
                title: data.title,
                category: data.subtitle,
                image: `/projects/${filename}.png`,
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

  const openModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="portfolio" id="work">
      <div className="container">
        <h2 className="section-title">{data.title_start} <span className="accent">{data.title_accent}</span></h2>
        
        {isLoading ? (
          <p style={{textAlign: 'center', marginTop: '2rem'}}>Laster inn prosjekter...</p>
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
                  <h3 className="portfolio-title">{project.title}</h3>
                  <span className="portfolio-category">{project.category}</span>
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
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-video-wrapper" dangerouslySetInnerHTML={{ __html: activeProject.embed_code }} />
            <div className="modal-info">
              <h3>{activeProject.title}</h3>
              <p>{activeProject.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
