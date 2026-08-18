import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: "Sorel Tshibangu",
    role: "Fondateur & PDG",
    description: "Devellopeur logiciel et Entrepreneur technologique de la RDC, Connu pour travailler sur des projets numeriques liés à l'éducation, aux langue, aux communautés et à la transformation digital.",
    image: "/team/picture5.jpg",
    social: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    id: 2,
    name: "Marie Curie",
    role: "Responsable Pédagogique",
    description: "Experte en linguistique, Marie s'assure que nos programmes linguistiques sont à la pointe de l'innovation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    social: { linkedin: "#", twitter: "#", email: "#" }
  },
  {
    id: 3,
    name: "Danny Makongo",
    role: "Développeur Principal",
    description: "ingenieur En informatique, Un Entrepreneur et Expert En Langue et , Grâce à son esprit entrepreneurial, il met en place des plateformes, applications ou services digitaux visant à faciliter la communication, l’éducation, le commerce et l’accès à l’information. Son objectif est de contribuer au développement de la communauté.",
    image: "/team/picture6.jpg",
    social: { linkedin: "#", twitter: "#", email: "#" }
  }
];

const Team = () => {
  return (
    <section id="equipe" className="section team-section">
      <div className="container">
        <h2 className="section-title">Notre Équipe Dirigeante</h2>
        <p className="section-subtitle">
          Rencontrez les esprits brillants qui propulsent LinguaTech vers l'avenir, alliant expertise technique et passion pour l'éducation.
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-social">
                  <a href={member.social.linkedin} className="team-social-link"><Linkedin size={18} /></a>
                  <a href={member.social.twitter} className="team-social-link"><Twitter size={18} /></a>
                  <a href={member.social.email} className="team-social-link"><Mail size={18} /></a>
                </div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <h4 className="team-role">{member.role}</h4>
                <p className="team-desc">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
