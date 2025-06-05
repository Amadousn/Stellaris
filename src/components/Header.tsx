import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './ui/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Menu simplifié avec moins d'options pour un look plus professionnel
  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Comptabilité', path: '/comptabilite' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary-dark/80 backdrop-blur-md py-3 shadow-lg shadow-black/20' : 'bg-transparent py-4'}`}
    >
      {/* Fond plus sobre et professionnel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent opacity-70" />
      
      {/* Bordure inférieure plus discrète et professionnelle */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="h-full bg-gradient-to-r from-transparent via-slate-400/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 flex justify-between items-center relative z-10">
        <div className="relative">
          <Logo />
          {/* Effet de lueur sous le logo */}
          <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 blur-xl rounded-full opacity-50" />
        </div>

        {/* Menu desktop - Style professionnel */}
        <div className="hidden md:flex items-center space-x-4">
          {menuItems.map((item) => (
            <div key={item.path} className="px-1">
              <Link
                to={item.path}
                className={`relative text-gray-200 hover:text-white transition-all duration-300 py-2 px-4 group overflow-hidden ${location.pathname === item.path ? 'font-medium text-white' : 'font-normal'}`}
              >
                {/* Effet de fond au survol - plus subtil */}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Indicateur de page active - plus discret */}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/40" />
                )}
                
                {/* Texte du menu avec espacement optimisé */}
                <span className="relative z-10 tracking-wide text-sm font-medium">{item.name}</span>
              </Link>
            </div>
          ))}
          <div className="ml-6">
            <Link
              to="/devis"
              className="relative px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex items-center"
            >
              {/* Effet de hover plus subtil et professionnel */}
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded"></span>
              
              <span className="relative z-10 text-sm font-medium tracking-wide">Demander un devis</span>
            </Link>
          </div>
        </div>

        {/* Menu mobile button */}
        <button
          className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu principal"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 transition-all duration-300">
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 translate-y-[3px]' : 'w-5'}`}
            ></span>
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-4 opacity-100'}`}
            ></span>
            <span 
              className={`block h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-5 rotate-45 -translate-y-[3px]' : 'w-3'}`}
            ></span>
          </div>
        </button>

        {/* Menu mobile professionnel */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden overflow-hidden backdrop-blur-md shadow-lg animate-fadeIn bg-primary-dark/95 border-t border-slate-700/20">
            <div className="container mx-auto px-4 py-5 flex flex-col space-y-1 relative z-10">
              {menuItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 relative ${location.pathname === item.path ? 'text-white font-medium' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Indicateur de page active - version sobre */}
                    {location.pathname === item.path && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[50%] bg-blue-600"></span>
                    )}
                    
                    <span className="relative z-10 tracking-wide text-sm">{item.name}</span>
                  </Link>
                  {/* Séparateur subtil entre les éléments */}
                  {item.path !== menuItems[menuItems.length - 1].path && (
                    <div className="h-[1px] bg-slate-700/20 mx-4"></div>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  to="/devis"
                  className="block w-full text-center py-3 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10 text-sm font-medium tracking-wide">Demander un devis</span>
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
