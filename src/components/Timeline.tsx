import React from 'react';
import { motion } from 'framer-motion';
import { FaComments, FaSearch, FaFileContract, FaLaptopCode, FaCheckCircle, FaRocket } from 'react-icons/fa';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const steps: TimelineStep[] = [
  {
    id: 1,
    title: 'Consultation Initiale',
    description: 'Discussion approfondie de vos besoins et objectifs',
    icon: <FaComments className="w-6 h-6" />,
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 2,
    title: 'Analyse des Besoins',
    description: 'Étude détaillée et recherche de solutions optimales',
    icon: <FaSearch className="w-6 h-6" />,
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 3,
    title: 'Proposition et Devis',
    description: 'Présentation de la solution et estimation détaillée',
    icon: <FaFileContract className="w-6 h-6" />,
    color: 'from-pink-400 to-pink-600'
  },
  {
    id: 4,
    title: 'Design et Développement',
    description: 'Création et implémentation de votre solution',
    icon: <FaLaptopCode className="w-6 h-6" />,
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    id: 5,
    title: 'Tests et Ajustements',
    description: 'Vérification approfondie et optimisations',
    icon: <FaCheckCircle className="w-6 h-6" />,
    color: 'from-green-400 to-green-600'
  },
  {
    id: 6,
    title: 'Lancement et Suivi',
    description: 'Mise en production et support continu',
    icon: <FaRocket className="w-6 h-6" />,
    color: 'from-orange-400 to-orange-600'
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Notre Processus</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une approche structurée et transparente pour transformer votre vision en réalité
          </p>
        </motion.div>

        <div className="relative">
          {/* Ligne centrale avec effet de gradient et glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px">
            <div className="h-full w-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-sm" />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-pink-500/20" />
          </div>

          {/* Étapes */}
          <div className="relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 50
                }}
                className={`flex items-center mb-32 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Contenu */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  >
                    <motion.h3 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      className="text-2xl font-bold text-white mb-3"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className="text-gray-400 text-lg"
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </div>

                {/* Point central avec icône */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    {/* Cercle de glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-30 scale-150`} />
                    
                    {/* Icône */}
                    <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg z-10`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Espace pour l'autre côté */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
