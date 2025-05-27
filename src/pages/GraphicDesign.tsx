import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaRocket, FaPencilAlt, FaImage, FaVideo, FaMagic, FaSearch, FaLightbulb } from 'react-icons/fa';
import StarryBackground from '../components/StarryBackground';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLeft: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm rounded-xl" />
    <div className="relative p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300">
      <div className="text-4xl text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
            className="flex items-center text-gray-400 group-hover:text-gray-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
              className="w-2 h-2 rounded-full bg-blue-500 mr-3"
            />
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon, isLeft }) => (
  <div className="relative">
    {/* Ligne de connexion */}
    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-800 transform -translate-x-1/2" />
    
    {/* Point sur la timeline */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
        {step}
      </div>
    </motion.div>

    {/* Contenu */}
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative mb-16 w-5/12 ${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
    >
      <div className="relative p-6 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800">
        <div className="text-3xl text-blue-400 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  </div>
);

const GraphicDesign: React.FC = () => {
  const services = [
    {
      icon: <FaPalette />,
      title: 'Identité de Marque',
      description: 'Création d\'une identité visuelle unique et mémorable pour votre entreprise.',
      features: [
        'Création de logo',
        'Charte graphique complète',
        'Guidelines de marque',
        'Déclinaisons supports'
      ]
    },
    {
      icon: <FaImage />,
      title: 'Design Print',
      description: 'Conception de supports de communication imprimés professionnels.',
      features: [
        'Cartes de visite',
        'Brochures et flyers',
        'Affiches publicitaires',
        'Packaging produits'
      ]
    },
    {
      icon: <FaPencilAlt />,
      title: 'Design Digital',
      description: 'Création de visuels optimisés pour vos supports numériques.',
      features: [
        'Posts réseaux sociaux',
        'Bannières web',
        'Newsletters',
        'Présentations digitales'
      ]
    },
    {
      icon: <FaVideo />,
      title: 'Motion Design',
      description: 'Animation de vos contenus pour plus d\'impact et d\'engagement.',
      features: [
        'Animation de logo',
        'Posts animés',
        'Vidéos promotionnelles',
        'Transitions animées'
      ]
    },
    {
      icon: <FaMagic />,
      title: 'Illustration',
      description: 'Création d\'illustrations personnalisées pour vos projets.',
      features: [
        'Illustrations vectorielles',
        'Mascotte de marque',
        'Icônes personnalisées',
        'Infographies'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'UI/UX Design',
      description: 'Conception d\'interfaces utilisateur intuitives et esthétiques.',
      features: [
        'Design d\'interface',
        'Prototypage',
        'Design System',
        'Guidelines UI'
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Découverte',
      description: 'Analyse approfondie de vos besoins, objectifs et de votre identité.',
      icon: <FaSearch />,
      isLeft: true
    },
    {
      step: 2,
      title: 'Recherche',
      description: 'Exploration créative et recherche de concepts innovants.',
      icon: <FaLightbulb />,
      isLeft: false
    },
    {
      step: 3,
      title: 'Création',
      description: 'Développement des designs et itérations selon vos retours.',
      icon: <FaPencilAlt />,
      isLeft: true
    },
    {
      step: 4,
      title: 'Finalisation',
      description: 'Peaufinage des détails et préparation des fichiers finaux.',
      icon: <FaMagic />,
      isLeft: false
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-40 relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Design Graphique
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Donnez vie à votre identité visuelle avec nos services de design graphique sur mesure
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        {/* Processus */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-16"
          >
            Notre Processus
          </motion.h2>
          <div className="relative">
            {process.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <Section>
          <motion.div 
            className="bg-gray-900/40 backdrop-blur-sm p-10 rounded-xl border border-gray-800 hover:border-blue-500/30 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Effet de particules léger */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500/20"
                style={{
                  top: `${20 * i}%`,
                  left: `${25 * i}%`,
                  width: "4px",
                  height: "4px"
                }}
                animate={{
                  y: [-5, 5, -5],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3 + i,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            <div className="text-center relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Prêt à Donner Vie à Vos Idées ?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Button to="/devis" size="lg" className="btn-primary shadow-lg hover:shadow-blue-500/40">
                    <span className="relative z-10">Demander un devis</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Button to="/contact" variant="glass" size="lg" className="btn-outline border-blue-500/50 hover:border-blue-500">
                    <span className="relative z-10">Nous contacter</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </Section>
      </div>
    </div>
  );
};

export default GraphicDesign;
