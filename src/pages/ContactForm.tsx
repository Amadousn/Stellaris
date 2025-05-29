import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import DynamicForm from '../components/forms/DynamicForm';
import '../styles/ia-enhancements.css';

const ContactForm: React.FC = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  // Extraire les paramètres de l'URL
  const service = searchParams.get('service') || '';
  const type = searchParams.get('type') || '';
  const source = searchParams.get('source') || location.pathname;
  
  // Animation pour les éléments de la page
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Déterminer le titre et la description en fonction du type de demande
  const getPageTitle = () => {
    if (location.pathname.includes('/devis')) {
      return 'Demande de devis';
    }
    
    switch (type) {
      case 'quote':
        return 'Demande de devis';
      case 'support':
        return 'Support technique';
      default:
        return 'Contactez-nous';
    }
  };
  
  const getPageDescription = () => {
    if (location.pathname.includes('/devis')) {
      return 'Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre projet.';
    }
    
    switch (type) {
      case 'quote':
        return 'Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé pour votre projet.';
      case 'support':
        return 'Notre équipe technique est là pour vous aider. Décrivez votre problème et nous vous répondrons rapidement.';
      default:
        return 'Une question, un projet ou besoin d\'informations ? Nous sommes là pour vous répondre.';
    }
  };
  
  // Effet pour définir le titre de la page
  useEffect(() => {
    document.title = `${getPageTitle()} | Stellaris`;
    
    // Scroll vers le haut de la page
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen relative overflow-hidden pt-40 pb-20">
      {/* Fond avec effet de particules */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40"></div>
      
      {/* Effet de lumière subtil */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-secondary/5 to-transparent opacity-50 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent stl-neon-text">
              {getPageTitle()}
            </h1>
            <p className="text-xl text-gray-300">
              {getPageDescription()}
            </p>
          </motion.div>

          {/* Formulaire dynamique */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
            }}
          >
            <DynamicForm 
              initialService={service} 
              initialRequestType={type as any} 
              source={source}
            />
          </motion.div>
          
          {/* Informations de contact */}
          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { 
                  duration: 0.5, 
                  delay: 0.4,
                  staggerChildren: 0.1
                } 
              }
            }}
          >
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Téléphone</h3>
              <a
                href="tel:+33752036246"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                07 52 03 62 46
              </a>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a
                href="mailto:contact@stellariscreations.com"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                contact@stellariscreations.com
              </a>
            </motion.div>
            
            <motion.div 
              className="text-center"
              variants={fadeIn}
            >
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Adresse</h3>
              <address className="text-gray-300 not-italic">
                115 rue du Général-Leclerc<br />
                93220 Gagny
              </address>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
