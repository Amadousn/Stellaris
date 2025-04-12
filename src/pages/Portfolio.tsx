import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLink, FaSearch } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

interface FilterButtonProps {
  category: string;
  active: boolean;
  onClick: () => void;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ category, active, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
      ${active 
        ? 'bg-blue-500 text-white' 
        : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
  >
    {category}
  </motion.button>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -5 }}
    className="relative group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative overflow-hidden rounded-xl">
      {/* Image */}
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">
            {project.description.substring(0, 100)}...
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Icône de zoom */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
          <FaSearch className="text-white text-xl" />
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      onClick={e => e.stopPropagation()}
      className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
    >
      {/* Image */}
      <div className="relative h-80">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h2>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">
            Technologies utilisées
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
        >
          <FaLink />
          Voir le projet
        </a>
      </div>

      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors duration-300"
      >
        ×
      </button>
    </motion.div>
  </motion.div>
);

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Tous', 'Sites Web', 'Applications', 'E-commerce', 'Design'];

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Luxe',
      category: 'E-commerce',
      image: '/images/portfolio/ecommerce-luxe.jpg',
      description: 'Une plateforme e-commerce haut de gamme avec une expérience utilisateur exceptionnelle. Interface épurée, animations fluides et tunnel d\'achat optimisé pour maximiser les conversions.',
      technologies: ['React', 'Next.js', 'Stripe', 'Tailwind CSS', 'Prisma'],
      link: 'https://example.com/ecommerce-luxe'
    },
    {
      id: '2',
      title: 'Application Mobile Fitness',
      category: 'Applications',
      image: '/images/portfolio/fitness-app.jpg',
      description: 'Application mobile de suivi fitness avec fonctionnalités sociales, tracking GPS et analyses personnalisées. Design moderne et expérience utilisateur intuitive.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Node.js'],
      link: 'https://example.com/fitness-app'
    },
    {
      id: '3',
      title: 'Site Vitrine Immobilier',
      category: 'Sites Web',
      image: '/images/portfolio/real-estate.jpg',
      description: 'Site vitrine moderne pour une agence immobilière de prestige. Mise en valeur du portfolio avec des animations élégantes et une navigation fluide.',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Sanity.io'],
      link: 'https://example.com/real-estate'
    },
    {
      id: '4',
      title: 'Dashboard Analytics',
      category: 'Applications',
      image: '/images/portfolio/dashboard.jpg',
      description: 'Dashboard analytique complexe avec visualisations de données en temps réel, filtres avancés et rapports personnalisables.',
      technologies: ['Vue.js', 'D3.js', 'GraphQL', 'Node.js', 'PostgreSQL'],
      link: 'https://example.com/dashboard'
    },
    {
      id: '5',
      title: 'Marketplace Art Digital',
      category: 'E-commerce',
      image: '/images/portfolio/nft-marketplace.jpg',
      description: 'Marketplace NFT avec authentification Web3, galerie interactive et système d\'enchères en temps réel.',
      technologies: ['React', 'Ethereum', 'Web3.js', 'IPFS', 'Solidity'],
      link: 'https://example.com/nft-marketplace'
    },
    {
      id: '6',
      title: 'Identité de Marque',
      category: 'Design',
      image: '/images/portfolio/branding.jpg',
      description: 'Création complète d\'identité de marque incluant logo, charte graphique, supports print et assets digitaux.',
      technologies: ['Figma', 'Illustrator', 'Photoshop', 'After Effects'],
      link: 'https://example.com/branding'
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'Tous' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-primary pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez nos projets les plus récents et innovants
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <FilterButton
              key={category}
              category={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        {/* Grille de projets */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;
