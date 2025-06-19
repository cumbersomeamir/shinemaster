'use client';

import { useState, useEffect } from 'react';
import AnimatedCar from './AnimatedCar';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0B] via-[#1A1A1B] to-[#0A0A0B]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Car - Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatedCar />
      </div>

      {/* Top Content */}
      <div className={`relative z-20 pt-16 text-center px-6 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-4 animate-pulse">
          ShineMaster
        </h1>
        <p className="text-lg md:text-xl text-[#8B8B8D] max-w-2xl mx-auto">
          Experience the future of automotive excellence
        </p>
      </div>

      {/* Bottom Content */}
      <div className={`relative z-20 pb-24 text-center px-6 transition-all duration-2000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-xl md:text-2xl text-[#8B8B8D] mb-2 max-w-3xl mx-auto">
          Cutting-edge car care technology meets precision craftsmanship
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] text-[#0A0A0B] font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00D4FF]/50">
            Explore Services
          </button>
          <button className="px-8 py-4 border-2 border-[#00D4FF] text-[#00D4FF] font-semibold rounded-full hover:bg-[#00D4FF] hover:text-[#0A0A0B] transition-all duration-300">
            Get Quote
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-[#00D4FF] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00D4FF] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;