import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGlobe, FaPencilAlt, FaSearch, FaVideo, FaInstagram, FaAd } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon, color, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      <Link to={link}>
        <motion.div
          whileHover={{ y: -5 }}
          className="relative group h-full"
        >
          {/* Fond avec effet de verre */}
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm rounded-xl" />
          
          {/* Contenu */}
          <div className="relative p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300 h-full">
            {/* Icône */}
            <div className={`text-5xl mb-6 ${color} transition-transform duration-300 group-hover:scale-110`}>
              {icon}
            </div>
            
            {/* Titre et Description */}
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>
            
            {/* Liste des caractéristiques */}
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                  className="flex items-center text-gray-400 group-hover:text-gray-300"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className={`w-2 h-2 rounded-full ${color.replace('text', 'bg')} mr-3`}
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Bouton En savoir plus */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              className="mt-8"
            >
              <span className={`inline-flex items-center ${color} group-hover:translate-x-2 transition-transform duration-300`}>
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </motion.div>

            {/* Effet de glow */}
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-300 rounded-xl" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Création Web',
      description: 'Sites web modernes et applications sur mesure pour votre entreprise',
      features: [
        'Design responsive et moderne',
        'Optimisation des performances',
        'Interface utilisateur intuitive',
        'Solutions e-commerce'
      ],
      icon: <FaGlobe />,
      color: 'text-blue-400',
      link: '/services/creation-site-internet'
    },
    {
      title: 'Design Graphique',
      description: 'Création d\'identité visuelle et supports marketing impactants',
      features: [
        'Logo et charte graphique',
        'Supports print et digitaux',
        'Design d\'interface (UI/UX)',
        'Illustrations sur mesure'
      ],
      icon: <FaPencilAlt />,
      color: 'text-indigo-400',
      link: '/services/creation-graphique'
    },
    {
      title: 'Référencement SEO',
      description: 'Optimisation pour les moteurs de recherche et visibilité en ligne',
      features: [
        'Audit SEO complet',
        'Optimisation on-page',
        'Stratégie de contenu',
        'Suivi des performances'
      ],
      icon: <FaSearch />,
      color: 'text-violet-400',
      link: '/services/referencement-naturel'
    },
    {
      title: 'Marketing Vidéo',
      description: 'Production et stratégie de contenu vidéo engageant',
      features: [
        'Vidéos promotionnelles',
        'Motion design',
        'Animations 2D/3D',
        'Montage professionnel'
      ],
      icon: <FaVideo />,
      color: 'text-cyan-400',
      link: '/services/referencement-video'
    },
    {
      title: 'Réseaux Sociaux',
      description: 'Gestion et animation de vos réseaux sociaux',
      features: [
        'Stratégie social media',
        'Création de contenu',
        'Community management',
        'Analyse des performances'
      ],
      icon: <FaInstagram />,
      color: 'text-teal-400',
      link: '/services/referencement-social'
    },
    {
      title: 'Publicité en Ligne',
      description: 'Campagnes publicitaires ciblées et performantes',
      features: [
        'Google Ads',
        'Facebook Ads',
        'Remarketing',
        'Analyse ROI'
      ],
      icon: <FaAd />,
      color: 'text-sky-400',
      link: '/services/referencement-sponsorise'
    }
  ];

  return (
    <div className="min-h-screen bg-primary pt-24 pb-16">
      {/* En-tête */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des solutions numériques complètes pour propulser votre entreprise vers de nouveaux horizons
          </p>
        </motion.div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
