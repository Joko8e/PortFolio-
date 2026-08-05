import React from 'react'
import ProfileImg from '../assets/Profile.jpg'

function Hero() {
  return (
    <section id="hero" className="min-vh-100 d-flex align-items-center bg-black text-white pt-5 pb-5 mt-4">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          {/* Colonne Gauche (Carte Code) - order-2 sur mobile, order-1 sur Desktop */}
          <div className="col-12 col-lg-5 order-2 order-lg-1">
            <div className="card bg-dark border-secondary shadow-lg overflow-hidden">
              <div className="card-header bg-black bg-opacity-50 border-bottom border-secondary d-flex align-items-center gap-2 py-2 px-3">
                <span className="rounded-circle bg-danger d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                <span className="rounded-circle bg-warning d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                <span className="rounded-circle bg-success d-inline-block" style={{ width: '10px', height: '10px' }}></span>
                <span className="text-secondary font-monospace small ms-2">
                  <i className="bi bi-code-slash me-1"></i>developer.js
                </span>
              </div>
              
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

          {/* Colonne Droite (Photo + Texte) - order-1 sur mobile, order-2 sur Desktop */}
          <div className="col-12 col-lg-7 order-1 order-lg-2 text-center text-lg-start">
            
            {/* Bloc Photo de Profil (plus grande) & Badge */}
            {/* Changement de flex-direction sur mobile (column) pour l'esthétique */}
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start gap-4 mb-4">
              <div 
                className="position-relative rounded-circle border border-2 border-info p-1 flex-shrink-0"
                style={{ width: '150px', height: '150px' }} // Taille augmentée à 150px
              >
                <img 
                  src={ProfileImg} 
                  alt="Jordy Mavuidi" 
                  className="w-100 h-100 rounded-circle object-fit-cover"
                />
                {/* Pastille status actif agrandie proportionnellement */}
                <span 
                  className="position-absolute bottom-0 end-0 bg-success border border-3 border-black rounded-circle"
                  style={{ width: '25px', height: '25px', transform: 'translate(10%, 10%)' }}
                  title="Disponible pour de nouveaux projets"
                ></span>
              </div>

              <div>
                {/* Badge Reconversion */}
                <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-dark border border-secondary text-info">
                  <span className="spinner-grow spinner-grow-sm text-info" role="status" aria-hidden="true"></span>
                  <span className="small font-monospace" style={{ fontSize: '0.85rem' }}>Développeur Web Full Stack</span>
                </div>
              </div>
            </div>

            {/* Titre principal */}
            <h1 className="display-5 fw-bold text-white mb-3">
              <span className="text-info">Jordy Mavuidi</span>
            </h1>

            {/* Description */}
            <p className="text-secondary mb-4 lh-lg">
              Passionné par le développement web, je conçois des applications modernes, réactives et performantes avec <strong className="text-white">React</strong> et l'écosystème <strong className="text-white">JavaScript</strong>. Mon expérience passée apporte une vision métier centrée utilisateur et une forte capacité d'adaptation.
            </p>

            {/* Boutons d'action */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <a 
                href="#projects" 
                className="btn btn-info px-4 py-2 d-inline-flex align-items-center gap-2 font-semibold shadow-sm"
              >
                Voir mes projets
                <i className="bi bi-arrow-down-circle fs-5"></i>
              </a>
              <a 
                href="/Jordy-Mavuidi-WebFullstack-CV.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-light px-4 py-2 d-inline-flex align-items-center gap-2"
              >
                <i className="bi bi-download fs-5"></i>
                Télécharger mon CV
              </a>
            </div>

            {/* Liens réseaux sociaux */}
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start pt-3 border-top border-secondary">
              <span className="text-secondary small me-2">Me rejoindre :</span>
              <a 
                href="https://github.com/Joko8e" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 text-white d-inline-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                title="GitHub"
              >
                <i className="bi bi-github fs-5"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/jordy-mavuidi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 text-white d-inline-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                title="LinkedIn"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a 
                href="mailto:j.mavuidi@gmail.com"
                className="btn btn-sm btn-outline-secondary rounded-circle p-2 text-white d-inline-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                title="Email"
              >
                <i className="bi bi-envelope fs-5"></i>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero