import React from 'react';
import { Layout, Server, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

function Skills() {
  // Données des compétences groupées par catégories
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Front-End',
      icon: <Layout className="text-info mb-2" size={28} />,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Bootstrap 5', 'Responsive Design']
    },
    {
      id: 'backend',
      title: 'Back-End & BDD',
      icon: <Server className="text-info mb-2" size={28} />,
      skills: ['Node.js', 'Express', 'APIs REST', 'MongoDB', 'SQL / PostgreSQL']
    },
    {
      id: 'tools',
      title: 'Outils & Environnement',
      icon: <Wrench className="text-info mb-2" size={28} />,
      skills: ['GitHub', 'VS Code', 'Postman', 'Vercel']
    },
    {
      id: 'softskills',
      title: 'Atouts & Reconversion',
      icon: <Sparkles className="text-info mb-2" size={28} />,
      skills: ['Gestion de projet', 'Relation client', 'Travail en équipe', 'Résolution de problèmes', 'Adaptabilité']
    }
  ];

  return (
    <section id="skills" className="py-5 bg-black text-white">
      <div className="container py-4">
        
        {/* En-tête de section */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-white mb-2">Compétences Techniques</h2>
          <p className="text-secondary lead">
            Les technologies et outils que j'utilise au quotidien pour concevoir des applications.
          </p>
        </div>

        {/* Grille de 4 cartes (2x2 sur écran moyen/grand) */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {skillCategories.map((category) => (
            <div className="col" key={category.id}>
              <div className="card h-100 bg-dark border-secondary text-white p-3 shadow-sm">
                <div className="card-body">
                  
                  {/* Titre de catégorie avec icône */}
                  <div className="d-flex align-items-center gap-3 mb-4 border-bottom border-secondary pb-3">
                    {category.icon}
                    <h3 className="h5 fw-bold mb-0 text-white">{category.title}</h3>
                  </div>

                  {/* Liste des compétences */}
                  <div className="row g-2">
                    {category.skills.map((skill, index) => (
                      <div className="col-6" key={index}>
                        <div className="d-flex align-items-center gap-2 text-secondary">
                          <CheckCircle2 size={16} className="text-info flex-shrink-0" />
                          <span className="small text-light-50">{skill}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Petit bandeau bonus / Apprentissage continu */}
        <div className="mt-5 p-4 rounded-3 bg-dark border border-secondary text-center">
          <p className="mb-0 text-secondary small">
            💡 <strong className="text-white">En apprentissage continu :</strong> Je développe actuellement mes compétences sur <span className="text-info">Next.js</span> et la découverte de <span className="text-info">C#</span>.
          </p>
        </div>

      </div>
    </section>
  );
}
export default Skills;