import React from 'react';
import StarryBackground from '../components/StarryBackground';
import Section from '../components/ui/Section';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Ajout de l'import pour motion

const PortfolioEnConstruction: React.FC = () => {
  return (
    <>
      <StarryBackground />
      <Section className="py-20 text-center flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio en Construction
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nous sommes en train de rassembler nos plus belles créations pour vous les présenter.
            <br />
            Revenez bientôt pour découvrir nos projets !
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default PortfolioEnConstruction;
