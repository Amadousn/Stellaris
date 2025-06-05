import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Logo = () => {
  // Contrôleurs d'animation pour la séquence
  const saucerControls = useAnimation();
  const smokeControls = useAnimation();
  const textControls = useAnimation();
  const starsControls = useAnimation();
  
  // Séquence d'animation au chargement - Version professionnelle simplifiée
  useEffect(() => {
    const animateEntrance = async () => {
      // Préparation des étoiles en arrière-plan (invisibles)
      starsControls.start({
        opacity: 0,
        scale: 0,
        transition: { duration: 0.1 }
      });
      
      // Animation simplifiée de la soucoupe
      await saucerControls.start({
        x: -30,
        y: 0,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.1 }
      });
      
      // Apparition de la soucoupe avec un mouvement subtil
      await saucerControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: "easeOut" }
      });
      
      // Légère animation de stabilisation
      await saucerControls.start({
        scale: 0.9,
        transition: { duration: 0.3, type: "spring", stiffness: 300, damping: 15 }
      });
      
      // Apparition discrète des étoiles
      starsControls.start({
        opacity: [0, 0.4, 0.2, 0.5, 0.3],
        scale: [0, 1, 0.9, 1.1, 1],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      });
      
      // Apparition du texte STELLARIS avec un effet plus sobre
      await textControls.start({
        opacity: 1,
        transition: { 
          duration: 0.6,
          ease: "easeOut"
        }
      });
      
      // Animation continue très subtile de la soucoupe
      saucerControls.start({
        y: [-1, 1, -1],
        rotate: [-1, 1, -1],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      });
    };
    
    // Lancer la séquence d'animation
    animateEntrance();
  }, [saucerControls, smokeControls, textControls, starsControls]);
  
  return (
    <Link to="/" className="group flex items-center">
      <div className="flex items-center">
        <div className="relative w-12 h-8">
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
          
          {/* Texte STELLARIS avec effet métallique professionnel et sobre */}
          <motion.div
            className="text-2xl uppercase tracking-wider"
            style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontWeight: 600, letterSpacing: '0.05em' }}
            initial={{ opacity: 0 }}
            animate={textControls}
          >
            <div className="relative">
              {/* Effet d'ombre subtil */}
              <span 
                className="absolute inset-0 blur-[0.5px] opacity-50" 
                style={{ 
                  color: '#1E293B', // Bleu slate plus professionnel pour l'ombre
                  transform: 'translate(1px, 1px)',
                }}
              >
                STELLARIS
              </span>
            
              {/* Effet métallique subtil et professionnel */}
              <div className="flex">
                <motion.span 
                  className="text-transparent bg-clip-text relative" 
                  style={{ 
                    backgroundImage: 'linear-gradient(135deg, #F8FAFC, #E2E8F0, #CBD5E1, #94A3B8, #CBD5E1, #E2E8F0, #F8FAFC)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    textShadow: '0 0 5px rgba(148, 163, 184, 0.2)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] 
                  }}
                  transition={{
                    opacity: { duration: 0.6 },
                    backgroundPosition: { duration: 8, repeat: Infinity, ease: "linear" }
                  }}
                >
                  STELLARIS
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
