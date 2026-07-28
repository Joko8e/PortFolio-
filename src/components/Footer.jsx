import React from 'react'

function Footer() {

  const currentYear = new Date().getFullYear(); // Récupère l'année en cours

  return (
    <footer className="bg-dark text-secondary py-4 border-top border-secondary">
      <div className="container">
        <div className="row align-items-center gy-3">
          
          {/* Copyright & Identité */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <p className="mb-0 small">
              © {currentYear} <strong className="text-white">Jordy MAVUIDI</strong>. Tous droits réservés.
            </p>
            <p className="mb-0 extra-small text-secondary" style={{ fontSize: '0.8rem' }}>
              Conçu en React & Bootstrap 5.
            </p>
          </div>

          {/* Liens réseaux sociaux & Retour en haut */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-inline-flex align-items-center gap-3">
              <a 
                href="https://github.com/Joko8e" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover-text-white text-decoration-none"
                title="GitHub"
              >
                <i className="bi bi-github fs-5"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/jordy-mavuidi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary hover-text-white text-decoration-none"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a 
                href="#hero" 
                className="btn btn-sm btn-outline-secondary ms-2 text-white"
                title="Retour en haut"
              >
                <i className="bi bi-arrow-up"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer