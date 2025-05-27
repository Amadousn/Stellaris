import React from 'react'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import StarryBackground from '../components/StarryBackground'
import { motion } from 'framer-motion'
import { FaSearch, FaBolt, FaPenFancy, FaLink, FaCheckCircle } from 'react-icons/fa'

const Seo = () => {
  const features = [
    {
      title: 'Audit SEO',
      description: 'Analyse complète de votre site et de son positionnement actuel',
      icon: <FaSearch className="text-blue-400" />,
    },
    {
      title: 'Optimisation On-Page',
      description: 'Optimisation technique et structurelle de votre site',
      icon: <FaBolt className="text-indigo-400" />,
    },
    {
      title: 'Création de Contenu',
      description: 'Rédaction de contenus optimisés pour les moteurs de recherche',
      icon: <FaPenFancy className="text-purple-400" />,
    },
    {
      title: 'Netlinking',
      description: 'Stratégie de liens externes pour renforcer votre autorité',
      icon: <FaLink className="text-cyan-400" />,
    },
  ]

  const benefits = [
    {
      title: 'Visibilité Accrue',
      description: 'Meilleur positionnement dans les résultats de recherche',
    },
    {
      title: 'Trafic Qualifié',
      description: 'Attirez des visiteurs réellement intéressés par vos services',
    },
    {
      title: 'ROI Mesurable',
      description: 'Suivez précisément les résultats de votre stratégie SEO',
    },
    {
      title: 'Présence Durable',
      description: 'Construisez une présence en ligne pérenne',
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Référencement Naturel (SEO)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Améliorez votre visibilité sur les moteurs de recherche et attirez plus de clients qualifiés
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" to="/devis">
              Audit SEO Gratuit
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Nos Services SEO
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

      {/* Benefits Section */}
      <Section>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Avantages du SEO
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Methodology Section */}
      <Section>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Notre Méthodologie
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
                <h3 className="text-xl font-semibold mb-2 text-white">Audit Initial</h3>
                <p className="text-gray-400">
                  Analyse approfondie de votre site et de votre positionnement actuel
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
                <h3 className="text-xl font-semibold mb-2 text-white">Stratégie Personnalisée</h3>
                <p className="text-gray-400">
                  Élaboration d'un plan d'action adapté à vos objectifs
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
                <h3 className="text-xl font-semibold mb-2 text-white">Optimisation Continue</h3>
                <p className="text-gray-400">
                  Mise en œuvre des actions et ajustements réguliers
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
                <h3 className="text-xl font-semibold mb-2 text-white">Suivi et Reporting</h3>
                <p className="text-gray-400">
                  Rapports détaillés et suivi des performances
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
              Prêt à améliorer votre visibilité en ligne ?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contactez-nous pour obtenir un audit SEO gratuit et découvrir comment nous pouvons vous aider
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
                  <span className="relative z-10">Demander un audit gratuit</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button to="/comptabilite" variant="glass" size="lg" className="btn-outline border-blue-500/50 hover:border-blue-500">
                  <span className="relative z-10">Nos tarifs</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default Seo
