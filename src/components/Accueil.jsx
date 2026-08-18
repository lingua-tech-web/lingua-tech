import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';
import './Accueil.css';

const Accueil = () => {
  const cards = [
    {
      icon: <Target size={32} className="text-primary" />,
      title: "Notre Mission",
      description: "Former et accompagner les jeunes dans des domaines stratégiques, en les préparant aux réalités du monde professionnel moderne."
    },
    {
      icon: <Users size={32} className="text-secondary" />,
      title: "Notre Public",
      description: "Les jeunes à la recherche d'opportunités, et les entreprises ou institutions à la recherche de solutions numériques sur mesure."
    },
    {
      icon: <Lightbulb size={32} className="text-accent" />,
      title: "Notre Vision",
      description: "Bâtir une génération de jeunes compétents, ouverts sur le monde et prêts à saisir les opportunités mondiales grâce aux langues et à la technologie."
    }
  ];

  return (
    <section id="accueil" className="section bg-white">
      <div className="container">
        <h2 className="section-title">À propos de LinguaTech</h2>
        <p className="section-subtitle">
          Plus qu'un simple centre de formation, nous sommes un pont vers l'emploi, la collaboration internationale et l'entrepreneuriat.
        </p>

        <div className="accueil-grid">
          {cards.map((card, index) => (
            <div key={index} className="accueil-card">
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accueil;
