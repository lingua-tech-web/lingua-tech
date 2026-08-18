import React from 'react';
import { Code, Smartphone, Cpu, Plane, Monitor } from 'lucide-react';
import './TechPrograms.css';

const programs = [
  {
    title: "Programmation Informatique",
    icon: <Code size={40} />,
    description: "Apprenez les langages et frameworks modernes pour construire des systèmes logiciels robustes.",
    color: "blue"
  },
  {
    title: "Développement Web & Mobile",
    icon: <Smartphone size={40} />,
    description: "Créez des sites web responsives et des applications mobiles multiplateformes.",
    color: "orange"
  },
  {
    title: "Intelligence Artificielle",
    icon: <Cpu size={40} />,
    description: "Plongez dans l'apprentissage automatique, la science des données et l'automatisation intelligente.",
    color: "teal"
  },
  {
    title: "Pilotage de Drones",
    icon: <Plane size={40} />,
    description: "Maîtrisez la technologie aérienne pour l'arpentage, la photographie et les applications avancées.",
    color: "purple"
  },
  {
    title: "Technologies Innovantes",
    icon: <Monitor size={40} />,
    description: "Gardez une longueur d'avance avec les tendances technologiques de pointe et des formations spécialisées.",
    color: "dark"
  }
];

const TechPrograms = () => {
  return (
    <section id="technology" className="section tech-section">
      <div className="tech-bg"></div>
      <div className="container relative">
        <h2 className="section-title text-white">Formation aux Technologies Modernes</h2>
        <p className="section-subtitle text-light">
          Un enseignement pratique et concret dans les domaines technologiques les plus demandés aujourd'hui.
        </p>

        <div className="tech-container">
          {programs.map((prog, idx) => (
            <div key={idx} className={`tech-card color-${prog.color}`}>
              <div className="tech-icon">{prog.icon}</div>
              <h3 className="tech-title">{prog.title}</h3>
              <p className="tech-desc">{prog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechPrograms;
