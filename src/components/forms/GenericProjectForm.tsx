import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/forms.css';

interface GenericProjectFormProps {
  onSubmit: (formData: any) => void;
}

const GenericProjectForm: React.FC<GenericProjectFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    projectType: '',
    description: '',
    objectives: '',
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
          <h2 className="form-title">CRÉATION D'UN DEVIS SUR-MESURE : Autres projets</h2>
          
          <div className="form-group">
            <label htmlFor="projectType">
              Quel type de projet souhaitez-vous réaliser ?
              <span className="form-hint">(Design graphique, marketing, comptabilité, etc.)</span>
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
            <label htmlFor="description">
              Décrivez votre projet en quelques lignes
            </label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description}
              onChange={handleChange}
              className="form-input"
              rows={5}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="objectives">
              Quels sont les objectifs principaux de votre projet ?
            </label>
            <textarea 
              id="objectives" 
              name="objectives" 
              value={formData.objectives}
              onChange={handleChange}
              className="form-input"
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeline">
              Quel est votre calendrier pour ce projet ?
              <span className="form-hint">(Date de livraison souhaitée, contraintes particulières, etc.)</span>
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

export default GenericProjectForm;
