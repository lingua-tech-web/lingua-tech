import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src="/logo_lingua.JPG" alt="LinguaTech Logo" style={{ height: '48px', width: 'auto', borderRadius: '8px', objectFit: 'contain', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} className="logo-image" />
          <span className="logo-text">LinguaTech</span>
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#accueil" onClick={() => setMobileMenuOpen(false)}>Accueil</a>
          <a href="#languages" onClick={() => setMobileMenuOpen(false)}>Langues</a>
          <a href="#technology" onClick={() => setMobileMenuOpen(false)}>Technologie</a>
          <a href="#equipe" onClick={() => setMobileMenuOpen(false)}>Équipe</a>
          <a href="#opportunities" onClick={() => setMobileMenuOpen(false)}>Opportunités</a>
          <a href="#contact" className="btn btn-primary nav-cta">Rejoignez-nous</a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
