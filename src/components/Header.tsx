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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary-dark/80 backdrop-blur-xl py-2 shadow-xl shadow-primary-dark/20' : 'bg-transparent py-4'}`}
    >
      {/* Bordure lumineuse subtile */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="relative">
          <Logo />
          {/* Effet de lueur sous le logo */}
          <div className="absolute -bottom-2 left-0 right-0 h-4 bg-secondary/10 blur-xl rounded-full opacity-50" />
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <div key={item.path}>
              <Link
                to={item.path}
                className={`relative text-white hover:text-secondary-light transition-all duration-300 py-2 group ${location.pathname === item.path ? 'font-bold text-secondary-light' : 'font-medium'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                {/* Indicateur de page active */}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary-light rounded-full" />
                )}
                {/* Effet au survol */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            </div>
          ))}
          <div>
            <Link
              to="/devis"
              className="btn btn-primary inline-flex items-center justify-center overflow-hidden relative hover:shadow-glow transition-all duration-300 group"
            >
              {/* Effet de particules */}
              <span className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <span className="absolute top-0 left-[10%] w-1 h-1 rounded-full bg-white animate-float-slow"></span>
                <span className="absolute top-[40%] left-[80%] w-1 h-1 rounded-full bg-white animate-float-slow-reverse"></span>
              </span>
              {/* Effet de brillance */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              <span className="relative z-10">Devis</span>
            </Link>
          </div>
        </div>

        {/* Menu mobile button */}
        <button
          className="md:hidden text-white p-2 rounded-full hover:bg-secondary/20 transition-all duration-300 relative group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Effet de lueur au survol */}
          <span className="absolute inset-0 rounded-full bg-secondary/0 group-hover:bg-secondary/10 transition-all duration-300"></span>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 relative z-10 transition-transform duration-300 ease-in-out"
            style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
                className="text-secondary"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu mobile premium */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glass-dark md:hidden overflow-hidden backdrop-blur-xl shadow-2xl border-t border-secondary/10 animate-fadeIn">
            {/* Effet de particules */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="absolute rounded-full bg-secondary/10"
                  style={{
                    width: '4px',
                    height: '4px',
                    top: `${20 * i}%`,
                    left: `${15 * i}%`,
                    animation: `float-slow ${5 + i}s infinite ease-in-out`
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4 relative z-10">
              {menuItems.map((item, index) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block text-white hover:text-secondary-light transition-all duration-300 py-3 px-4 rounded-md relative overflow-hidden group ${location.pathname === item.path ? 'bg-secondary/10 font-bold text-secondary-light' : 'font-medium hover:bg-primary-light/10'}`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Effet de brillance au survol */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                    
                    {/* Indicateur de page active */}
                    {location.pathname === item.path && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent rounded-full"></span>
                    )}
                    
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/devis"
                  className="btn btn-primary w-full text-center group relative overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Effet de particules */}
                  <span className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                    <span className="absolute top-0 left-[10%] w-1 h-1 rounded-full bg-white animate-float-slow"></span>
                    <span className="absolute top-[40%] left-[80%] w-1 h-1 rounded-full bg-white animate-float-slow-reverse"></span>
                  </span>
                  {/* Effet de brillance */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                  <span className="relative z-10">Demander un devis</span>
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
