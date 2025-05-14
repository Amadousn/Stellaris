import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import '../styles/animations.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  animate?: boolean;
  className?: string;
  showSaucer?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', animate = false, className = '', showSaucer = true }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Contrôleurs d'animation pour la séquence
  const saucerControls = useAnimation();
  const smokeControls = useAnimation();
  const textControls = useAnimation();
  const starsControls = useAnimation();
  
  // Effet pour l'animation 3D au survol
  useEffect(() => {
    if (animate && logoRef.current) {
      const logo = logoRef.current;
      
      const handleMouseMove = (e: MouseEvent) => {
        const { left, top, width, height } = logo.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        logo.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
        logo.style.setProperty('--x-position', `${x * 100}%`);
        logo.style.setProperty('--y-position', `${y * 100}%`);
      };
      
      const handleMouseLeave = () => {
        logo.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
      };
      
      logo.addEventListener('mousemove', handleMouseMove);
      logo.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        logo.removeEventListener('mousemove', handleMouseMove);
        logo.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [animate]);
  
  // Séquence d'animation au chargement pour la soucoupe
  useEffect(() => {
    if (showSaucer) {
      const animateEntrance = async () => {
        // Préparation des étoiles en arrière-plan (invisibles)
        starsControls.start({
          opacity: 0,
          scale: 0,
          transition: { duration: 0.1 }
        });
        
        // Étape 1: La soucoupe commence hors écran
        await saucerControls.start({
          x: -150,
          y: 0,
          rotate: 0,
          scale: 0.7,
          opacity: 0,
          transition: { duration: 0.1 }
        });
        
        // Apparition de la soucoupe
        await saucerControls.start({
          opacity: 1,
          transition: { duration: 0.2 }
        });
        
        // Étape 2: Entrée rapide vers le centre de l'écran
        await saucerControls.start({
          x: 0,
          y: 0,
          rotate: 5,
          scale: 0.8,
          transition: { duration: 0.4, ease: "easeOut" }
        });
        
        // Étape 3: Effet de zoom au centre (s'approche de nous)
        await saucerControls.start({
          scale: 1.3,
          y: 10,
          rotate: -5,
          transition: { duration: 0.3, ease: "easeInOut" }
        });
        
        // Étape 4: Petit looping rapide et élégant
        await saucerControls.start({
          x: [0, 30, 0, -30, 0],
          y: [10, 20, -20, 0, 10],
          rotate: [-5, 90, 180, 270, 360],
          scale: [1.3, 1.2, 1.1, 1.2, 1.3],
          transition: { duration: 1.5, ease: "easeInOut" }
        });
        
        // Étape 5: Léger déplacement vers la droite
        await saucerControls.start({
          x: 30,
          y: 0,
          rotate: -10,
          scale: 1.2,
          transition: { duration: 0.3, ease: "easeInOut" }
        });
        
        // Étape 5: Freinage avec fumée
        smokeControls.start({
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.5, 2],
          x: [0, -20, -40],
          transition: { duration: 0.8, ease: "easeOut" }
        });
        
        // Atterrissage final
        await saucerControls.start({
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 15 }
        });
        
        // Étape 7: Apparition des étoiles scintillantes
        starsControls.start({
          opacity: [0, 0.8, 0.4, 0.9, 0.5],
          scale: [0, 1, 0.8, 1.2, 1],
          transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        });
        
        // Étape 8: Apparition du texte STELLARIS
        await textControls.start({
          opacity: 1,
          x: 0,
          transition: { 
            duration: 0.8,
            ease: "easeOut"
          }
        });
        
        // Étape 9: Animation continue subtile de la soucoupe
        saucerControls.start({
          y: [-2, 2, -2],
          rotate: [-2, 2, -2],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        });
      };
      
      // Lancer la séquence d'animation
      animateEntrance();
    }
  }, [saucerControls, smokeControls, textControls, starsControls, showSaucer]);

  // Déterminer la taille du logo
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-3xl',
    large: 'text-4xl'
  };
  
  // Adapter la taille de la soucoupe en fonction de la taille du texte
  const saucerSizes = {
    small: 'w-10 h-6',
    medium: 'w-12 h-8',
    large: 'w-16 h-10'
  };

  return (
    <div 
      ref={logoRef}
      className={`relative transition-transform duration-200 flex items-center ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {showSaucer && (
        <div className="relative mr-3">
          {/* Effet de fumée lors du freinage */}
          <motion.div
            className="absolute left-0 top-0 w-8 h-6 z-0"
            initial={{ opacity: 0, x: 0, scale: 0.5 }}
            animate={smokeControls}
          >
            <div className="absolute left-0 top-0 w-full h-full">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`smoke-${i}`}
                  className="absolute rounded-full bg-indigo-400/30 blur-md"
                  style={{
                    width: `${4 + i * 2}px`,
                    height: `${4 + i * 2}px`,
                    left: `${i * 3}px`,
                    top: `${i * 2}px`
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Soucoupe volante */}
          <motion.div
            className={`relative ${saucerSizes[size]}`}
            initial={{ opacity: 0, x: -50, scale: 0.7 }}
            animate={saucerControls}
          >
            {/* Corps principal de la soucoupe */}
            <div className="absolute w-full h-1/2 top-1/4 bg-gradient-to-r from-gray-300 via-white to-gray-300 rounded-full overflow-hidden z-10">
              {/* Effet de reflet sur la soucoupe */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-70" />
            </div>
            
            {/* Dôme supérieur */}
            <div className="absolute w-1/2 h-1/3 left-1/4 top-0 bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-400 rounded-full overflow-hidden z-20">
              {/* Effet de reflet sur le dôme */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-50" />
            </div>
            
            {/* Hublots */}
            {[...Array(3)].map((_, i) => (
              <div 
                key={`window-${i}`}
                className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full z-30"
                style={{ 
                  left: `${30 + i * 20}%`,
                  top: '40%',
                  boxShadow: '0 0 5px rgba(103, 232, 249, 0.8)'
                }}
              />
            ))}
            
            {/* Rayons tracteurs/propulseurs */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => {
                const width = 1 + i * 1;
                return (
                  <motion.div
                    key={`ray-${i}`}
                    className="absolute bottom-0 bg-gradient-to-b from-indigo-400/80 to-transparent"
                    style={{ 
                      height: `${2 + i}px`,
                      width: `${width}px`,
                      left: `${-width/2}px`,
                    }}
                    animate={{ height: [`${2 + i}px`, `${4 + i}px`, `${2 + i}px`], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={textControls}
        className="relative"
      >
        <h1 
          className={`font-playfair font-bold ${sizeClasses[size]} tracking-wider`}
        >
          <span className="stellaris-logo-text">
            STELLARIS
          </span>
        </h1>
        {animate && (
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 blur-lg opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
        )}
      </motion.div>
    </div>
  );
};

export default Logo;
