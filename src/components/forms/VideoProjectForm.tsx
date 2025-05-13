import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/forms.css';

interface VideoProjectFormProps {
  onSubmit: (formData: any) => void;
}

const VideoProjectForm: React.FC<VideoProjectFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    objective: '',
    targetAudience: '',
    videoCount: '',
    structure: '',
    duration: '',
    socialMediaVersions: '',
    references: '',
    shootingDate: '',
    deliveryDate: '',
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
          <h2 className="form-title">CRÉATION D'UN DEVIS SUR-MESURE : Conception de projets vidéo</h2>
          
          <div className="form-group">
            <label htmlFor="objective">
              Quel est l'objectif principal de votre projet vidéo ?
              <span className="form-hint">(ex. : mettre en avant un produit, renforcer une image de marque, transmettre un message interne…)</span>
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
              À qui s'adresse cette vidéo ?
              <span className="form-hint">(Public cible, secteur d'activité, profil type…)</span>
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
            <label htmlFor="videoCount">
              Combien de vidéos souhaitez-vous réaliser ?
            </label>
            <input 
              type="text" 
              id="videoCount" 
              name="videoCount" 
              value={formData.videoCount}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="structure">
              Avez-vous déjà une idée de la structure ou du déroulé ?
              <span className="form-hint">(Si oui, précisez brièvement. Sinon, laissez vide.)</span>
            </label>
            <textarea 
              id="structure" 
              name="structure" 
              value={formData.structure}
              onChange={handleChange}
              className="form-input"
              rows={3}
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">
              Quelle serait la durée idéale ?
              <span className="form-hint">(Estimation : courte, moyenne, longue, ou durée précise)</span>
            </label>
            <input 
              type="text" 
              id="duration" 
              name="duration" 
              value={formData.duration}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="socialMediaVersions">
              Souhaitez-vous des déclinaisons pour les réseaux sociaux ?
              <span className="form-hint">(Formats carrés, verticaux, stories, etc.)</span>
            </label>
            <input 
              type="text" 
              id="socialMediaVersions" 
              name="socialMediaVersions" 
              value={formData.socialMediaVersions}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="references">
              Avez-vous des références visuelles ou des exemples inspirants à partager ?
            </label>
            <textarea 
              id="references" 
              name="references" 
              value={formData.references}
              onChange={handleChange}
              className="form-input"
              rows={3}
            />
          </div>

          <div className="form-group">
            <label htmlFor="shootingDate">
              Y a-t-il déjà des dates ou un lieu de tournage envisagés ?
            </label>
            <input 
              type="text" 
              id="shootingDate" 
              name="shootingDate" 
              value={formData.shootingDate}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="deliveryDate">
              À quelle date souhaitez-vous recevoir la vidéo finalisée ?
            </label>
            <input 
              type="text" 
              id="deliveryDate" 
              name="deliveryDate" 
              value={formData.deliveryDate}
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

export default VideoProjectForm;
