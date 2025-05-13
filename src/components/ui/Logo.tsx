import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Logo = () => {
  // Contrôleurs d'animation pour la séquence
  const saucerControls = useAnimation();
  const smokeControls = useAnimation();
  const textControls = useAnimation();
  const starsControls = useAnimation();
  
  // Séquence d'animation au chargement
  useEffect(() => {
    const animateEntrance = async () => {
      // Préparation des étoiles en arrière-plan (invisibles)
      starsControls.start({
        opacity: 0,
        scale: 0,
        transition: { duration: 0.1 }
      });
      
      // Étape 1: La soucoupe arrive de l'extérieur de l'écran à toute vitesse
      await saucerControls.start({
        x: -300,
        y: 100,
        rotate: 25,
        scale: 0.6,
        opacity: 0,
        transition: { duration: 0.1 }
      });
      
      // Apparition de la soucoupe
      await saucerControls.start({
        opacity: 1,
        transition: { duration: 0.2 }
      });
      
      // Étape 2: Entrée depuis le coin inférieur gauche
      await saucerControls.start({
        x: -50,
        y: 50,
        rotate: -15,
        scale: 0.8,
        transition: { duration: 0.5, ease: "easeOut" }
      });
      
      // Étape 3: Traversée vers le haut droit
      await saucerControls.start({
        x: 200,
        y: -80,
        rotate: -25,
        scale: 0.85,
        transition: { duration: 0.8, ease: "easeInOut" }
      });
      
      // Étape 4: Virage vers le coin supérieur gauche
      await saucerControls.start({
        x: -150,
        y: -100,
        rotate: 180,
        scale: 0.9,
        transition: { duration: 0.9, ease: "easeInOut" }
      });
      
      // Étape 5: Descente en spirale
      await saucerControls.start({
        x: [0, 50, -50, 0],
        y: [-50, 0, 50, 0],
        rotate: [180, 360, 540, 720],
        scale: [0.9, 1, 0.95, 1.1],
        transition: { duration: 1.2, ease: "easeInOut" }
      });
      
      // Étape 6: Passage rapide à droite puis à gauche
      await saucerControls.start({
        x: [0, 150, -150, 100],
        y: [0, 30, -30, 20],
        rotate: [0, -45, 45, -15],
        scale: [1.1, 0.9, 0.9, 1.1],
        transition: { duration: 1.5, ease: "easeInOut" }
      });
      
      // Étape 7: Looping final avant atterrissage
      await saucerControls.start({
        x: [100, 50, 0, -50, -100, -50, 0, 50, 100],
        y: [20, -50, -80, -50, 0, 50, 80, 50, 0],
        rotate: [-15, 45, 90, 135, 180, 225, 270, 315, 360],
        scale: [1.1, 1, 0.9, 0.8, 0.9, 1, 1.1, 1, 0.9],
        transition: { duration: 2, ease: "easeInOut" }
      });
      
      // Étape 8: Accélération finale vers la position d'atterrissage
      await saucerControls.start({
        x: 80,
        y: 10,
        rotate: -10,
        scale: 1.2,
        transition: { duration: 0.4, ease: "easeIn" }
      });
      
      // Étape 9: Freinage express avec fumée
      smokeControls.start({
        opacity: [0, 0.9, 0.5, 0],
        scale: [0.5, 1.8, 2.5, 3],
        x: [0, -20, -40, -60],
        transition: { duration: 1.2, ease: "easeOut" }
      });
      
      // Atterrissage final avec rebond
      await saucerControls.start({
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.6, type: "spring", stiffness: 200, damping: 12, bounce: 0.5 }
      });
      
      // Étape 7: Apparition des étoiles scintillantes
      starsControls.start({
        opacity: [0, 0.8, 0.4, 0.9, 0.5],
        scale: [0, 1, 0.8, 1.2, 1],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      });
      
      // Étape 8: Apparition du texte STELLARIS lettre par lettre
      await textControls.start({
        opacity: 1,
        x: 0,
        transition: { 
          duration: 0.8,
          ease: "easeOut",
          staggerChildren: 0.08,
          delayChildren: 0.1
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
  }, [saucerControls, smokeControls, textControls, starsControls]);
  
  return (
    <Link to="/" className="group flex items-center">
      <div className="flex items-center">
        <div className="relative w-16 h-10">
          {/* Effet de fumée lors du freinage */}
          <motion.div
            className="absolute left-0 top-0 w-12 h-8 z-0"
            initial={{ opacity: 0, x: 0, scale: 0.5 }}
            animate={smokeControls}
          >
            <div className="absolute left-0 top-0 w-full h-full">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`smoke-${i}`}
                  className="absolute rounded-full bg-gradient-to-r from-blue-200/10 via-blue-300/20 to-indigo-200/10 blur-md"
                  style={{
                    width: `${6 + i * 3}px`,
                    height: `${6 + i * 3}px`,
                    left: `${(i * 4) - 10}px`,
                    top: `${Math.sin(i) * 5}px`,
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 0.4, 0],
                    scale: [0.5, 1.5, 2],
                    x: [0, -10 - i * 3, -20 - i * 5],
                  }}
                  transition={{ 
                    duration: 0.8 + (i * 0.1),
                    ease: "easeOut",
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Soucoupe volante avec effets lumineux - Version améliorée */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-10"
            initial={{ opacity: 0, x: -100, y: 30, rotate: 15, scale: 0.7 }}
            animate={saucerControls}
          >
            {/* Corps principal de la soucoupe */}
            <div className="absolute top-1/2 left-1/2 w-12 h-3.5 rounded-full bg-gradient-to-b from-slate-300 to-slate-500 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
              {/* Texture métallique */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white to-transparent"></div>
              
              {/* Ligne de séparation centrale */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-600 transform -translate-y-1/2"></div>
              
              {/* Détails du corps */}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-1/3 bg-slate-600 rounded-t-sm"></div>
            </div>
            
            {/* Dôme supérieur transparent */}
            <div className="absolute top-1/2 left-1/2 w-6 h-3 rounded-full bg-gradient-to-b from-cyan-200/80 to-blue-400/80 transform -translate-x-1/2 -translate-y-[180%] overflow-hidden">
              {/* Effet de reflet */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/30 rounded-t-full"></div>
            </div>
            
            {/* Anneau extérieur */}
            <div className="absolute top-1/2 left-1/2 w-16 h-1.5 rounded-full bg-gradient-to-b from-indigo-300 to-indigo-500 transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
            
            {/* Halo lumineux sous la soucoupe */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-14 h-1 rounded-full bg-indigo-400/40 blur-sm transform -translate-x-1/2 translate-y-[150%]"
              animate={{ boxShadow: ['0 0 5px rgba(129, 140, 248, 0.5)', '0 0 12px rgba(129, 140, 248, 0.8)', '0 0 5px rgba(129, 140, 248, 0.5)'],
                         opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Effet de lueur interne */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-12 h-3.5 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              animate={{ boxShadow: ['inset 0 0 4px rgba(165, 180, 252, 0.5)', 'inset 0 0 10px rgba(165, 180, 252, 0.8)', 'inset 0 0 4px rgba(165, 180, 252, 0.5)'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Lumières de la soucoupe avec effet de clignotement */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around px-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-indigo-300' : 'bg-cyan-300'}`}
                  animate={{ opacity: [0.4, 1, 0.4], boxShadow: ['0 0 2px rgba(165, 180, 252, 0.5)', '0 0 4px rgba(165, 180, 252, 0.8)', '0 0 2px rgba(165, 180, 252, 0.5)'] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                />
              ))}
            </div>
            
            {/* Rayons tracteurs/propulseurs */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => {
                const width = 2 + i * 2;
                return (
                  <motion.div
                    key={`ray-${i}`}
                    className="absolute bottom-0 bg-gradient-to-b from-indigo-400/80 to-transparent"
                    style={{ 
                      height: `${3 + i}px`,
                      width: `${width}px`,
                      left: `${-width/2}px`,
                    }}
                    animate={{ height: [`${3 + i}px`, `${6 + i}px`, `${3 + i}px`], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
        
        {/* Étoiles scintillantes derrière le texte */}
        <div className="relative ml-4">
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`text-star-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${1 + Math.random() * 2}px`,
                  height: `${1 + Math.random() * 2}px`,
                  left: `${5 + Math.random() * 90}%`,
                  top: `${5 + Math.random() * 90}%`,
                  boxShadow: '0 0 3px rgba(255, 255, 255, 0.8)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={starsControls}
              />
            ))}
          </div>
          
          {/* Texte STELLARIS avec effet métallique premium et animation d'entrée */}
          <motion.div
            className="text-3xl font-serif uppercase tracking-wider"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            initial={{ opacity: 0 }}
            animate={textControls}
          >
            <div className="relative">
              {/* Effet d'ombre pour effet 3D */}
              <span 
                className="absolute inset-0 blur-[1px] opacity-70" 
                style={{ 
                  color: '#312E81', // Indigo plus profond pour l'ombre
                  transform: 'translate(1.5px, 1.5px)',
                }}
              >
                STELLARIS
              </span>
            
              {/* Effet premium sophistiqué avec apparition lettre par lettre et couleurs vibrantes */}
              <div className="flex">
                {"STELLARIS".split('').map((letter, index) => (
                  <motion.span 
                    key={`letter-${index}`}
                    className="text-transparent bg-clip-text relative" 
                    style={{ 
                      backgroundImage: 'linear-gradient(135deg, #E2E8F0, #CBD5E1, #94A3B8, #6366F1, #4F46E5, #94A3B8, #CBD5E1, #E2E8F0)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      textShadow: '0 0 15px rgba(99, 102, 241, 0.4), 0 0 5px rgba(148, 163, 184, 0.3)'
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] 
                    }}
                    transition={{
                      opacity: { duration: 0.3, delay: 0.1 + (index * 0.08) },
                      y: { duration: 0.5, delay: 0.1 + (index * 0.08), type: "spring" },
                      backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
