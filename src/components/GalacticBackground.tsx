const GalacticBackground = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        zIndex: -1
      }}
    >
      {/* Fond de base avec dégradé */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, #1a237e 0%, #000000 70%)',
          opacity: 1
        }}
      />

      {/* Nébuleuse plus claire */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
          filter: 'blur(40px)',
          opacity: 0.8
        }}
      />
    </div>
  )
}

export default GalacticBackground
