import React from 'react';
import ProjectCardBootstrap from './ProjectCardBootstrap';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section className="py-5 bg-black text-white">
      <div className="container">
        <h2 className="fw-bold mb-1">Mes Réalisations</h2>
        <p className="text-secondary mb-4">Projets récents développés avec React et d'autres technologies.</p>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projectsData.map((project) => (
            <div className="col" key={project.id}>
              <ProjectCardBootstrap project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}