'use client'

import { useState } from 'react'

export default function BikeServices() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 'bike-ppf',
      title: 'Paint Protection Film (PPF)',
      icon: '🏍️',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      features: [
        'Helmet & Fairing Coverage',
        'High-Adhesion Film',
        'Impact Area Protection',
        'Factory Paint Preservation'
      ],
      description: 'High-adhesion film specifically designed for motorcycles, protecting high-impact areas while preserving factory paint.',
      specialty: 'Motorcycle Specialist'
    },
    {
      id: 'bike-ceramic',
      title: 'Ceramic Coating',
      icon: '💎',
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop',
      features: [
        'One-Step Finish',
        'Frame Protection',
        'Tank Coating',
        'Metal Component Care'
      ],
      description: 'Easy-to-clean ceramic surface treatment for frames, tanks, and metal components with long-lasting protection.',
      specialty: 'Durability Expert'
    },
    {
      id: 'bike-wraps',
      title: 'Bike Wraps',
      icon: '🌈',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      features: [
        'Custom Designs',
        'Full-Bike Coverage',
        'Camouflage Patterns',
        'Gloss & Satin Finishes'
      ],
      description: 'Full-bike or accent wraps in any pattern or finish including camouflage, gloss, and satin options.',
      specialty: 'Design Master'
    },
    {
      id: 'helmet-ppf',
      title: 'PPF for Helmets',
      icon: '🪖',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?w=600&h=400&fit=crop',
      features: [
        'Enhanced Safety',
        'Clear Film Application',
        'Integrity Preservation',
        'Scratch Protection'
      ],
      description: 'Clear protective film that maintains helmet integrity while protecting against scratches and chips.',
      specialty: 'Safety First'
    },
    {
      id: 'bike-stickers',
      title: 'Customizable Stickers',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      features: [
        'Track-Ready Decals',
        'Number Plates',
        'Sponsor Logos',
        'Weatherproof Materials'
      ],
      description: 'UV-resistant vinyl graphics including number plates, sponsor logos, and personalized designs that withstand high speeds.',
      specialty: 'Racing Ready'
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-8 py-4 bg-primary-500/20 backdrop-blur-md text-primary-400 rounded-full text-lg font-bold border border-primary-500/40">
            🏍️ Motorcycle Services
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-8">
            Bike Specialists
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Specialized services for motorcycles, from protective films to custom wraps and helmet protection
          </p>
        </div>

        {/* Interactive Service Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Service Navigation */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`
                  p-6 rounded-2xl cursor-pointer transition-all duration-500 border
                  ${activeService === index 
                    ? 'bg-primary-500/20 border-primary-400/60 scale-105' 
                    : 'bg-gray-800/40 border-primary-500/20 hover:bg-gray-800/60 hover:border-primary-400/40'
                  }
                `}
                onClick={() => setActiveService(index)}
                style={{
                  animation: `float ${4 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className={`
                      text-4xl transition-all duration-300
                      ${activeService === index ? 'scale-125' : ''}
                    `}
                    style={{ filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))' }}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`
                      text-xl font-bold transition-colors duration-300
                      ${activeService === index ? 'text-primary-300' : 'text-white'}
                    `}>
                      {service.title}
                    </h3>
                    <p className={`
                      text-sm font-semibold transition-colors duration-300
                      ${activeService === index ? 'text-primary-400' : 'text-gray-400'}
                    `}>
                      {service.specialty}
                    </p>
                  </div>
                  <div className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${activeService === index ? 'bg-primary-400 animate-pulse' : 'bg-gray-600'}
                  `} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Active Service Display */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              {/* Background Image */}
              <div className="relative h-[500px]">
                <img 
                  src={services[activeService].image} 
                  alt={services[activeService].title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-5xl" style={{ filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.7))' }}>
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{services[activeService].title}</h3>
                      <p className="text-primary-400 font-semibold">{services[activeService].specialty}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {services[activeService].description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg group">
                    <span className="flex items-center justify-center">
                      🏍️ Book Bike Service
                      <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Glowing Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl opacity-30 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🏆', title: 'Expert Technicians', desc: 'Motorcycle specialists with years of experience' },
            { icon: '⚡', title: 'Quick Turnaround', desc: 'Most services completed same day' },
            { icon: '🛡️', title: 'Premium Materials', desc: 'Only the highest quality films and coatings' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="text-center p-8 bg-gray-800/40 backdrop-blur-md rounded-3xl border border-primary-500/20 transition-all duration-500 hover:scale-105 hover:border-primary-400/40"
              style={{
                animation: `float ${5 + idx}s ease-in-out infinite`,
                animationDelay: `${idx * 300}ms`
              }}
            >
              <div className="text-5xl mb-4" style={{ filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.5))' }}>
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-gradient mb-2">{stat.title}</h3>
              <p className="text-gray-400">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(0.5deg); }
          66% { transform: translateY(-4px) rotate(-0.5deg); }
        }
      `}</style>
    </section>
  )
}