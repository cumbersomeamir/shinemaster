'use client';

const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.6 + 0.2
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[#00D4FF] animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
      
      {/* Larger Glowing Orbs */}
      {Array.from({ length: 8 }, (_, i) => ({
        id: i + 30,
        size: Math.random() * 6 + 4,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 30 + 20,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1
      })).map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] animate-float"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            opacity: orb.opacity,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
            filter: 'blur(1px)',
            boxShadow: `0 0 ${orb.size * 2}px rgba(0, 212, 255, 0.3)`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;