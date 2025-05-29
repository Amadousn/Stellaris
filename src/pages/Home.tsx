import React, { useEffect } from 'react'
import Button from '../components/ui/Button'
import { motion } from 'framer-motion'
import { FaGlobe, FaPencilAlt, FaSearch, FaChartLine, FaInstagram, FaCalculator } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Timeline from '../components/Timeline'
import '../styles/ia-enhancements.css'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, color, delay }) => {
  return (
    <motion.div
      className="relative group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay || 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Fond avec effet glassmorphism */}
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm rounded-xl" />
      
      {/* Contenu de la carte */}
      <div className="relative p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 overflow-hidden">
        {/* Icône avec effet de lueur */}
        <motion.div 
          className={`text-4xl mb-4 ${color}`}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          {icon}
        </motion.div>
        
        {/* Titre avec dégradé */}
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
        
        {/* Bordure lumineuse au survol */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

const Home: React.FC = () => {
  useEffect(() => {
    // Ajout de la classe pour l'animation du titre
    const title = document.querySelector('.hero-title')
    if (title) {
      title.classList.add('stl-slide-up')
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-20">
      {/* Background Premium avec étoiles */}
      <div className="fixed inset-0 bg-primary z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-light via-primary to-primary-dark opacity-80" />
        
        {/* Effet d'étoiles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Petites étoiles */}
          {[...Array(50)].map((_, i) => (
            <div 
              key={`star-small-${i}`}
              className="absolute rounded-full bg-white w-0.5 h-0.5 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7
              }}
            />
          ))}
          
          {/* Étoiles moyennes */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={`star-medium-${i}`}
              className="absolute rounded-full bg-white w-1 h-1 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.7
              }}
            />
          ))}
          
          {/* Grandes étoiles avec lueur */}
          {[...Array(10)].map((_, i) => (
            <div 
              key={`star-large-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <div 
                className="rounded-full bg-white w-1.5 h-1.5 animate-pulse-slow"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.3)',
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            </div>
          ))}
          
          {/* Pluie d'étoiles tombantes - Version améliorée */}
          {[...Array(20)].map((_, i) => {
            // Taille variable pour les étoiles
            const starSize = 2 + Math.random() * 3;
            // Vitesse de chute variable
            const fallDuration = 4 + Math.random() * 6;
            // Délai d'apparition aléatoire
            const delay = Math.random() * 10;
            // Couleur variable (blanc à bleu clair)
            const hue = 200 + Math.random() * 40;
            const saturation = 70 + Math.random() * 30;
            const lightness = 75 + Math.random() * 25;
            const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            // Position horizontale aléatoire
            const xPos = Math.random() * 100;
            // Déplacement horizontal pendant la chute
            const xDrift = 30 + Math.random() * 100;
            
            return (
              <div
                key={`falling-star-container-${i}`}
                className="absolute"
                style={{
                  left: `${xPos}%`,
                  top: '-20px',
                  zIndex: 15,
                }}
              >
                <motion.div 
                  className="relative"
                  animate={{
                    y: ['0vh', '110vh'],
                    x: [0, xDrift],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: fallDuration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeIn",
                  }}
                >
                  {/* Étoile principale */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: `${starSize}px`,
                      height: `${starSize}px`,
                      background: `radial-gradient(circle, white 0%, ${color} 70%, transparent 100%)`,
                      boxShadow: `0 0 6px 1px white, 0 0 12px 2px ${color}, 0 0 20px 4px rgba(61, 90, 254, 0.6)`,
                    }}
                  />
                  
                  {/* Traînée lumineuse */}
                  <motion.div
                    className="absolute rounded-full blur-sm"
                    style={{
                      width: `${starSize * 0.7}px`,
                      background: `linear-gradient(to top, ${color}, transparent)`,
                      left: `${starSize / 2}px`,
                      transform: 'translateX(-50%)',
                    }}
                    animate={{
                      height: [0, starSize * (5 + Math.random() * 10)],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: fallDuration * 0.3,
                      repeat: Infinity,
                      delay: delay,
                      ease: "easeOut",
                    }}
                  />
                  
                  {/* Effet de scintillement */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      width: `${starSize * 2}px`,
                      height: `${starSize * 2}px`,
                      background: 'transparent',
                      boxShadow: `0 0 15px 5px ${color}50`,
                      left: `${starSize / 2}px`,
                      top: `${starSize / 2}px`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: delay,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            );
          })}
          
          {/* Étoiles filantes traversant tout l'écran dans différentes directions */}
          {[...Array(15)].map((_, i) => {
            // Calcul de la taille de l'étoile (plus grande pour plus de visibilité)
            const starSize = 3 + Math.random() * 4;
            // Longueur de la traînée (beaucoup plus longue)
            const trailLength = 120 + Math.random() * 180;
            // Vitesse de l'étoile (plus rapide pour un effet plus spectaculaire)
            const duration = 3 + Math.random() * 4;
            // Délai entre les apparitions
            const delay = Math.random() * 15;
            // Couleur de l'étoile (variation entre blanc et bleu clair)
            const hue = 210 + Math.random() * 30; // Teinte bleue
            const saturation = 80 + Math.random() * 20; // Saturation élevée
            const lightness = 70 + Math.random() * 30; // Luminosité élevée
            const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            
            // Direction aléatoire de l'étoile filante
            const directions = [
              { startPos: { top: `${Math.random() * 40}%`, left: '-100px' }, angle: 35, moveX: ['0vw', '120vw'], moveY: ['0vh', '120vh'] },  // Gauche vers droite (diagonale bas)
              { startPos: { top: `${Math.random() * 40}%`, right: '-100px' }, angle: -35, moveX: ['0vw', '-120vw'], moveY: ['0vh', '120vh'] }, // Droite vers gauche (diagonale bas)
              { startPos: { bottom: `${Math.random() * 40}%`, left: '-100px' }, angle: -35, moveX: ['0vw', '120vw'], moveY: ['0vh', '-120vh'] }, // Gauche vers droite (diagonale haut)
              { startPos: { bottom: `${Math.random() * 40}%`, right: '-100px' }, angle: 35, moveX: ['0vw', '-120vw'], moveY: ['0vh', '-120vh'] }, // Droite vers gauche (diagonale haut)
            ];
            
            const dirIndex = i % directions.length;
            const direction = directions[dirIndex];
            
            return (
              <div 
                key={`shooting-star-${i}`}
                className="absolute"
                style={{
                  ...direction.startPos,
                  transform: `rotate(${direction.angle}deg)`,
                  zIndex: 20,
                }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    x: direction.moveX,
                    y: direction.moveY,
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeOut",
                  }}
                >
                  {/* Tête de l'étoile filante - Plus grande et plus lumineuse */}
                  <div 
                    className="absolute rounded-full"
                    style={{
                      width: `${starSize}px`,
                      height: `${starSize}px`,
                      background: `radial-gradient(circle, white 0%, ${color} 70%, transparent 100%)`,
                      boxShadow: `0 0 10px 2px white, 0 0 20px 4px ${color}, 0 0 30px 8px rgba(61, 90, 254, 0.8)`,
                      zIndex: 30,
                    }}
                  />
                  
                  {/* Traînée principale - Plus longue et plus visible */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{ 
                      height: `${starSize * 0.8}px`,
                      background: `linear-gradient(to left, white, ${color} 20%, rgba(61, 90, 254, 0.6) 60%, transparent 100%)`,
                      top: '50%',
                      right: '0',
                      transformOrigin: 'right center',
                      transform: 'translateY(-50%)',
                      boxShadow: `0 0 8px 1px ${color}`,
                      zIndex: 25,
                    }}
                    animate={{ width: [0, trailLength] }}
                    transition={{ 
                      duration: duration * 0.8,
                      repeat: Infinity,
                      delay: delay,
                      ease: "easeOut",
                    }}
                  />
                  
                  {/* Traînée secondaire - Effet de halo lumineux */}
                  <motion.div
                    className="absolute rounded-full blur-sm"
                    style={{ 
                      height: `${starSize * 2}px`,
                      background: `linear-gradient(to left, rgba(255,255,255,0.8), ${color}40 30%, rgba(61, 90, 254, 0.2) 60%, transparent 100%)`,
                      top: '50%',
                      right: '0',
                      transformOrigin: 'right center',
                      transform: 'translateY(-50%)',
                      zIndex: 20,
                    }}
                    animate={{ width: [0, trailLength * 0.7] }}
                    transition={{ 
                      duration: duration * 0.8,
                      repeat: Infinity,
                      delay: delay,
                      ease: "easeOut",
                    }}
                  />
                  
                  {/* Particules qui se détachent de la traînée */}
                  {[...Array(3)].map((_, particleIndex) => (
                    <motion.div
                      key={`particle-${i}-${particleIndex}`}
                      className="absolute rounded-full bg-white"
                      style={{
                        width: `${1 + Math.random() * 1.5}px`,
                        height: `${1 + Math.random() * 1.5}px`,
                        boxShadow: `0 0 3px white, 0 0 5px ${color}`,
                        top: '50%',
                        right: `${20 + particleIndex * 30 + Math.random() * 20}px`,
                      }}
                      animate={{
                        y: [0, (Math.random() * 30) - 15],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 1 + Math.random(),
                        repeat: Infinity,
                        delay: delay + (particleIndex * 0.2),
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            );
          })}
          
          {/* Nébuleuse subtile */}
          <div 
            className="absolute rounded-full opacity-10 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(61, 90, 254, 0.3) 0%, rgba(61, 90, 254, 0) 70%)',
              width: '40%',
              height: '40%',
              top: '30%',
              left: '20%',
              transform: 'rotate(-15deg)'
            }}
          />
          
          <div 
            className="absolute rounded-full opacity-5 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(255, 213, 79, 0.3) 0%, rgba(255, 213, 79, 0) 70%)',
              width: '50%',
              height: '50%',
              top: '10%',
              right: '10%',
              transform: 'rotate(15deg)'
            }}
          />
        </div>
      </div>
      
      {/* Particules flottantes simplifiées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary-light/30"
            style={{
              top: `${20 * i}%`,
              left: `${15 * i}%`,
              width: "2px",
              height: "2px"
            }}
          />
        ))}
      </div>

      <main className="relative z-10">
        {/* Hero Section - Version premium et sophistiquée */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
          {/* Effet de lumière subtil */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-20 blur-3xl" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-light mb-8 tracking-wider">
              <motion.span 
                className="block"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-extralight bg-gradient-to-r from-indigo-200 via-white to-purple-200 bg-clip-text text-transparent">Propulsez</span>
                <span className="text-white"> votre entreprise</span>
              </motion.span>
              <motion.span 
                className="block mt-4 relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-white font-medium">vers les</span> <span className="relative inline-block">
                  <motion.span 
                    className="bg-gradient-to-r from-indigo-200 via-white to-purple-200 bg-clip-text text-transparent font-normal"
                    animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: '200% 100%' }}
                  >
                    étoiles
                  </motion.span>
                  <motion.div 
                    className="absolute -inset-1 rounded-lg opacity-0"
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    style={{ background: 'radial-gradient(circle, rgba(122,104,255,0.3) 0%, rgba(122,104,255,0) 70%)' }}
                  />
                </span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 tracking-wide font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="block mb-2">Sites web sur mesure, SEO, comptabilité, campagnes Ads, et plus encore.</span>
            <span className="block">Votre succès digital commence ici.</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/devis"
              className="relative overflow-hidden px-8 py-3 rounded-md bg-gradient-to-r from-indigo-900/70 to-purple-900/70 text-white border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 group flex items-center"
            >
              {/* Effet de brillance */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              
              {/* Lueur au survol */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"></span>
              
              <span className="relative z-10 font-medium tracking-wide text-lg bg-gradient-to-r from-white via-indigo-100 to-white bg-clip-text text-transparent">Démarrer votre projet</span>
            </Link>
            
            <Link
              to="/portfolio"
              className="relative overflow-hidden px-8 py-3 rounded-md bg-transparent text-gray-200 border border-indigo-400/10 hover:border-indigo-400/30 hover:text-white transition-all duration-300 group flex items-center"
            >
              {/* Effet de brillance */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              
              {/* Lueur au survol */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-900/5 to-purple-900/5"></span>
              
              <span className="relative z-10 font-medium tracking-wide text-lg">Voir nos réalisations</span>
            </Link>
          </motion.div>

          {/* Scroll Indicator - Version améliorée */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-gray-400 text-sm mb-2 tracking-widest">DÉCOUVRIR</span>
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </section>

        <Timeline />

        {/* Services Section - Version premium et sophistiquée */}
        <section className="py-28 px-4 relative overflow-hidden">
          {/* Effet de lumière subtil */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-white/5 to-transparent opacity-20 blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.span 
                className="text-gray-400 text-sm tracking-[0.3em] uppercase block mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Expertise
              </motion.span>
              <h2 className="text-4xl font-light mb-6 text-white tracking-wide">Nos <span className="font-normal">Services</span></h2>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-8"></div>
              <p className="subtitle max-w-2xl mx-auto tracking-wide text-lg text-gray-300 font-light">
                Des solutions sur mesure pour votre présence numérique
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="relative group overflow-hidden rounded-lg border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-white/10 transition-all duration-300"
              >
                <div className="p-8 relative">
                  {/* Icône avec effet de lueur */}
                  <div className="text-4xl mb-6 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <FaGlobe className="w-8 h-8" />
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-xl font-medium mb-4 text-white">
                    Création Web
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                    Sites web modernes et responsive, parfaitement adaptés à vos besoins
                  </p>
                  
                  {/* Bordure lumineuse au survol */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative group overflow-hidden rounded-lg border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-white/10 transition-all duration-300"
              >
                <div className="p-8 relative">
                  <div className="text-4xl mb-6 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <FaPencilAlt className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">
                    Design Graphique
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                    Identité visuelle unique et supports marketing percutants
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative group overflow-hidden rounded-lg border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-white/10 transition-all duration-300"
              >
                <div className="p-8 relative">
                  <div className="text-4xl mb-6 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <FaSearch className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">
                    SEO
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                    Optimisation pour les moteurs de recherche et visibilité en ligne
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group overflow-hidden rounded-lg border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-white/10 transition-all duration-300"
              >
                <div className="p-8 relative">
                  <div className="text-4xl mb-6 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <FaChartLine className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">
                    Marketing Digital
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                    Stratégies marketing efficaces pour atteindre vos objectifs
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group overflow-hidden rounded-lg border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-white/10 transition-all duration-300"
              >
                <div className="p-8 relative">
                  <div className="text-4xl mb-6 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <FaInstagram className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">
                    Réseaux Sociaux
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                    Gestion professionnelle de vos réseaux sociaux
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              

              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative group overflow-hidden rounded-lg border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm hover:border-white/10 transition-all duration-300"
              >
                <div className="p-8 relative">
                  <div className="text-4xl mb-6 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <FaCalculator className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4 text-white">
                    Comptabilité
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                    Gestion comptable professionnelle et optimisation fiscale
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div 
              className="glass-dark rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-secondary/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
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
              
              {/* Bordure lumineuse */}
              <div className="absolute inset-0 border border-secondary/30 rounded-2xl opacity-50"></div>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Prêt à décoller ?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Button 
                    to="/contact?type=contact" 
                    variant="primary" 
                    size="lg"
                    className="btn-primary shadow-lg hover:shadow-secondary/40"
                  >
                    <span className="relative z-10">Nous contacter</span>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Button 
                    to="/devis?type=quote" 
                    variant="glass" 
                    size="lg"
                    className="btn-outline border-secondary/50 hover:border-secondary"
                  >
                    <span className="relative z-10">Demander un devis</span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
