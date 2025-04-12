import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGlobe, FaPencilAlt, FaSearchDollar, FaVideo, FaInstagram } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: 'Création Web',
      description: 'Sites web sur mesure, responsive et optimisés pour vos besoins.',
      link: '/services/creation-site-internet'
    },
    {
      icon: <FaPencilAlt className="w-8 h-8" />,
      title: 'Design Graphique',
      description: 'Identité visuelle, logos, et supports marketing percutants.',
      link: '/services/creation-graphique'
    },
    {
      icon: <FaSearchDollar className="w-8 h-8" />,
      title: 'SEO & Ads',
      description: 'Optimisation pour les moteurs de recherche et campagnes publicitaires.',
      link: '/services/referencement-naturel'
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: 'Marketing Vidéo',
      description: 'Contenu vidéo engageant pour promouvoir votre marque.',
      link: '/services/referencement-video'
    },
    {
      icon: <FaInstagram className="w-8 h-8" />,
      title: 'Réseaux Sociaux',
      description: 'Gestion et stratégie des médias sociaux pour votre entreprise.',
      link: '/services/referencement-social'
    }
  ];

  return (
    <div className="min-h-screen bg-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions digitales complètes pour propulser votre entreprise vers le succès
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="block p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-secondary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="mt-4 text-secondary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    En savoir plus →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
