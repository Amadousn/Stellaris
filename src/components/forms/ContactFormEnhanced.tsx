import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/forms.css';

interface ContactFormEnhancedProps {
  onSubmit: (formData: any) => void;
  borderColor?: 'blue' | 'gold';
}

const ContactFormEnhanced: React.FC<ContactFormEnhancedProps> = ({ 
  onSubmit,
  borderColor = 'blue'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
  };

  const borderClass = borderColor === 'gold' 
    ? 'contact-form-gold-border' 
    : 'contact-form-blue-border';

  return (
    <div className="contact-form-container">
      {!submitted ? (
        <motion.form 
          onSubmit={handleSubmit}
          className={`contact-form ${borderClass}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="contact-form-title">Contactez-nous</h2>
          
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="form-input"
              rows={5}
              required
            />
          </div>

          <button type="submit" className="contact-submit-button">
            Entrer en contact
          </button>
        </motion.form>
      ) : (
        <motion.div 
          className="confirmation-message"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Merci pour votre message !</h2>
          <p>Nous vous répondrons dans les plus brefs délais.</p>
        </motion.div>
      )}
    </div>
  );
};

export default ContactFormEnhanced;
