import React from 'react';
import { motion } from 'framer-motion';
import { useFormContext } from '../../context/FormContext';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const SuccessMessage: React.FC = () => {
  const { formData, resetForm } = useFormContext();

  // Animation pour l'apparition du message
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Message personnalisé en fonction du type de demande
  const getSuccessTitle = () => {
    switch (formData.requestType) {
      case 'quote':
        return 'Votre demande de devis a été envoyée !';
      case 'support':
        return 'Votre demande de support a été enregistrée !';
      default:
        return 'Votre message a bien été envoyé !';
    }
  };

  const getSuccessMessage = () => {
    switch (formData.requestType) {
      case 'quote':
        return 'Nous vous remercions pour votre demande de devis. Notre équipe l\'examinera dans les plus brefs délais et vous contactera sous 24 à 48 heures ouvrées pour discuter de votre projet en détail.';
      case 'support':
        return 'Votre demande de support a été enregistrée avec succès. Un membre de notre équipe technique vous contactera rapidement pour résoudre votre problème. Notre délai de réponse habituel est de 24 heures ouvrées.';
      default:
        return 'Merci pour votre message ! Nous vous répondrons dans les meilleurs délais. Notre équipe s\'efforce de répondre à toutes les demandes sous 48 heures ouvrées.';
    }
  };

  return (
    <motion.div
      className="text-center p-8 rounded-2xl bg-gradient-to-b from-secondary/20 to-transparent border border-secondary/30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Icône de succès animée */}
      <motion.div
        className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center"
        variants={itemVariants}
      >
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>
      
      {/* Titre */}
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-4 text-white"
        variants={itemVariants}
      >
        {getSuccessTitle()}
      </motion.h2>
      
      {/* Message */}
      <motion.p 
        className="text-gray-300 mb-8 max-w-2xl mx-auto"
        variants={itemVariants}
      >
        {getSuccessMessage()}
      </motion.p>
      
      {/* Numéro de référence */}
      <motion.div 
        className="mb-8 p-4 bg-white/5 rounded-lg inline-block"
        variants={itemVariants}
      >
        <p className="text-gray-400 text-sm">Référence de votre demande</p>
        <p className="text-white font-mono text-lg">
          {`STL-${Date.now().toString().substring(5)}`}
        </p>
      </motion.div>
      
      {/* Boutons d'action */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        variants={itemVariants}
      >
        <Button 
          variant="glass" 
          onClick={resetForm}
        >
          Nouvelle demande
        </Button>
        
        <Link to="/">
          <Button variant="primary">
            Retour à l'accueil
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SuccessMessage;
