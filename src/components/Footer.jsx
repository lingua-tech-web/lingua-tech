import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <img src="/logo_lingua.JPG" alt="LinguaTech Logo" style={{ height: '64px', width: 'auto', borderRadius: '12px', marginBottom: '12px', objectFit: 'contain', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', backgroundColor: 'white', padding: '4px' }} className="logo-image" />
              <span className="logo-text text-white">LinguaTech</span>
            </div>
            <p className="footer-desc">
              Apprenez des langues, développez des technologies, créez des opportunités.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#languages">Langues</a></li>
              <li><a href="#technology">Technologie</a></li>
              <li><a href="#equipe">Équipe</a></li>
              <li><a href="#opportunities">Opportunités</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contactez-nous</h4>
            <ul>
              <li><MapPin size={18} /> kongolo, 166B / 3° Nineau Local 1 (Réf : Proche du Rond-Point Huilerie, Face Africana Palace)</li>
              <li><Phone size={18} /> +243 815 613 85 / 808049165</li>
              <li><Mail size={18} /> contact@LinguaTech.IT.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LinguaTech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
