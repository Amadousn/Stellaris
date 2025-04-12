import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  // Animation complexe avec loopings
  const flyingPath = {
    x: [
      -200, // Départ hors écran
      100,  // Premier virage
      0,    // Centre
      -100, // Deuxième virage
      50,   // Troisième virage
      0     // Position finale
    ],
    y: [
      100,  // Départ
      -50,  // Monte
      100,  // Descend pour le premier looping
      -50,  // Remonte
      0,    // Position finale
    ],
    rotate: [
      -45,   // Angle initial
      180,   // Premier looping
      360,   // Deuxième looping
      720,   // Troisième rotation
      1080,  // Quatrième rotation
      0      // Position finale
    ],
    scale: [
      1,    // Taille normale
      0.8,  // Plus petit pendant les loopings
      1.2,  // Plus grand
      0.8,  // Plus petit
      1     // Taille finale
    ]
  };

  return (
    <Link to="/" className="group relative flex items-center">
      <motion.div
        initial={{ x: -200, y: 100, rotate: -45, scale: 1 }}
        animate={flyingPath}
        transition={{
          duration: 3,
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Soucoupe volante */}
        <div className="relative w-12 h-6">
          {/* Corps principal */}
          <motion.div 
            className="absolute w-12 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3 // Commence après l'animation d'entrée
            }}
          >
            {/* Dôme */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-gradient-to-b from-blue-300 to-blue-500 rounded-full" />
            
            {/* Lumières */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around px-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-yellow-300 rounded-full"
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2 + 3 // Commence après l'animation d'entrée
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Traînée d'énergie */}
          <motion.div
            className="absolute top-1/2 right-0 transform translate-x-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
          >
            <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
          </motion.div>

          {/* Rayon tracteur */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3 // Commence après l'animation d'entrée
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-b from-blue-400/50 to-transparent transform origin-top" />
          </motion.div>
        </div>

        {/* Étoiles autour */}
        <div className="absolute inset-0 -z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3 + 3 // Commence après l'animation d'entrée
              }}
            />
          ))}
        </div>
      </motion.div>
      
      {/* Texte */}
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }} // Apparaît vers la fin de l'animation de la soucoupe
        className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity"
      >
        Stellaris
      </motion.span>
    </Link>
  );
};

export default Logo;
