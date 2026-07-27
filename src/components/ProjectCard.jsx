import React from 'react';
import { ExternalLink } from 'lucide-react';

function ProjectCardBootstrap({ project }) {
  const { title, description, image, tags, githubUrl, demoUrl } = project;

  return (
    <div className="card h-100 bg-dark text-white border-secondary shadow-sm">
      {/* Visualisation / Image */}
      <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
        <img 
          src={image} 
          alt={`Aperçu du projet ${title}`} 
          className="card-img-top w-100 h-100" 
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Contenu */}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-white fw-bold">{title}</h5>
          <p className="card-text text-secondary small">{description}</p>
        </div>

        <div>
          {/* Tags */}
          <div className="mb-3 d-flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary text-light me-1">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer avec liens */}
          <div className="pt-3 border-top border-secondary d-flex justify-content-between align-items-center">
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-info d-inline-flex align-items-center gap-1"
              >
                <ExternalLink size={14} /> Démo
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1 ms-auto"
              >
                {/* <Github size={14} /> GitHub */}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCardBootstrap;