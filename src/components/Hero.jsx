import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text-wrapper animate-fade-in">
          <span className="badge">Bienvenue chez LinguaTech</span>
          <h1 className="hero-title">
            Apprenez des langues,<br />
            <span className="text-gradient">Développez des technologies,</span><br />
            Créez des opportunités.
          </h1>
          <p className="hero-subtitle">
            Une startup technologique et un centre de formation professionnelle dédiés aux jeunes, à l'innovation et aux opportunités mondiales. Nous vous préparons aux réalités du monde professionnel moderne.
          </p>
          <div className="hero-actions">
            <a href="#languages" className="btn btn-primary btn-lg">Explorer les programmes</a>
            <a href="#accueil" className="btn btn-outline btn-lg flex-center">
              Accueil <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
