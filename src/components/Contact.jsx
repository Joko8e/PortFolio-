import React from 'react'
import { useState } from 'react';

function Contact() {

  return (
    <section id="contact" className="py-5 bg-black text-white">
      <div className="container py-4">
        
        {/* En-tête de section */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-white mb-2">Me Contacter</h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '600px' }}>
            Un projet en tête, une opportunité ou envie d'échanger ? N'hésitez pas à me contacter directement par e-mail ou via les réseaux.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="p-4 p-md-5 rounded-3 bg-dark border border-secondary text-center shadow-lg">

              {/* Titre & Message */}
              <h3 className="h3 fw-bold text-white mb-3">Discutons de votre projet</h3>
              <p className="text-secondary mb-4">
                Je suis actuellement à la recherche d'un poste en tant que développeur web React / Full Stack.
              </p>

              {/* Bouton d'action principal (mailto) */}
              <div className="mb-5">
                <a 
                  href="mailto:j.mavuidi@gmail.com"
                  className="btn btn-info btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-sm"
                >
                  <i className="bi bi-envelope-fill fs-5"></i>
                  Envoyer un e-mail direct
                </a>
              </div>

              {/* Grille des coordonnées directes */}
              <div className="row g-4 pt-4 border-top border-secondary text-start">
                
                {/* Email */}
                <div className="col-12 col-md-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="btn btn-outline-info rounded-circle p-2 disabled flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                      <i className="bi bi-envelope fs-5"></i>
                    </div>
                    <div className="text-truncate">
                      <h4 className="h6 fw-bold mb-1 text-white">Email</h4>
                      <a href="mailto:j.mavuidi@gmail.com" className="text-secondary text-decoration-none small hover-text-white text-truncate d-block">
                        j.mavuidi@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Localisation */}
                <div className="col-12 col-md-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="btn btn-outline-info rounded-circle p-2 disabled flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                      <i className="bi bi-geo-alt fs-5"></i>
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-1 text-white">Localisation</h4>
                      <p className="text-secondary mb-0 small">Île-de-France (Val-D'Oise)</p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="col-12 col-md-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="btn btn-outline-info rounded-circle p-2 disabled flex-shrink-0" style={{ width: '45px', height: '45px' }}>
                      <i className="bi bi-linkedin fs-5"></i>
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-1 text-white">LinkedIn</h4>
                      <a href="https://www.linkedin.com/in/jordy-mavuidi/" target="_blank" rel="noopener noreferrer" className="text-secondary text-decoration-none small hover-text-white">
                        Mon profil LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact