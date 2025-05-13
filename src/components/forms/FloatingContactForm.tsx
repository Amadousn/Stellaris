import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative max-w-md mx-auto"
    >
      {/* Halo lumineux en arrière-plan */}
      <div className="absolute -inset-4 bg-gradient-to-r from-lavender-400/10 to-blue-500/10 rounded-xl blur-xl"></div>
      
      {/* Bordure lumineuse */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-lavender-400/30 to-blue-500/30"></div>
      
      {/* Formulaire */}
      <div className="relative bg-gray-900/70 backdrop-blur-md rounded-xl p-6 shadow-xl border border-lavender-400/10">
        <h3 className="text-xl font-medium text-white mb-4">Contactez-nous</h3>
        
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-8 text-center"
          >
            <div className="mb-4 text-green-400">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className="text-lavender-100 text-lg">Merci pour votre message. Nous vous répondrons très rapidement.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-lavender-100 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-lavender-100 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-lavender-100 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-gray-800/50 border border-lavender-400/30 rounded-lg focus:ring-2 focus:ring-lavender-400/50 focus:border-transparent"
                required
              />
            </div>
            
            <div className="pt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 bg-gradient-to-r from-lavender-400 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-lavender-400/20 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Entrer en contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                
                {/* Effet de reflet glissant */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full z-20"
                  animate={{ translateX: ['0%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                />
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default FloatingContactForm;
