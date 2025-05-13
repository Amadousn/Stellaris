import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../styles/logo.css';

interface AnimatedLogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'huge';
  linkEnabled?: boolean;
  animate3D?: boolean;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  className = '', 
  size = 'medium',
  linkEnabled = true,
  animate3D = false
}) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Définir la taille du logo en fonction du paramètre
  const logoSize = {
    small: 'text-2xl',
    medium: 'text-3xl',
    large: 'text-5xl md:text-6xl',
    huge: 'logo-size-huge'
  }[size];

  useEffect(() => {
    if (logoRef.current && reflectionRef.current) {
      // Animation du reflet qui traverse le logo
      gsap.fromTo(reflectionRef.current, 
        { x: '-100%' },
        {
          x: '150%',
          duration: 3.5,
          ease: 'power1.inOut',
          repeat: -1,
          repeatDelay: 3,
        }
      );
      
      // Animation 3D subtile si activée
      if (animate3D && logoRef.current) {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = logoRef.current!.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          // Calculer la distance du curseur par rapport au centre
          const moveX = (e.clientX - centerX) / 30;
          const moveY = (e.clientY - centerY) / 30;
          
          // Appliquer une rotation subtile
          gsap.to(logoRef.current, {
            rotateY: moveX,
            rotateX: -moveY,
            duration: 0.5,
            ease: 'power1.out'
          });
        };
        
        document.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }
    }
    
    // Animation des lettres individuelles si c'est un logo de grande taille
    if (size === 'huge' && lettersRef.current.length > 0) {
      lettersRef.current.forEach((letter, index) => {
        if (letter) {
          gsap.fromTo(letter,
            { y: 50, opacity: 0 },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.6, 
              delay: 0.1 * index,
              ease: 'power2.out'
            }
          );
        }
      });
    }
  }, [size, animate3D]);

  // Créer des éléments span individuels pour chaque lettre (pour les animations)
  const renderLetters = () => {
    const letters = 'STELLARIS'.split('');
    return letters.map((letter, index) => (
      <span 
        key={index}
        ref={el => lettersRef.current[index] = el}
        className="inline-block"
      >
        {letter}
      </span>
    ));
  };

  const logoContent = (
    <div 
      ref={logoRef} 
      className={`logo-container font-serif font-bold ${logoSize} relative ${animate3D ? 'logo-3d' : ''}`}
    >
      <span className="logo-text metallic-silver">
        {size === 'huge' ? renderLetters() : 'STELLARIS'}
      </span>
      
      {/* Élément de reflet animé */}
      <div 
        ref={reflectionRef}
        className="absolute inset-0 reflection-gradient opacity-70"
      ></div>
    </div>
  );

  return linkEnabled ? (
    <Link to="/" className={`block ${className}`}>
      {logoContent}
    </Link>
  ) : (
    <div className={className}>
      {logoContent}
    </div>
  );
};

export default AnimatedLogo;
