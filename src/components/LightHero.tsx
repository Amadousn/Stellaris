const LightHero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Fond animé subtil */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent animate-pulse"
      />
      
      {/* Contenu */}
      <div className="relative z-10 text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Solutions Marketing Digital Innovantes
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Développez votre présence en ligne avec nos services de marketing digital sur mesure
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/creation-site-internet"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg transition-all duration-300"
          >
            Découvrir nos services
          </a>
          <a
            href="/devis"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg transition-all duration-300"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Effet de lumière radiale */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full animate-glow"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
        }}
      />

      <style>
        {`
          @keyframes glow {
            from { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
            to { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
          }

          .animate-glow {
            animation: glow 4s ease-in-out infinite alternate;
          }
        `}
      </style>
    </div>
  )
}

export default LightHero
