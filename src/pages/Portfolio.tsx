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
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Fond étoilé */}
      <div className="absolute inset-0 z-0">
        <StarryBackground />
      </div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-secondary-light/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "2px",
              height: "2px"
            }}
          />
        ))}
      </div>
      
      <Section>
        <div className="relative z-10">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
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
        
        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900/90 to-gray-800/70 p-8 rounded-xl border border-blue-500/20 shadow-xl mt-16 mb-12 relative overflow-hidden"
        >
          {/* Effet de particules */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.4 + Math.random() * 0.6
                }}
                animate={{
                  y: [0, Math.random() * -20 - 10],
                  opacity: [0.7, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + Math.random() * 3,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-gray-300 mb-6">
                Notre équipe est prête à transformer votre vision en réalité. Contactez-nous pour discuter de votre prochain projet digital et obtenir un devis personnalisé.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact?type=quote&source=portfolio"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                >
                  Discuter de votre projet
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            <div className="flex justify-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 flex items-center justify-center">
                      <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Orbites */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow" style={{ animationDuration: '15s' }} />
                <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-spin-slow" style={{ animationDuration: '25s', transform: 'rotate(45deg)' }} />
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Témoignages - Temporairement commentés en attendant de vrais témoignages */}
        {/*
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ce que nos clients disent de nous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Marie Dupont",
                company: "Startup Innovation",
                text: "L'équipe de Stellaris a transformé notre vision en une plateforme web exceptionnelle. Leur expertise technique et leur créativité ont dépassé nos attentes."
              },
              {
                name: "Thomas Lefebvre",
                company: "Agence Immobilière Prestige",
                text: "Notre site vitrine réalisé par Stellaris nous a permis d'augmenter notre visibilité en ligne de 200%. Un travail professionnel et des résultats concrets."
              },
              {
                name: "Sophie Martin",
                company: "E-commerce Mode",
                text: "De la conception à la mise en ligne, Stellaris nous a accompagnés avec professionnalisme. Notre boutique en ligne est non seulement belle mais aussi performante."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index + 0.6 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        */}

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
      </Section>
    </div>
  );
};

export default Portfolio;
