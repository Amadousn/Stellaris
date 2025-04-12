import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Essentiel',
      price: '999',
      description: 'Parfait pour les petites entreprises',
      features: [
        'Site web vitrine responsive',
        'Jusqu\'à 5 pages',
        'Formulaire de contact',
        'Optimisation SEO de base',
        'Hébergement inclus',
        'Support par email'
      ]
    },
    {
      name: 'Business',
      price: '1999',
      description: 'Idéal pour les entreprises en croissance',
      features: [
        'Site web dynamique',
        'Jusqu\'à 10 pages',
        'Blog intégré',
        'Optimisation SEO avancée',
        'Hébergement premium',
        'Support prioritaire',
        'Analytics avancés',
        'Formation incluse'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '3999',
      description: 'Pour les projets ambitieux',
      features: [
        'Site web sur mesure',
        'Pages illimitées',
        'E-commerce intégré',
        'SEO professionnel',
        'Hébergement haute performance',
        'Support 24/7',
        'Analytics en temps réel',
        'Formation complète',
        'Maintenance mensuelle'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Tarifs
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions adaptées à tous les budgets pour propulser votre présence en ligne
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white/5 rounded-xl p-8 backdrop-blur-sm ${
                plan.popular
                  ? 'border-2 border-secondary'
                  : 'border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white text-sm font-medium px-4 py-1 rounded-full">
                    Plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl font-bold text-white">€</span>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheck className="w-5 h-5 text-secondary mt-0.5 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className={`inline-block w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-secondary hover:bg-secondary/90 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Commencer
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vous avez des questions ?
          </h2>
          <p className="text-gray-400 mb-8">
            N'hésitez pas à nous contacter pour obtenir un devis personnalisé
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white/10 hover:bg-white/20 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
