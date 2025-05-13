import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './ui/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Création Web', path: '/creation-site-internet' },
    { name: 'SEO', path: '/referencement-naturel' },
    { name: 'Design', path: '/creation-graphique' },
    { name: 'Publicité', path: '/referencement-sponsorise' },
    { name: 'Social Media', path: '/referencement-social' },
    { name: 'Vidéo', path: '/referencement-video' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary-dark/70 backdrop-blur-xl py-2 shadow-2xl shadow-black/30' : 'bg-transparent py-4'}`}
    >
      {/* Effet de verre premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-80" />
      
      {/* Bordure lumineuse subtile avec dégradé coloré */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="h-full bg-gradient-to-r from-transparent via-indigo-500/30 to-purple-500/30 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <div className="relative">
          <Logo />
          {/* Effet de lueur sous le logo */}
          <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 blur-xl rounded-full opacity-50" />
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <div key={item.path} className="px-2">
              <Link
                to={item.path}
                className={`relative text-gray-200 hover:text-white transition-all duration-300 py-2 px-3 rounded-md group overflow-hidden ${location.pathname === item.path ? 'font-medium text-white' : 'font-normal'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Effet de fond au survol */}
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                
                {/* Indicateur de page active - Lueur subtile */}
                {location.pathname === item.path && (
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-md" />
                )}
                
                {/* Effet de bordure au survol */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-indigo-400/60 to-purple-400/60 group-hover:w-4/5 transition-all duration-300" />
                
                {/* Texte du menu */}
                <span className="relative z-10 tracking-wide">{item.name}</span>
              </Link>
            </div>
          ))}
          <div className="ml-4">
            <Link
              to="/devis"
              className="relative overflow-hidden px-5 py-2 rounded-md bg-gradient-to-r from-indigo-900/50 to-purple-900/50 text-white border border-white/10 hover:border-indigo-400/30 transition-all duration-300 group flex items-center"
            >
              {/* Effet de brillance */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              
              {/* Lueur au survol */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"></span>
              
              <span className="relative z-10 font-medium tracking-wide">Devis</span>
            </Link>
          </div>
        </div>

        {/* Menu mobile button */}
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-gradient-to-r hover:from-indigo-900/20 hover:to-purple-900/20 transition-all duration-300 relative group"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Effet de fond au survol */}
          <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-white/5 transition-opacity duration-300"></span>
          
          <svg
            className="w-6 h-6 text-gray-200 group-hover:text-white transition-colors duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu mobile premium */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden overflow-hidden backdrop-blur-xl shadow-2xl animate-fadeIn bg-gradient-to-b from-gray-900/95 to-primary-dark/95 border-t border-indigo-500/10">
            {/* Effet de particules subtiles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5"
                  style={{
                    width: '3px',
                    height: '3px',
                    top: `${20 * i}%`,
                    left: `${15 * i}%`,
                    animation: `float-slow ${5 + i}s infinite ease-in-out`
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-2 relative z-10">
              {menuItems.map((item, index) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-md relative overflow-hidden group ${location.pathname === item.path ? 'bg-gradient-to-r from-indigo-900/20 to-purple-900/20 text-white' : 'hover:bg-white/5'}`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Effet de brillance au survol */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                    
                    {/* Indicateur de page active */}
                    {location.pathname === item.path && (
                      <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-400/50 to-purple-400/50 rounded-full"></span>
                    )}
                    
                    <span className="relative z-10 tracking-wide">{item.name}</span>
                  </Link>
                </div>
              ))}
              <div className="pt-6 pb-2">
                <Link
                  to="/devis"
                  className="block w-full text-center py-3 px-4 rounded-md relative overflow-hidden group border border-indigo-500/20 bg-gradient-to-r from-indigo-900/30 to-purple-900/30"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Effet de brillance */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                  
                  {/* Lueur au survol */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10"></span>
                  
                  <span className="relative z-10 text-white font-medium tracking-wide">Demander un devis</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
