import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/forms.css';

interface WebProjectFormProps {
  onSubmit: (formData: any) => void;
}

const WebProjectForm: React.FC<WebProjectFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    projectType: '',
    objective: '',
    targetAudience: '',
    features: '',
    design: '',
    existingSite: '',
    contentReady: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <motion.form 
          onSubmit={handleSubmit}
          className="devis-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="form-title">CRÉATION D'UN DEVIS SUR-MESURE : Création de site Web</h2>
          
          <div className="form-group">
            <label htmlFor="projectType">
              Quel type de site souhaitez-vous créer ?
              <span className="form-hint">(Site vitrine, e-commerce, blog, application web, etc.)</span>
            </label>
            <input 
              type="text" 
              id="projectType" 
              name="projectType" 
              value={formData.projectType}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="objective">
              Quels sont les objectifs principaux de votre site web ?
              <span className="form-hint">(Vendre des produits, générer des leads, informer, etc.)</span>
            </label>
            <textarea 
              id="objective" 
              name="objective" 
              value={formData.objective}
              onChange={handleChange}
              className="form-input"
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="targetAudience">
              Qui est votre public cible ?
              <span className="form-hint">(Âge, profession, centres d'intérêt, etc.)</span>
            </label>
            <textarea 
              id="targetAudience" 
              name="targetAudience" 
              value={formData.targetAudience}
              onChange={handleChange}
              className="form-input"
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="features">
              Quelles fonctionnalités souhaitez-vous intégrer à votre site ?
              <span className="form-hint">(Formulaire de contact, blog, espace membre, paiement en ligne, etc.)</span>
            </label>
            <textarea 
              id="features" 
              name="features" 
              value={formData.features}
              onChange={handleChange}
              className="form-input"
              rows={4}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="design">
              Avez-vous des préférences en termes de design ?
              <span className="form-hint">(Style, couleurs, références de sites que vous aimez, etc.)</span>
            </label>
            <textarea 
              id="design" 
              name="design" 
              value={formData.design}
              onChange={handleChange}
              className="form-input"
              rows={3}
            />
          </div>

          <div className="form-group">
            <label htmlFor="existingSite">
              Avez-vous déjà un site web existant ?
              <span className="form-hint">(Si oui, merci de préciser l'URL et ce que vous souhaitez conserver ou modifier)</span>
            </label>
            <textarea 
              id="existingSite" 
              name="existingSite" 
              value={formData.existingSite}
              onChange={handleChange}
              className="form-input"
              rows={2}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contentReady">
              Disposez-vous déjà du contenu pour votre site ?
              <span className="form-hint">(Textes, images, logo, etc.)</span>
            </label>
            <input 
              type="text" 
              id="contentReady" 
              name="contentReady" 
              value={formData.contentReady}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeline">
              Quel est votre calendrier pour ce projet ?
              <span className="form-hint">(Date de lancement souhaitée, contraintes particulières, etc.)</span>
            </label>
            <input 
              type="text" 
              id="timeline" 
              name="timeline" 
              value={formData.timeline}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">
              Avez-vous défini une enveloppe budgétaire pour ce projet ?
              <span className="form-hint">(Ceci nous aide à adapter au mieux nos recommandations)</span>
            </label>
            <input 
              type="text" 
              id="budget" 
              name="budget" 
              value={formData.budget}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="additionalInfo">
              Souhaitez-vous ajouter d'autres informations ou contraintes particulières ?
            </label>
            <textarea 
              id="additionalInfo" 
              name="additionalInfo" 
              value={formData.additionalInfo}
              onChange={handleChange}
              className="form-input"
              rows={4}
            />
          </div>

          <button type="submit" className="submit-button">
            Soumettre mes réponses
          </button>
        </motion.form>
      ) : (
        <motion.div 
          className="confirmation-message"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Merci pour ces précieuses informations.</h2>
          <p>Nous revenons vers vous très vite !</p>
        </motion.div>
      )}
    </div>
  );
};

export default WebProjectForm;
