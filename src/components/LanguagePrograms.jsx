import React from 'react';
import './LanguagePrograms.css';

const languages = [
  { name: 'Anglais', flag: '🇬🇧', code: 'en' },
  { name: 'Français', flag: '🇫🇷', code: 'fr' },
  { name: 'Russe', flag: '🇷🇺', code: 'ru' },
  { name: 'Espagnol', flag: '🇪🇸', code: 'es' },
  { name: 'Portugais', flag: '🇵🇹', code: 'pt' },
  { name: 'Allemand', flag: '🇩🇪', code: 'de' },
  { name: 'Mandarin', flag: '🇨🇳', code: 'zh' },
  { name: 'Et plus encore...', flag: '🌍', code: 'other' }
];

const LanguagePrograms = () => {
  return (
    <section id="languages" className="section bg-gray">
      <div className="container">
        <div className="language-header">
          <div className="language-title-area">
            <h2 className="section-title text-left">Maîtrisez les langues mondiales</h2>
            <p className="section-subtitle text-left m-0">
              Développez vos compétences en communication internationale pour débloquer des opportunités académiques, professionnelles et culturelles à travers le monde.
            </p>
          </div>
        </div>
        
        <div className="language-grid">
          {languages.map((lang, index) => (
            <div key={index} className={`language-card delay-${index % 4}`}>
              <div className="flag-icon">{lang.flag}</div>
              <h4 className="language-name">{lang.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagePrograms;
