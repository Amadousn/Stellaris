import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const VideoDevisForm = () => {
  const [formData, setFormData] = useState({
    objective: '',
    audience: '',
    videoCount: '',
    structure: '',
    duration: '',
    socialMedia: '',
    references: '',
    shootingDate: '',
    deliveryDate: '',
    budget: '',
    additionalInfo: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <div className="mb-6">
          <div className="inline-block rounded-full p-3 bg-gradient-to-r from-green-400 to-green-600 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-white">Merci pour ces précieuses informations.</h3>
        <p className="text-xl text-lavender-100">Nous revenons vers vous très vite !</p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-gradient-x">CRÉATION D'UN DEVIS SUR-MESURE : Conception de projets vidéo</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="objective" className="block text-sm font-medium text-lavender-100 mb-1">
            Quel est l'objectif principal de votre projet vidéo ?
            <span className="block text-xs text-gray-400 mt-1">(ex. : mettre en avant un produit, renforcer une image de marque, transmettre un message interne…)</span>
          </label>
          <textarea
            id="objective"
            name="objective"
            value={formData.objective}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="audience" className="block text-sm font-medium text-lavender-100 mb-1">
            À qui s'adresse cette vidéo ?
            <span className="block text-xs text-gray-400 mt-1">(Public cible, secteur d'activité, profil type…)</span>
          </label>
          <textarea
            id="audience"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="videoCount" className="block text-sm font-medium text-lavender-100 mb-1">
            Combien de vidéos souhaitez-vous réaliser ?
          </label>
          <input
            type="text"
            id="videoCount"
            name="videoCount"
            value={formData.videoCount}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="structure" className="block text-sm font-medium text-lavender-100 mb-1">
            Avez-vous déjà une idée de la structure ou du déroulé ?
            <span className="block text-xs text-gray-400 mt-1">(Si oui, précisez brièvement. Sinon, laissez vide.)</span>
          </label>
          <textarea
            id="structure"
            name="structure"
            value={formData.structure}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-lavender-100 mb-1">
            Quelle serait la durée idéale ?
            <span className="block text-xs text-gray-400 mt-1">(Estimation : courte, moyenne, longue, ou durée précise)</span>
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="socialMedia" className="block text-sm font-medium text-lavender-100 mb-1">
            Souhaitez-vous des déclinaisons pour les réseaux sociaux ?
            <span className="block text-xs text-gray-400 mt-1">(Formats carrés, verticaux, stories, etc.)</span>
          </label>
          <input
            type="text"
            id="socialMedia"
            name="socialMedia"
            value={formData.socialMedia}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="references" className="block text-sm font-medium text-lavender-100 mb-1">
            Avez-vous des références visuelles ou des exemples inspirants à partager ?
          </label>
          <textarea
            id="references"
            name="references"
            value={formData.references}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="shootingDate" className="block text-sm font-medium text-lavender-100 mb-1">
            Y a-t-il déjà des dates ou un lieu de tournage envisagés ?
          </label>
          <input
            type="text"
            id="shootingDate"
            name="shootingDate"
            value={formData.shootingDate}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="deliveryDate" className="block text-sm font-medium text-lavender-100 mb-1">
            À quelle date souhaitez-vous recevoir la vidéo finalisée ?
          </label>
          <input
            type="text"
            id="deliveryDate"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-lavender-100 mb-1">
            Avez-vous défini une enveloppe budgétaire pour ce projet ?
            <span className="block text-xs text-gray-400 mt-1">(Ceci nous aide à adapter au mieux nos recommandations)</span>
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-lavender-100 mb-1">
            Souhaitez-vous ajouter d'autres informations ou contraintes particulières ?
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
          />
        </div>
      </div>

      <div className="pt-6 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-lavender-400 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-lavender-400/20 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Soumettre mes réponses</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-lavender-400 to-blue-500 z-0"></div>
            {/* Effet de halo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-lavender-400/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </motion.div>
      </div>
    </motion.form>
  );
};

export default VideoDevisForm;
