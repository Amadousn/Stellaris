import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Services',
      links: [
        { name: 'Création Site Internet', path: '/creation-site-internet' },
        { name: 'Référencement Naturel', path: '/referencement-naturel' },
        { name: 'Création Graphique', path: '/creation-graphique' },
        { name: 'Référencement Sponsorisé', path: '/referencement-sponsorise' },
        { name: 'Référencement Social', path: '/referencement-social' },
        { name: 'Référencement Vidéo', path: '/referencement-video' },
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'Légal',
      links: [
        { name: 'Mentions légales', path: '/mentions-legales' },
        { name: 'Politique de confidentialité', path: '/confidentialite' },
        { name: 'CGV', path: '/cgv' },
      ],
    },
  ]

  return (
    <footer className="bg-primary/95 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-secondary">
              Stellaris
            </Link>
            <p className="mt-4 text-gray-400">
              Solutions de marketing digital innovantes pour développer votre présence en ligne.
            </p>
          </div>

          {/* Service Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-secondary transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Stellaris. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
