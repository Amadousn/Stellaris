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
        // Animation spectaculaire mais professionnelle
        
        // Préparation initiale des étoiles
        starsControls.start({
          opacity: 0,
          scale: 0,
          transition: { duration: 0.1 }
        });
        
        // Position initiale de la soucoupe (hors écran)
        await saucerControls.start({
          x: -150,
          y: 20,
          opacity: 0,
          scale: 0.5,
          rotate: -15,
          transition: { duration: 0.1 }
        });
        
        // Apparition de la fumée
        smokeControls.start({
          opacity: [0, 0.7, 0],
          x: [-10, -30],
          scale: [0.5, 1.5],
          transition: { duration: 1.2, ease: "easeOut" }
        });
        
        // Entrée dynamique de la soucoupe
        await saucerControls.start({
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
          transition: { 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 10
          }
        });
        
        // Étape 3: Petit looping rapide et élégant
        await saucerControls.start({
          x: [0, 30, 0, -30, 0],
          y: [0, 15, -15, 0],
          rotate: [-5, 10, -10, 5, 0],
          scale: [1, 1.1, 1],
          transition: { duration: 1.2, ease: "easeInOut" }
        });
        
        // Apparition du texte STELLARIS avec un effet de brillance
        await textControls.start({
          opacity: 1,
          scale: [0.95, 1.05, 1],
          transition: { 
            duration: 0.6,
            ease: "easeOut"
          }
        });
        
        // Apparition des étoiles
        starsControls.start({
          opacity: [0, 0.8, 0.5],
          scale: [0, 1.2, 1],
          transition: { 
            duration: 1.5,
            ease: "easeOut"
          }
        });
        
        // Animation continue plus dynamique de la soucoupe
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
            
            {/* Dôme supérieur avec effet de verre/cristal */}
            <div 
              className="absolute w-1/2 h-1/3 left-1/4 top-0 rounded-full overflow-hidden z-20"
              style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.9) 50%, rgba(79, 70, 229, 0.8) 100%)',
                boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.5), 0 0 10px rgba(139, 92, 246, 0.5)'
              }}
            >
              {/* Effet de brillance sur le dôme */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            {/* Hublots lumineux */}
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={`window-${i}`}
                className="absolute rounded-full z-30"
                style={{ 
                  width: size === 'small' ? '3px' : size === 'medium' ? '4px' : '5px',
                  height: size === 'small' ? '3px' : size === 'medium' ? '4px' : '5px',
                  left: `${30 + i * 20}%`,
                  top: '40%',
                  background: '#38bdf8',
                  boxShadow: '0 0 8px #38bdf8, 0 0 12px rgba(56, 189, 248, 0.6)'
                }}
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    '0 0 5px #38bdf8, 0 0 10px rgba(56, 189, 248, 0.6)',
                    '0 0 10px #38bdf8, 0 0 15px rgba(56, 189, 248, 0.8)',
                    '0 0 5px #38bdf8, 0 0 10px rgba(56, 189, 248, 0.6)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
              />
            ))}
            
            {/* Rayons tracteurs/propulseurs améliorés */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              {[...Array(5)].map((_, i) => {
                const width = 1 + i * 0.7;
                return (
                  <motion.div
                    key={`ray-${i}`}
                    className="absolute bottom-0"
                    style={{ 
                      background: 'linear-gradient(to bottom, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.4), transparent)',
                      width: `${width}px`,
                      left: `${-width/2}px`,
                      borderRadius: '4px'
                    }}
                    animate={{ 
                      height: [`${3 + i}px`, `${6 + i * 1.5}px`, `${3 + i}px`], 
                      opacity: [0.3, 0.8, 0.3],
                      boxShadow: [
                        '0 0 2px rgba(139, 92, 246, 0.3)',
                        '0 0 4px rgba(139, 92, 246, 0.5)',
                        '0 0 2px rgba(139, 92, 246, 0.3)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
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
