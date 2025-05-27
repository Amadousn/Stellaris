import React from 'react'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import StarryBackground from '../components/StarryBackground'
import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaTiktok, FaYoutube, FaEdit, FaUsers, FaChartLine, FaComments } from 'react-icons/fa'

const SocialMedia = () => {
  const services = [
    {
      title: 'Gestion de Réseaux Sociaux',
      description: 'Animation quotidienne de vos réseaux sociaux',
      icon: '📱',
      platforms: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok'],
    },
    {
      title: 'Création de Contenu',
      description: 'Production de contenus engageants et adaptés',
      icon: '🎨',
      types: ['Posts', 'Stories', 'Reels', 'Vidéos', 'Visuels'],
    },
    {
      title: 'Community Management',
      description: 'Interaction avec votre communauté',
      icon: '💬',
      features: ['Modération', 'Réponses', 'Engagement', 'Veille'],
    },
    {
      title: 'Stratégie Social Media',
      description: 'Planification et analyse de votre présence sociale',
      icon: '📊',
      elements: ['Audit', 'Planning', 'KPIs', 'Reporting'],
    },
  ]

  const benefits = [
    {
      title: 'Visibilité Accrue',
      description: 'Développez votre présence sur les réseaux sociaux',
    },
    {
      title: 'Engagement Communautaire',
      description: 'Créez une communauté active autour de votre marque',
    },
    {
      title: 'Image de Marque',
      description: 'Renforcez votre identité et votre crédibilité',
    },
    {
      title: 'Trafic Qualifié',
      description: 'Dirigez des visiteurs ciblés vers votre site',
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-40 relative overflow-hidden">
      {/* Fond étoilé */}
      <div className="absolute inset-0 z-0">
        <StarryBackground />
      </div>
      
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-secondary-light/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "2px",
              height: "2px"
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
            Référencement Social
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Développez votre présence sur les réseaux sociaux et engagez votre communauté
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="hover:scale-105 hover:shadow-glow transition-all duration-300">
              Découvrir nos services
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
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
        >
          Nos Services Social Media
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-secondary/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              
              {/* Icône avec effet de lueur */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}
                className="text-4xl mb-6 text-secondary opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              >
                {index === 0 && <FaUsers className="w-10 h-10" />}
                {index === 1 && <FaEdit className="w-10 h-10" />}
                {index === 2 && <FaComments className="w-10 h-10" />}
                {index === 3 && <FaChartLine className="w-10 h-10" />}
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-5 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {(service.platforms || service.types || service.features || service.elements)?.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-300 hover:border-secondary/30 hover:text-white transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              
              {/* Bordure lumineuse au survol */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Platforms Section */}
      <Section className="relative overflow-hidden">
        {/* Effet de lumière subtil */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-secondary/10 to-transparent opacity-20 blur-3xl" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
        >
          Plateformes Sociales
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {[
            { name: 'Facebook', icon: <FaFacebook className="w-8 h-8" /> },
            { name: 'Instagram', icon: <FaInstagram className="w-8 h-8" /> },
            { name: 'LinkedIn', icon: <FaLinkedin className="w-8 h-8" /> },
            { name: 'Twitter', icon: <FaTwitter className="w-8 h-8" /> },
            { name: 'TikTok', icon: <FaTiktok className="w-8 h-8" /> },
            { name: 'YouTube', icon: <FaYoutube className="w-8 h-8" /> }
          ].map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="aspect-square bg-gray-900/40 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center border border-gray-800 hover:border-secondary/30 hover:shadow-lg shadow-secondary/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              
              <motion.div 
                className="text-secondary/70 group-hover:text-secondary transition-colors duration-300 mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {platform.icon}
              </motion.div>
              <span className="text-lg font-medium text-white group-hover:text-secondary transition-colors duration-300">{platform.name}</span>
              
              {/* Bordure lumineuse au survol */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
        >
          Avantages du Social Media
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-5 p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-secondary/30 transition-all duration-300 group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/80 to-accent/80 flex items-center justify-center shrink-0 shadow-md shadow-secondary/20 group-hover:shadow-secondary/40 transition-all duration-300"
              >
                ✓
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-secondary transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="relative overflow-hidden">
        {/* Effet de lumière subtil */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-accent/10 to-transparent opacity-20 blur-3xl" />
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent"
        >
          Notre Approche
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10 relative">
            {/* Ligne de connexion verticale */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-secondary/50 via-accent/50 to-secondary/50 opacity-50"></div>
            
            <motion.div 
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/80 to-accent/80 flex items-center justify-center shrink-0 shadow-md shadow-secondary/20 z-10 font-bold text-white"
              >
                1
              </motion.div>
              <div className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-secondary/30 transition-all duration-300 group w-full">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-secondary transition-colors duration-300">Audit & Stratégie</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Analyse de votre présence actuelle et définition des objectifs
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/80 to-accent/80 flex items-center justify-center shrink-0 shadow-md shadow-secondary/20 z-10 font-bold text-white"
              >
                2
              </motion.div>
              <div className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-secondary/30 transition-all duration-300 group w-full">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-secondary transition-colors duration-300">Création de Contenu</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Production de contenus engageants et adaptés à chaque plateforme
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/80 to-accent/80 flex items-center justify-center shrink-0 shadow-md shadow-secondary/20 z-10 font-bold text-white"
              >
                3
              </motion.div>
              <div className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-secondary/30 transition-all duration-300 group w-full">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-secondary transition-colors duration-300">Publication & Animation</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Gestion quotidienne de vos réseaux et interaction avec votre communauté
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-5"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/80 to-accent/80 flex items-center justify-center shrink-0 shadow-md shadow-secondary/20 z-10 font-bold text-white"
              >
                4
              </motion.div>
              <div className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-secondary/30 transition-all duration-300 group w-full">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-secondary transition-colors duration-300">Analyse & Optimisation</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Suivi des performances et ajustement de la stratégie
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <motion.div 
          className="bg-gray-900/40 backdrop-blur-sm p-10 rounded-xl border border-gray-800 hover:border-secondary/30 relative overflow-hidden"
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
              Prêt à développer votre présence sociale ?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contactez-nous pour un audit gratuit de vos réseaux sociaux et découvrez comment nous pouvons vous aider
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button to="/contact" size="lg" className="shadow-lg hover:shadow-secondary/40">
                  <span className="relative z-10">Demander un audit gratuit</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button to="/pricing" variant="glass" size="lg" className="btn-outline border-secondary/50 hover:border-secondary">
                  <span className="relative z-10">Nos offres</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  )
}

export default SocialMedia
