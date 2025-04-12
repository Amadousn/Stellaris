import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="group relative flex items-center">
      <div className="relative">
        {/* Cercle principal */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" />
        
        {/* Anneaux */}
        <div className="absolute top-0 left-0 w-10 h-10 rounded-full border-2 border-blue-400/30 transform scale-110 animate-spin-slow" />
        <div className="absolute top-0 left-0 w-10 h-10 rounded-full border-2 border-purple-400/20 transform scale-125 animate-spin-reverse" />
        
        {/* Étoile centrale */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-twinkle" />
        </div>
      </div>
      
      {/* Texte */}
      <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
        Stellaris
      </span>
    </Link>
  );
};

export default Logo;
