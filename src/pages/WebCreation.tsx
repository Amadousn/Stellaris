import React from 'react'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import StarryBackground from '../components/StarryBackground'
import { motion } from 'framer-motion'
import { FaGlobe, FaShoppingCart, FaMobileAlt, FaCogs } from 'react-icons/fa'

const WebCreation = () => {
  const features = [
    {
      title: 'Sites Vitrines',
      description: 'Présentez votre entreprise avec élégance et professionnalisme',
      icon: <FaGlobe className="text-blue-400" />,
    },
    {
      title: 'E-commerce',
      description: 'Vendez vos produits en ligne avec une boutique optimisée',
      icon: <FaShoppingCart className="text-indigo-400" />,
    },
    {
      title: 'Sites Catalogues',
      description: 'Exposez vos produits et services de manière attractive',
      icon: <FaMobileAlt className="text-purple-400" />,
    },
    {
      title: 'Sites Sur-mesure',
      description: 'Solutions personnalisées adaptées à vos besoins spécifiques',
      icon: <FaCogs className="text-cyan-400" />,
    },
  ]

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
      
      {/* Hero Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
          >
            Création de Sites Internet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Des sites web modernes, responsifs et optimisés pour convertir vos visiteurs en clients
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" to="/devis">
              Demander un devis
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
        >
          Nos Services Web
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              <div className="text-4xl mb-4 w-12 h-12 rounded-full bg-gray-800/70 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
              {/* Bordure lumineuse au survol */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Notre Processus
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/30 border border-blue-500/50 flex items-center justify-center shrink-0 text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Analyse & Stratégie</h3>
                <p className="text-gray-400">
                  Nous étudions vos objectifs et définissons ensemble la meilleure stratégie pour votre site web.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full bg-indigo-500/30 border border-indigo-500/50 flex items-center justify-center shrink-0 text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Design & Maquettes</h3>
                <p className="text-gray-400">
                  Création de maquettes personnalisées respectant votre identité visuelle.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-10 h-10 rounded-full bg-purple-500/30 border border-purple-500/50 flex items-center justify-center shrink-0 text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Développement</h3>
                <p className="text-gray-400">
                  Intégration et développement avec les dernières technologies web.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/30 border border-cyan-500/50 flex items-center justify-center shrink-0 text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Tests & Mise en Ligne</h3>
                <p className="text-gray-400">
                  Tests approfondis et déploiement sécurisé de votre site web.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
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
              className="absolute rounded-full bg-secondary/20"
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
              Prêt à lancer votre projet web ?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button to="/devis" size="lg" className="btn-primary shadow-lg hover:shadow-secondary/40">
                  <span className="relative z-10">Demander un devis</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button to="/contact" variant="glass" size="lg" className="btn-outline border-secondary/50 hover:border-secondary">
                  <span className="relative z-10">Nous contacter</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default WebCreation
