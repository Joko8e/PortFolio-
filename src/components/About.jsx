import React from 'react';
import { Code2, Users, Target, Award } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-5 bg-black text-white">
      <div className="container py-4">
        
        {/* En-tête de section */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-white mb-2">À Propos de Moi</h2>
          <p className="text-secondary lead mx-auto" style={{ maxWidth: '700px' }}>
            Du terrain au code : un parcours guidé par la passion, la rigueur et le challenge.
          </p>
        </div>

        {/* Contenu principal : 2 colonnes */}
        <div className="row g-4 align-items-stretch">
          
          {/* Colonne Gauche : Storytelling / Parcours */}
          <div className="col-12 col-lg-6">
            <div className="p-4 p-md-5 rounded-3 bg-dark border border-secondary h-100 d-flex flex-column justify-content-center shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="text-info font-monospace">&lt;story&gt;</span>
                <h3 className="h4 text-white fw-bold mb-0">Mon Parcours</h3>
              </div>

              <p className="text-secondary lh-lg mb-3">
                Issu d'un parcours riche dans le commerce et le travail d'équipe, j'ai développé au fil des années une forte capacité d'adaptation, une grande rigueur et un sens aigu de la satisfaction client.
              </p>
              
              <p className="text-secondary lh-lg mb-3">
                Passionné par le numérique et la résolution de problèmes, j'ai concrétisé cette vocation en me reconvertissant dans le <strong className="text-white">développement web</strong>. Aujourd'hui spécialisé dans l'écosystème <strong className="text-info">React & JavaScript</strong>, je conçois des applications modernes, fluides et centrées sur l'utilisateur.
              </p>

              <p className="text-secondary lh-lg mb-4">
                Ma double culture (métier & technique) me permet de comprendre rapidement les besoins d'un projet, de collaborer efficacement et d'apporter une vraie valeur ajoutée au sein d'une équipe tech.
              </p>

              <div>
                <span className="text-info font-monospace">&lt;/story&gt;</span>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Cartes d'atouts (Grille 2x2) */}
          <div className="col-12 col-lg-6">
            <div className="row g-3 h-100">
              
              <div className="col-12 col-sm-6">
                <div className="card h-100 bg-dark border-secondary text-white p-3 shadow-sm hover-border-info transition">
                  <div className="card-body p-2 d-flex flex-column justify-content-between">
                    <div>
                      <div className="btn btn-outline-info rounded-circle p-2 disabled mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <Code2 className="text-info" size={24} />
                      </div>
                      <h4 className="card-title h6 fw-bold text-white mb-2">Technique & Pratique</h4>
                      <p className="card-text text-secondary small mb-0">
                        Conception d'applications React modernes, intégration responsive et logique Full Stack.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="card h-100 bg-dark border-secondary text-white p-3 shadow-sm hover-border-info transition">
                  <div className="card-body p-2 d-flex flex-column justify-content-between">
                    <div>
                      <div className="btn btn-outline-info rounded-circle p-2 disabled mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <Users className="text-info" size={24} />
                      </div>
                      <h4 className="card-title h6 fw-bold text-white mb-2">Esprit d'Équipe</h4>
                      <p className="card-text text-secondary small mb-0">
                        Habitué au travail collaboratif, à l'écoute active et à la synergie de groupe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="card h-100 bg-dark border-secondary text-white p-3 shadow-sm hover-border-info transition">
                  <div className="card-body p-2 d-flex flex-column justify-content-between">
                    <div>
                      <div className="btn btn-outline-info rounded-circle p-2 disabled mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <Target className="text-info" size={24} />
                      </div>
                      <h4 className="card-title h6 fw-bold text-white mb-2">Orientation Résultats</h4>
                      <p className="card-text text-secondary small mb-0">
                        Culture de l'objectif, gestion du stress et rigueur acquises sur le terrain.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="card h-100 bg-dark border-secondary text-white p-3 shadow-sm hover-border-info transition">
                  <div className="card-body p-2 d-flex flex-column justify-content-between">
                    <div>
                      <div className="btn btn-outline-info rounded-circle p-2 disabled mb-3 d-inline-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                        <Award className="text-info" size={24} />
                      </div>
                      <h4 className="card-title h6 fw-bold text-white mb-2">Apprentissage Continu</h4>
                      <p className="card-text text-secondary small mb-0">
                        Veille technologique permanente et volonté constante d'étendre mes compétences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;