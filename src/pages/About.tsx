import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaStar } from 'react-icons/fa';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay: number;
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
  delay: number;
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
);

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
);

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
);

const About: React.FC = () => {
  const stats = [
    { icon: <FaRocket />, value: "150+", label: "Projets Réalisés", delay: 0.1 },
    { icon: <FaUsers />, value: "98%", label: "Clients Satisfaits", delay: 0.2 },
    { icon: <FaLightbulb />, value: "10+", label: "Années d'Expérience", delay: 0.3 },
    { icon: <FaStar />, value: "500+", label: "Avis Positifs", delay: 0.4 }
  ];

  const team = [
    {
      name: "Sophie Martin",
      role: "Directrice Créative",
      image: "/images/team/sophie.jpg",
      delay: 0.2
    },
    {
      name: "Thomas Dubois",
      role: "Lead Developer",
      image: "/images/team/thomas.jpg",
      delay: 0.3
    },
    {
      name: "Emma Bernard",
      role: "UI/UX Designer",
      image: "/images/team/emma.jpg",
      delay: 0.4
    },
    {
      name: "Lucas Petit",
      role: "Marketing Manager",
      image: "/images/team/lucas.jpg",
      delay: 0.5
    }
  ];

  const timeline = [
    {
      year: "2015",
      title: "Création de Stellaris",
      description: "Lancement de l'agence avec une vision innovante du digital.",
      isLeft: true,
      delay: 0.2
    },
    {
      year: "2017",
      title: "Expansion Nationale",
      description: "Ouverture de nouveaux bureaux et croissance de l'équipe.",
      isLeft: false,
      delay: 0.3
    },
    {
      year: "2019",
      title: "Innovation Technologique",
      description: "Adoption des dernières technologies et méthodologies agiles.",
      isLeft: true,
      delay: 0.4
    },
    {
      year: "2021",
      title: "Leadership Digital",
      description: "Reconnaissance comme leader dans la transformation digitale.",
      isLeft: false,
      delay: 0.5
    },
    {
      year: "2023",
      title: "Excellence & Impact",
      description: "Plus de 150 projets réussis et impact durable.",
      isLeft: true,
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-primary pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Notre Histoire
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez l'équipe passionnée derrière Stellaris et notre parcours vers l'excellence numérique
          </p>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-16"
          >
            Notre Parcours
          </motion.h2>
          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Équipe */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-16"
          >
            Notre Équipe
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
