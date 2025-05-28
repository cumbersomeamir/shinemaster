'use client';

import { useState, useEffect } from 'react';

const MouseOilAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [oilDrops, setOilDrops] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create oil drop
      const newDrop = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        opacity: 1,
        createdAt: Date.now()
      };
      
      setOilDrops(prev => [...prev, newDrop]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up old drops
    const cleanup = setInterval(() => {
      setOilDrops(prev => prev.filter(drop => Date.now() - drop.createdAt < 3000));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Oil Drops */}
      {oilDrops.map((drop) => {
        const age = Date.now() - drop.createdAt;
        const fadeOut = Math.max(0, 1 - age / 3000);
        const scale = 1 + (age / 3000) * 0.5;
        
        return (
          <div
            key={drop.id}
            className="absolute rounded-full bg-gradient-to-br from-[#00D4FF]/40 via-[#FF9900]/30 to-[#0099CC]/60 blur-sm animate-pulse"
            style={{
              left: drop.x - drop.size / 2,
              top: drop.y - drop.size / 2,
              width: drop.size,
              height: drop.size,
              opacity: fadeOut,
              transform: `scale(${scale})`,
              boxShadow: `0 0 ${drop.size}px rgba(0, 212, 255, ${fadeOut * 0.3}), 0 0 ${drop.size * 0.5}px rgba(255, 153, 0, ${fadeOut * 0.2})`,
              transition: 'all 0.1s ease-out'
            }}
          />
        );
      })}
      
      {/* Main cursor glow */}
      <div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-[#00D4FF]/30 via-[#FF9900]/20 to-[#33DDFF]/30 blur-md animate-pulse"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 10px rgba(255, 153, 0, 0.3)',
          transition: 'all 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default MouseOilAnimation;