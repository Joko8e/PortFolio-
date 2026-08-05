import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-black bg-opacity-90 fixed-top border-bottom border-secondary border-opacity-25 py-3 shadow-sm">
      <div className="container">
        
        {/* Logo / Brand */}
        <a className="navbar-brand font-monospace fw-bold text-white d-flex align-items-center gap-1" href="#hero">
          <span className="text-info">&lt;</span>
          <span>Jordy.dev</span>
          <span className="text-info">/&gt;</span>
        </a>

        {/* Bouton Hamburger pour mobile */}
        <button 
          className="navbar-toggler border-secondary" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens de navigation */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-md-2 my-2 my-md-0">
            <li className="nav-item">
              <a className="nav-link text-white text-white-hover px-3 font-monospace small" href="#hero">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-white-hover px-3 font-monospace small" href="#about">
                À propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-white-hover px-3 font-monospace small" href="#projects">
                Projets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white text-white-hover px-3 font-monospace small" href="#skills">
                Compétences
              </a>
            </li>
            <li className="nav-item ms-md-2 mt-2 mt-md-0">
              <a 
                className="btn btn-outline-info btn-sm px-3 rounded-pill font-monospace" 
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar