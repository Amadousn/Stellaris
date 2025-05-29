import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGlobe, FaPencilAlt, FaSearch, FaVideo, FaArrowRight } from 'react-icons/fa';
import StarryBackground from '../components/StarryBackground';
import Section from '../components/ui/Section';

interface FormuleCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  link: string;
  index: number;
}

const FormuleCard: React.FC<FormuleCardProps> = ({ title, description, features, icon, color, link, index }) => {
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

            {/* Bouton Demander un devis */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 + 0.5 }}
              className="mt-8"
            >
              <span className={`inline-flex items-center ${color} group-hover:translate-x-2 transition-transform duration-300`}>
                Demander un devis
                <FaArrowRight className="ml-2" />
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

// Composant principal
const Formules: React.FC = () => {
  const formules = [
    {
      title: 'Formule Essentiel',
      description: 'Solution idéale pour les petites entreprises et entrepreneurs individuels',
      features: [
        'Site web vitrine responsive',
        'Jusqu\'à 5 pages',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Hébergement inclus'
      ],
      icon: <FaGlobe />,
      color: 'text-blue-400',
      link: '/devis?formule=essentiel&type=web'
    },
    {
      title: 'Formule Business',
      description: 'Pour les entreprises en croissance qui veulent se démarquer',
      features: [
        'Site web dynamique',
        'Jusqu\'à 10 pages',
        'Blog intégré',
        'Optimisation SEO avancée',
        'Hébergement premium',
        'Support prioritaire',
        'Analytics avancés'
      ],
      icon: <FaGlobe />,
      color: 'text-indigo-400',
      link: '/devis?formule=business&type=web'
    },
    {
      title: 'Formule Premium',
      description: 'Solution complète pour les projets ambitieux',
      features: [
        'Site web sur mesure',
        'Pages illimitées',
        'E-commerce intégré',
        'SEO professionnel',
        'Hébergement haute performance',
        'Support 24/7',
        'Analytics en temps réel',
        'Maintenance mensuelle'
      ],
      icon: <FaGlobe />,
      color: 'text-violet-400',
      link: '/devis?formule=premium&type=web'
    },
    {
      title: 'Identité Visuelle',
      description: 'Création d\'une identité de marque complète et cohérente',
      features: [
        'Logo professionnel',
        'Charte graphique',
        'Palette de couleurs',
        'Typographie',
        'Éléments graphiques',
        'Guide d\'utilisation'
      ],
      icon: <FaPencilAlt />,
      color: 'text-cyan-400',
      link: '/devis?formule=identite&type=graphique'
    },
    {
      title: 'Marketing Vidéo',
      description: 'Production vidéo professionnelle pour promouvoir votre activité',
      features: [
        'Vidéos promotionnelles',
        'Motion design',
        'Animations 2D/3D',
        'Montage professionnel',
        'Optimisation pour le web',
        'Formats adaptés aux réseaux sociaux'
      ],
      icon: <FaVideo />,
      color: 'text-teal-400',
      link: '/devis?formule=video&type=video'
    },
    {
      title: 'Référencement & Marketing',
      description: 'Stratégies pour augmenter votre visibilité en ligne',
      features: [
        'Audit SEO complet',
        'Optimisation on-page',
        'Stratégie de contenu',
        'Gestion des réseaux sociaux',
        'Campagnes publicitaires',
        'Rapports de performance'
      ],
      icon: <FaSearch />,
      color: 'text-sky-400',
      link: '/devis?formule=marketing&type=marketing'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Fond étoilé */}
      <div className="absolute inset-0 z-0">
        <StarryBackground />
      </div>
      
      {/* Particules flottantes simplifiées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary-light/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "2px",
              height: "2px"
            }}
          />
        ))}
      </div>
      
      {/* En-tête */}
      <Section>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos Formules
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des solutions adaptées à tous les besoins pour propulser votre présence en ligne
            </p>
          </motion.div>

          {/* Grille de formules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formules.map((formule, index) => (
              <FormuleCard
                key={formule.title}
                {...formule}
                index={index}
              />
            ))}
          </div>

          {/* Section de devis personnalisé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Besoin d'une solution sur-mesure ?
            </h2>
            <p className="text-gray-400 mb-8">
              Nos formules ne correspondent pas exactement à vos besoins ? Demandez un devis personnalisé.
            </p>
            <Link
              to="/devis"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              Devis personnalisé
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Formules;
