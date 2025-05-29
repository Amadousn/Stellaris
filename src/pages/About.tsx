import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import StarryBackground from '../components/StarryBackground'
import { FaRocket, FaUsers, FaLightbulb, FaStar } from 'react-icons/fa'

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  delay: number
}

interface TeamMemberProps {
  name: string
  role: string
  image: string
  delay: number
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
  isLeft: boolean
  delay: number
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm rounded-xl" />
    <div className="relative p-6 text-center rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300">
      <div className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  </motion.div>
)

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative group"
  >
    <div className="relative overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
          {name}
        </h3>
        <p className="text-gray-300">{role}</p>
      </div>
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
)

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLeft, delay }) => (
  <div className="relative">
    {/* Ligne verticale */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-800" />
    
    {/* Point sur la timeline */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-4 h-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
    </motion.div>

    {/* Contenu */}
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative mb-16 w-5/12 ${isLeft ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
    >
      <div className="relative p-6 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-800">
        <div className="text-blue-400 font-bold mb-2">{year}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  </div>
)

const ShimmerText = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative z-10">{children}</div>
      <motion.div
        className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full"
        animate={{ translateX: ['0%', '200%'] }}
        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
      />
    </div>
  );
};

const AnimatedIcon = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      className="text-lavender-400 w-8 h-8"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const Sparkles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.8]);
          const y = useTransform(scrollYProgress, [0, 1], [0, Math.random() * 100 - 50]);
          
          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity,
                y,
                boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.4)',
              }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          );
        })}
      </div>
    );
  };
  
  const AnimatedSection = ({ children, index = 0 }: { children: React.ReactNode, index?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className="mb-20"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 z-0">
        <StarryBackground />
      </div>
      <Sparkles />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, rgba(59,130,246,0.03) 70%, rgba(0,0,0,0) 100%)',
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 80}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              scale: [1, Math.random() * 0.3 + 0.9, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40"></div>
      
      <div className="relative z-10">
        <Section>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <ShimmerText>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-lavender-400 via-silver-300 to-lavender-500 animate-gradient-x tracking-wide">
                  À Propos de Stellaris
                </h1>
              </ShimmerText>
              
              <p className="text-xl text-lavender-100 mb-16 tracking-wide leading-relaxed">
                Chez Stellaris, nous partons d'un principe simple : chaque projet est unique.
                C'est pourquoi nous avons conçu une approche agile, capable d'évoluer avec les besoins, les contextes et les ambitions.
              </p>
            </AnimatedSection>
            
            <div className="space-y-20">
              <AnimatedSection index={1}>
                <div className="relative">
                  {/* Icône animée */}
                  <div className="absolute -left-16 top-0 hidden md:block">
                    <AnimatedIcon>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path d="M12 2L1 21h22L12 2zm0 4.6L19.1 19H4.9L12 6.6z" />
                      </svg>
                    </AnimatedIcon>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-gradient-x tracking-wide">
                    Notre Approche
                  </h2>
                  <p className="text-lavender-100 leading-relaxed">
                    Nous mettons notre expertise au service de vos idées pour leur donner forme avec clarté, ésthétisme et précision.
                    Chaque collaboration est une immersion.
                    Nous travaillons en lien direct avec nos clients pour comprendre leur vision, leurs objectifs et ce qui les rend singuliers. Une démarche qui repose sur la co-création, l'écoute active et une exigence constante de justesse.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection index={2}>
                <div className="relative">
                  {/* Icône animée */}
                  <div className="absolute -left-16 top-0 hidden md:block">
                    <AnimatedIcon delay={2}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </AnimatedIcon>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-gradient-x tracking-wide">
                    Notre Vision
                  </h2>
                  <p className="text-lavender-100 leading-relaxed">
                    Portée par l'élan de sa création, Stellaris affirme une vision en mouvement, indépendante et à l'écoute de son époque.
                    Rien n'est figé.
                    Notre manière de faire évolue en permanence, avec souplesse et lucidité. C'est une façon de créer en perpétuelle réinvention, attentive au présent mais toujours tournée vers ce qui n'existe pas encore.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection index={3}>
                <div className="relative">
                  {/* Icône animée */}
                  <div className="absolute -left-16 top-0 hidden md:block">
                    <AnimatedIcon delay={4}>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-2V13h2v5.5zm0-7.5h-2V5.5h2V11zm6 7.5h-2V9.5h2V19zm0-11.5h-2V5.5h2V7.5z" />
                      </svg>
                    </AnimatedIcon>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-gradient-x tracking-wide">
                    Notre Engagement
                  </h2>
                  <p className="text-lavender-100 leading-relaxed">
                    Nous accompagnons nos clients avec une vision large : de l'identité à la stratégie, du concept à la mise en œuvre, toujours avec cohérence et impact.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection index={4}>
                <div className="mt-16 p-8 rounded-2xl backdrop-blur-sm border border-lavender-400/20 relative overflow-hidden group">
                  {/* Halo lumineux */}
                  <div className="absolute inset-0 bg-gradient-to-r from-lavender-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-gradient-x tracking-wide">
                    Prêt à collaborer avec nous ?
                  </h2>
                  
                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to="/contact?type=quote&source=about"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-lavender-400 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-lavender-400/20 transition-all duration-300 relative overflow-hidden group"
                      >
                        <span className="relative z-10">Discuter de votre projet</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                        
                        {/* Effet de reflet glissant */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 -translate-x-full z-20"
                          animate={{ translateX: ['0%', '200%'] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default About;
