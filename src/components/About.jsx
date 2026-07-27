import React from 'react'
import { Code2, Users, Target, Award } from 'lucide-react';

function About() {
  return (

    <section id="about" className="py-5 bg-dark text-white">
      <div className="container py-4">
        
        {/* En-tête de section */}
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-white mb-2">À Propos de Moi</h2>
          <p className="text-secondary lead">
            Du terrain au code : un parcours guidé par la passion, la rigueur et le challenge.
          </p>
        </div>

        {/* Contenu principal : 2 colonnes sur grand écran */}
        <div className="row g-4 align-items-stretch">
          
          {/* Colonne Gauche : Storytelling / Parcours */}
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-3 bg-black bg-opacity-50 border border-secondary h-100 d-flex flex-column justify-content-center">
              <h3 className="h4 text-info fw-semibold mb-3">Mon Parcours</h3>
              <p className="text-light-50 lh-lg mb-3">
                Issu d'un parcours riche dans le commerce et le travail d'équipe, j'ai développé au fil des années une forte capacité d'adaptation, une grande rigueur et un sens aigu de la satisfaction client.
              </p>
              <p className="text-light-50 lh-lg mb-3">
                Passionné par le numérique et la résolution de problèmes, j'ai concrétisé cette vocation en me reconvertissant dans le <strong className="text-white">développement web</strong>. Aujourd'hui spécialisé dans l'écosystème <strong className="text-info">React & JavaScript</strong>, je conçois des applications modernes, fluides et centrées sur l'utilisateur.
              </p>
              <p className="text-light-50 lh-lg mb-0">
                Ma double culture (métier & technique) me permet de comprendre rapidement les besoins d'un projet, de collaborer efficacement et d'apporter une vraie valeur ajoutée au sein d'une équipe tech.
              </p>
            </div>
          </div>

          {/* Colonne Droite : Cartes d'atouts (Grille 2x2) */}
          <div className="col-12 col-lg-6">
            <div className="row g-3">
              
              <div className="col-12 col-sm-6">
                <div className="card h-100 bg-black bg-opacity-25 border-secondary text-white p-3">
                  <div className="card-body p-2">
                    <Code2 className="text-info mb-3" size={32} />
                    <h4 className="card-title h6 fw-bold text-white mb-2">Technique & Pratique</h4>
                    <p className="card-text text-secondary small mb-0">
                      Conception d'applications React modernes, intégration responsive et logique Full Stack.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="card h-100 bg-black bg-opacity-25 border-secondary text-white p-3">
                  <div className="card-body p-2">
                    <Users className="text-info mb-3" size={32} />
                    <h4 className="card-title h6 fw-bold text-white mb-2">Esprit d'Équipe</h4>
                    <p className="card-text text-secondary small mb-0">
                      Habitué au travail collaboratif, à l'écoute active et à la synergie de groupe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="card h-100 bg-black bg-opacity-25 border-secondary text-white p-3">
                  <div className="card-body p-2">
                    <Target className="text-info mb-3" size={32} />
                    <h4 className="card-title h6 fw-bold text-white mb-2">Orientation Résultats</h4>
                    <p className="card-text text-secondary small mb-0">
                      Culture de l'objectif, gestion du stress et rigueur acquises sur le terrain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="card h-100 bg-black bg-opacity-25 border-secondary text-white p-3">
                  <div className="card-body p-2">
                    <Award className="text-info mb-3" size={32} />
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
    </section>
  )
}

export default About