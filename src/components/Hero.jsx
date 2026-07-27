import React from 'react'
import { CircleArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

function Hero() {
  return (
      <section id="hero" className="min-vh-100 d-flex align-items-center bg-black text-white py-5">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          {/* Colonne Gauche : Texte & Accroche */}
          <div className="col-12 col-lg-7 text-center text-lg-start">
            
            {/* Badge Reconversion / Statut */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-dark border border-secondary text-info mb-4">
              <span className="spinner-grow spinner-grow-sm text-info" role="status" aria-hidden="true"></span>
              <span className="small font-monospace">Développeur Web Full Stack &bull; Reconversion Reussie</span>
            </div>

            {/* Titre principal */}
            <h1 className="display-4 fw-bold text-white mb-3">
              Bonjour, je suis <span className="text-info">Jordy</span>
            </h1>

            {/* Sous-titre / Slogan */}
            <p className="lead text-secondary mb-4 lh-lg">
              Passionné par le développement web, je conçois des applications modernes, réactives et performantes avec <strong className="text-white">React</strong> et l'écosystème <strong className="text-white">JavaScript</strong>. Mon expérience passée apporte une vision métier centrée utilisateur et une forte capacité d'adaptation.
            </p>

            {/* Boutons d'action (CTA) */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5">
              <a 
                href="#projects" 
                className="btn btn-info btn-lg px-4 d-inline-flex align-items-center gap-2 font-semibold shadow-sm"
              >
                Voir mes projets
                <CircleArrowDown size={20} />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-light btn-lg px-4 d-inline-flex align-items-center gap-2"
              >
                <Download size={20} />
                Télécharger mon CV
              </a>
            </div>

            {/* Liens réseaux sociaux */}
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start pt-3 border-top border-secondary">
              <span className="text-secondary small me-2">Me rejoindre :</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 text-white"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 text-white"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:votre.email@example.com" 
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 text-white"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

          {/* Colonne Droite : Visuel / Code Snippet d'illustration */}
          <div className="col-12 col-lg-5">
            <div className="card bg-dark border-secondary shadow-lg overflow-hidden">
              {/* Barre supérieure style éditeur de code */}
              <div className="card-header bg-black bg-opacity-50 border-bottom border-secondary d-flex align-items-center gap-2 py-2 px-3">
                <span className="rounded-circle bg-danger d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                <span className="rounded-circle bg-warning d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                <span className="rounded-circle bg-success d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                <span className="text-secondary font-monospace small ms-2">developer.js</span>
              </div>
              
              {/* Contenu du code d'illustration */}
              <div className="card-body p-4 font-monospace small lh-lg">
                <p className="mb-0 text-secondary">// Développeur passionné & orienté solution</p>
                <p className="mb-0">
                  <span className="text-danger">const</span> <span className="text-warning">developer</span> = &#123;
                </p>
                <p className="mb-0 ms-3">
                  <span className="text-info">name</span>: <span className="text-success">'Jordy'</span>,
                </p>
                <p className="mb-0 ms-3">
                  <span className="text-info">role</span>: <span className="text-success">'Développeur Web React'</span>,
                </p>
                <p className="mb-0 ms-3">
                  <span className="text-info">stack</span>: [<span className="text-success">'React'</span>, <span className="text-success">'Node.js'</span>, <span className="text-success">'Bootstrap'</span>],
                </p>
                <p className="mb-0 ms-3">
                  <span className="text-info">softSkills</span>: [<span className="text-success">'Rigueur'</span>, <span className="text-success">'Travail d\'équipe'</span>, <span className="text-success">'Adaptabilité'</span>],
                </p>
                <p className="mb-0 ms-3">
                  <span className="text-info">status</span>: <span className="text-success">'À la recherche d\'opportunités'</span>
                </p>
                <p className="mb-0">&#125;;</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero