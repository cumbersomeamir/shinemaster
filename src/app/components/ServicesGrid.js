'use client';

import { useState } from 'react';

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Ceramic and Graphene Coatings",
      description: "Advanced nano-coating technology for ultimate protection and 5+ years durability",
      image: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="10" fill="currentColor"/>
          <path d="M30 30 Q50 10 70 30" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M30 70 Q50 90 70 70" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "from-blue-600 to-cyan-500",
      stats: "5+ Years Protection"
    },
    {
      id: 2,
      title: "Paint Protection Films",
      description: "Invisible armor against scratches, stone chips, and environmental damage",
      image: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
          <rect x="20" y="30" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="3"/>
          <rect x="15" y="25" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
          <rect x="10" y="20" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          <path d="M35 45 L45 55 L65 35" fill="none" stroke="currentColor" strokeWidth="3"/>
        </svg>
      ),
      color: "from-purple-600 to-blue-500",
      stats: "Self-Healing Technology"
    },
    {
      id: 3,
      title: "Body-shop (Denting & Painting)",
      description: "Professional collision repair and custom paintwork with color matching",
      image: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
          <path d="M20 60 Q30 40 50 60 Q70 40 80 60 L80 80 L20 80 Z" fill="currentColor"/>
          <circle cx="35" cy="35" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M35 27 L35 43 M27 35 L43 35" stroke="currentColor" strokeWidth="2"/>
          <rect x="55" y="25" width="20" height="3" fill="currentColor"/>
          <rect x="60" y="30" width="10" height="8" fill="currentColor"/>
        </svg>
      ),
      color: "from-red-600 to-orange-500",
      stats: "Color Match Guarantee"
    },
    {
      id: 4,
      title: "Detailing and Interior Cleaning",
      description: "Comprehensive interior and exterior detailing with premium products",
      image: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
          <path d="M30 20 L70 20 L75 30 L75 70 L25 70 L25 30 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
          <rect x="35" y="30" width="30" height="2" fill="currentColor"/>
          <rect x="35" y="35" width="25" height="2" fill="currentColor"/>
          <rect x="35" y="40" width="20" height="2" fill="currentColor"/>
          <circle cx="50" cy="55" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M45 55 L50 60 L60 45" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "from-green-600 to-teal-500",
      stats: "Premium Products"
    },
    {
      id: 5,
      title: "Wrap Jobs",
      description: "Creative vehicle wraps and color transformations with premium vinyl",
      image: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
          <path d="M20 30 Q50 10 80 30 L80 70 Q50 90 20 70 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M30 30 Q50 20 70 30 L70 70 Q50 80 30 70 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="40" cy="40" r="3" fill="currentColor"/>
          <circle cx="60" cy="45" r="3" fill="currentColor"/>
          <circle cx="45" cy="60" r="3" fill="currentColor"/>
        </svg>
      ),
      color: "from-pink-600 to-purple-500",
      stats: "3M Certified"
    },
    {
      id: 6,
      title: "Insurance Claim",
      description: "Hassle-free insurance claim processing and direct billing support",
      image: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
          <rect x="25" y="20" width="50" height="60" rx="3" fill="none" stroke="currentColor" strokeWidth="3"/>
          <rect x="30" y="30" width="40" height="2" fill="currentColor"/>
          <rect x="30" y="40" width="35" height="2" fill="currentColor"/>
          <rect x="30" y="50" width="30" height="2" fill="currentColor"/>
          <path d="M35 60 L40 65 L55 50" fill="none" stroke="currentColor" strokeWidth="3"/>
          <rect x="40" y="10" width="20" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "from-yellow-600 to-orange-500",
      stats: "Direct Billing"
    },
    {
      id: 7,
      title: "Interior Modification",
      description: "Custom interior upgrades, seat covers, and dashboard modifications",
      image: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
          <rect x="15" y="40" width="70" height="35" rx="5" fill="none" stroke="currentColor" strokeWidth="3"/>
          <rect x="20" y="25" width="15" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="65" y="25" width="15" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="55" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="70" cy="55" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
          <rect x="45" y="50" width="10" height="10" fill="currentColor"/>
        </svg>
      ),
      color: "from-indigo-600 to-purple-500",
      stats: "Custom Design"
    },
    {
      id: 8,
      title: "Other Services",
      description: "Additional automotive care including maintenance and specialty services",
      image: (
        <svg viewBox="0 0 100 100" className="w-12 h-12 text-white">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M35 35 L50 50 L65 35" fill="none" stroke="currentColor" strokeWidth="3"/>
          <path d="M35 65 L50 50 L65 65" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="50" r="5" fill="currentColor"/>
          <rect x="20" y="15" width="60" height="3" fill="currentColor"/>
          <rect x="20" y="82" width="60" height="3" fill="currentColor"/>
        </svg>
      ),
      color: "from-gray-600 to-blue-500",
      stats: "Full Service"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1A1A1B] to-[#0A0A0B] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #00D4FF 1px, transparent 1px), radial-gradient(circle at 75% 75%, #33DDFF 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00D4FF] via-[#FF9900] to-[#33DDFF] bg-clip-text text-transparent mb-6 font-orbitron">
            Our Services
          </h2>
          <p className="text-xl text-[#8B8B8D] max-w-3xl mx-auto mb-8 font-exo">
            Comprehensive automotive care solutions powered by cutting-edge technology and expert craftsmanship
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#00D4FF] font-orbitron">15+</div>
              <div className="text-sm text-[#8B8B8D] font-exo">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#FF9900] font-orbitron">5000+</div>
              <div className="text-sm text-[#8B8B8D] font-exo">Cars Serviced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00D4FF] font-orbitron">98%</div>
              <div className="text-sm text-[#8B8B8D] font-exo">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative h-72 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${
                index < 4 ? 'lg:h-80' : 'lg:h-72'
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {service.image}
                  </div>
                  <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {service.stats}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className={`text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0`}>
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-[#00D4FF] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 to-[#33DDFF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-10 py-4 bg-gradient-to-r from-[#00D4FF] via-[#FF9900] to-[#33DDFF] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF9900]/50 text-lg font-exo">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;