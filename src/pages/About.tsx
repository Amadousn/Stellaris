import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Nous repoussons constamment les limites pour offrir des solutions créatives et avant-gardistes.'
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Expertise',
      description: 'Notre équipe passionnée maîtrise les dernières technologies et tendances du digital.'
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Engagement',
      description: 'Nous nous engageons à 100% dans chaque projet pour garantir votre satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À Propos de Nous
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nous sommes une agence digitale passionnée par la création d'expériences web exceptionnelles
          </p>
        </motion.div>

        {/* Histoire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Notre Histoire
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Fondée avec la vision de transformer le paysage digital, Stellaris s'est rapidement imposée comme un acteur majeur dans le développement web et le marketing digital. Notre approche unique combine créativité, expertise technique et stratégie pour offrir des solutions qui dépassent les attentes de nos clients.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Aujourd'hui, nous continuons d'innover et d'évoluer, en restant à la pointe des dernières technologies et tendances du web pour offrir à nos clients les meilleures solutions possibles.
            </p>
          </div>
        </motion.div>

        {/* Nos Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4 text-secondary group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bannière finale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
