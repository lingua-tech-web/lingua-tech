import React from 'react';
import { Briefcase, Building, Globe2, Rocket } from 'lucide-react';
import './Opportunities.css';

const Opportunities = () => {
  return (
    <section id="opportunities" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Créer des Opportunités</h2>
        <p className="section-subtitle">
          Nous n'enseignons pas seulement. Nous connectons les talents au monde réel grâce à des partenariats solides et des voies concrètes vers le succès.
        </p>

        <div className="opp-grid">
          <div className="opp-card">
            <Briefcase className="opp-icon" size={32} />
            <h4>Emplois et Stages</h4>
            <p>Assistance au placement direct et partenariats avec des entreprises de premier plan à la recherche de nouveaux talents qualifiés.</p>
          </div>
          
          <div className="opp-card">
            <Building className="opp-card-icon" size={32} />
            <h4>Services B2B</h4>
            <p>Fournir aux entreprises et institutions des solutions numériques sur mesure construites par nos meilleures équipes.</p>
          </div>

          <div className="opp-card">
            <Globe2 className="opp-card-icon" size={32} />
            <h4>Collaboration Internationale</h4>
            <p>Connectez-vous avec des projets et des équipes mondiales. Brisez les frontières grâce à la langue et à la technologie.</p>
          </div>

          <div className="opp-card">
            <Rocket className="opp-card-icon" size={32} />
            <h4>Entrepreneuriat</h4>
            <p>Incubateur d'idées brillantes. Nous offrons un mentorat pour transformer des concepts en startups technologiques viables.</p>
          </div>
        </div>

        <div className="cta-container">
          <h3>Prêt à commencer votre aventure ?</h3>
          <p>Rejoignez LinguaTech aujourd'hui et construisez l'avenir que vous méritez.</p>
          <a href="#contact" className="btn btn-primary btn-lg">Postulez Maintenant</a>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
