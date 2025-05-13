import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  // Logo premium avec animations optimisées
  return (
    <Link to="/" className="group flex items-center">
      <div className="flex items-center">
        <div className="relative w-16 h-10">
          {/* Soucoupe volante avec animation optimisée */}
          <motion.div 
            className="w-16 h-4 bg-gradient-to-r from-indigo-800 via-blue-600 to-indigo-700 rounded-full shadow-lg border border-blue-400/50"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Dôme de la soucoupe avec effet de lueur */}
            <motion.div 
              className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-blue-300/90 to-indigo-600 rounded-full shadow-inner border border-indigo-300/70"
              animate={{ boxShadow: ['inset 0 0 3px rgba(255, 255, 255, 0.5)', 'inset 0 0 8px rgba(255, 255, 255, 0.8)', 'inset 0 0 3px rgba(255, 255, 255, 0.5)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Lumières de la soucoupe avec effet de clignotement */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around px-1.5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-cyan-200"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Texte STELLARIS avec effet métallique premium */}
        <motion.div
          className="ml-4 text-3xl font-serif uppercase tracking-wider"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Effet d'ombre pour effet 3D */}
            <span 
              className="absolute inset-0 blur-[0.5px] opacity-80" 
              style={{ 
                color: '#1E1B4B',
                transform: 'translate(1px, 1px)',
              }}
            >
              STELLARIS
            </span>
            
            {/* Effet métallique premium avec animation de gradient */}
            <motion.span 
              className="text-transparent bg-clip-text relative" 
              style={{ 
                backgroundImage: 'linear-gradient(135deg, #E0E7FF, #C7D2FE, #818CF8, #4F46E5, #818CF8, #C7D2FE, #E0E7FF)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                textShadow: '0 0 10px rgba(79, 70, 229, 0.3)'
              }}
              animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              STELLARIS
            </motion.span>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default Logo;
