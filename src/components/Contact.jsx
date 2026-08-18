import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [service, setService] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3lf0xzr', 'nu28w5i', form.current, {
        publicKey: 'Niw3rSB4eDJZ8Va6a',
      })
      .then(
        () => {
          alert('Formulaire soumis avec succès !');
          form.current.reset();
          setService("");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
        },
      );
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contactez-nous & Postulez</h2>
        <p className="section-subtitle">
          Remplissez le formulaire ci-dessous pour postuler ou nous contacter directement.
        </p>
        
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <h3>Envoyez-nous un message</h3>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              
              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="name">Nom complet *</label>
                  <input type="text" id="name" name="name" placeholder="Votre nom complet" required />
                </div>
                <div className="form-group half">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" placeholder="Votre adresse email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="phone">Téléphone *</label>
                  <input type="tel" id="phone" name="phone" placeholder="Votre numéro de téléphone" required />
                </div>
                <div className="form-group half">
                  <label htmlFor="city">Commune / Ville *</label>
                  <input type="text" id="city" name="city" placeholder="Votre commune ou ville" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="profession">Profession *</label>
                <input type="text" id="profession" name="profession" placeholder="Votre profession actuelle" required />
              </div>

              <div className="form-group">
                <label htmlFor="service">Type de demande *</label>
                <select id="service" name="service" value={service} onChange={(e) => setService(e.target.value)} required>
                  <option value="" disabled>Sélectionnez un service...</option>
                  <option value="inscription à une formation">Inscription à une formation</option>
                  <option value="demande d'information">Demande d'information</option>
                  <option value="formation en entreprise">Formation en entreprise</option>
                  <option value="coaching/accompagnement">Coaching / Accompagnement</option>
                  <option value="service informatique">Service informatique</option>
                  <option value="developpement web/mobile">Développement web/mobile</option>
                  <option value="intelligence artificielle">Intelligence artificielle</option>
                  <option value="Marketing digitl">Marketing digital</option>
                  <option value="langues">Langues</option>
                  <option value="design graphique">Design graphique</option>
                  <option value="autre">Autre...</option>
                </select>
              </div>

              {/* Dynamic fields based on the selected service */}
              {service === "formation en entreprise" && (
                <div className="form-group dynamic-field">
                  <label htmlFor="company">Nom de l'entreprise *</label>
                  <input type="text" id="company" name="company" placeholder="Nom de votre entreprise" required />
                </div>
              )}

              {(service === "inscription à une formation" || service === "langues") && (
                <div className="form-group dynamic-field">
                  <label htmlFor="level">Niveau actuel</label>
                  <input type="text" id="level" name="level" placeholder="Ex: Débutant, Intermédiaire, etc." />
                </div>
              )}
              
              {(service === "developpement web/mobile" || service === "design graphique" || service === "service informatique" || service === "intelligence artificielle") && (
                <div className="form-group dynamic-field">
                  <label htmlFor="projectDetails">Brève description de votre projet</label>
                  <input type="text" id="projectDetails" name="project_details" placeholder="Quelques mots sur vos besoins" />
                </div>
              )}

              <div className="form-row">
                <div className="form-group half">
                  <label htmlFor="date">Date souhaitée *</label>
                  <input type="date" id="date" name="date" required />
                </div>
                <div className="form-group half">
                  <label htmlFor="time">Heure souhaitée *</label>
                  <input type="time" id="time" name="time" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message ou détails complémentaires *</label>
                <textarea id="message" name="message" rows="4" placeholder="Votre message..." required></textarea>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="privacy_consent" required />
                  <span>J'accepte la politique de confidentialité et je confirme l'exactitude de ces informations. *</span>
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-submit">Soumettre la demande</button>
                <a 
                  href="https://wa.me/243815861285" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="whatsapp-icon" />
                  Discuter avec nous sur WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
