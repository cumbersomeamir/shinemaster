'use client'

import { useState } from 'react'

export default function CarServices() {
  const [expandedCard, setExpandedCard] = useState(null)

  const services = [
    {
      id: 'engine-oil',
      title: 'Engine Oil Change',
      icon: '🔧',
      time: '30-45 minutes',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
      features: [
        'Comprehensive Fluid Exchange',
        'Multi-Point Inspection', 
        'High-Performance Synthetic Oil',
        'Filter Replacement'
      ],
      benefits: 'Improved lubrication, reduced engine wear, optimized fuel efficiency',
      description: 'We drain old oil, replace the oil filter, and refill with manufacturer-specified, high-performance synthetic or semi-synthetic oil.'
    },
    {
      id: 'denting-painting',
      title: 'Full Denting & Painting',
      icon: '🎨',
      time: '2-5 days',
      image: 'https://images.unsplash.com/photo-1632823471565-1ecdf7a81d6f?w=600&h=400&fit=crop',
      features: [
        'Paintless Dent Repair',
        'Color Matching & Painting',
        'Clear Coat & Buffing',
        '3-Year Warranty'
      ],
      benefits: 'Factory finish restoration with precision color matching',
      description: 'Complete bodywork including dent removal, surface preparation, precision-matched paint application in our temperature-controlled booth.'
    },
    {
      id: 'interior-exterior-mod',
      title: 'Interior & Exterior Modification',
      icon: '✨',
      time: '1-3 weeks',
      image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&h=400&fit=crop',
      features: [
        'Custom Upholstery (Leather, Alcantara)',
        'Ambient LED Lighting',
        'Aerodynamic Body Kits',
        'Performance Vents'
      ],
      benefits: 'Complete vehicle transformation with premium materials',
      description: 'Custom interior upgrades and exterior enhancements with seamless electrical integration for infotainment and performance modifications.'
    },
    {
      id: 'wash-services',
      title: 'Premium Wash Services',
      icon: '🧽',
      time: '1-3 hours',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop',
      features: [
        'Touch-Free Wash Technology',
        'Clay-Bar Decontamination',
        'Wheel Deep Cleaning',
        'Tire Dressing'
      ],
      benefits: 'Showroom-quality finish with protective treatments',
      description: 'From basic wash to premium detail wash with pH-neutral shampoo, decontamination, and quick-detail spray for head-turning gloss.'
    },
    {
      id: 'custom-kits',
      title: 'Custom Kits & Body Upgrades',
      icon: '🏁',
      time: '3-7 days',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=600&h=400&fit=crop',
      features: [
        'Performance Kits',
        'Carbon-Fiber Accents',
        'Custom Body Wraps',
        'Illuminated Door Sills'
      ],
      benefits: 'Enhanced performance and aesthetic appeal',
      description: 'Cold-air intakes, cat-back exhausts, suspension lowering kits, and aesthetic packages with custom badging.'
    },
    {
      id: 'wheel-alignment',
      title: 'Wheel Alignment & Balancing',
      icon: '⚙️',
      time: '1-2 hours',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      features: [
        'Laser-Guided 4-Wheel Alignment',
        'Dynamic Balancing',
        'Caster, Camber, Toe Adjustment',
        'Thrust Angle Correction'
      ],
      benefits: 'Optimal handling, tire life, and smooth ride',
      description: 'Precision adjustments using laser-guided technology with dynamic balancing to eliminate vibrations.'
    },
    {
      id: 'accessories',
      title: 'Installation of Accessories',
      icon: '💡',
      time: '2-6 hours',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      features: [
        'LED Headlight Upgrades',
        'Dashcam Installation',
        'Remote Starters',
        'Parking Sensors'
      ],
      benefits: 'Enhanced safety, security, and convenience features',
      description: 'Professional installation of lighting upgrades, security systems, convenience features, and entertainment systems.'
    },
    {
      id: 'all-services',
      title: 'All Types of Car Services',
      icon: '🛠️',
      time: 'Custom',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
      features: [
        'Routine Maintenance',
        'Custom Builds',
        'Part Sourcing',
        'Modification Proposals'
      ],
      benefits: 'One-stop shop for all automotive needs',
      description: 'From routine maintenance to full custom builds, we handle everything. If you don\'t see your specific need listed, just ask!'
    }
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-8 py-4 bg-primary-500/20 backdrop-blur-md text-primary-400 rounded-full text-lg font-bold border border-primary-500/40">
            🚗 Car Services
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-8">
            Professional Car Care
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive automotive services from basic maintenance to complete custom builds
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedCard === service.id
            
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer"
                style={{
                  animation: `float ${5 + (index * 0.2)}s ease-in-out infinite`,
                  animationDelay: `${index * 100}ms`
                }}
                onClick={() => setExpandedCard(isExpanded ? null : service.id)}
              >
                {/* Card Container */}
                <div className={`
                  relative backdrop-blur-xl bg-gray-800/40 border border-primary-500/30 rounded-3xl 
                  transition-all duration-500 overflow-hidden
                  ${isExpanded ? 'scale-105 border-primary-400/60 shadow-2xl h-auto' : 'hover:scale-102 h-[600px]'}
                `}>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isExpanded ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/20
                      transition-opacity duration-500
                      ${isExpanded ? 'opacity-90' : 'opacity-75'}
                    `} />
                  </div>

                  {/* Glowing Border Effect */}
                  {isExpanded && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl opacity-50 animate-pulse" />
                  )}

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      {/* Icon and Time */}
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className={`
                            text-4xl transition-all duration-300
                            ${isExpanded ? 'scale-125' : ''}
                          `}
                          style={{ filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))' }}
                        >
                          {service.icon}
                        </div>
                        <div className={`
                          px-3 py-1 bg-primary-500/80 backdrop-blur-sm text-white rounded-full text-sm font-bold
                          ${isExpanded ? 'bg-primary-400 scale-110' : ''}
                        `}>
                          {service.time}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`
                        text-xl font-bold text-white mb-4 transition-all duration-300
                        ${isExpanded ? 'text-primary-300 text-2xl' : ''}
                      `}>
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-400">
                            <div className={`
                              w-2 h-2 bg-primary-400 rounded-full mr-3 transition-all duration-300
                              ${isExpanded ? 'w-3 h-3 bg-primary-300' : ''}
                            `} />
                            <span className={`text-sm ${isExpanded ? 'text-gray-200' : ''}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Benefits (shown when expanded) */}
                      {isExpanded && (
                        <div className="mb-6 p-4 bg-primary-500/10 rounded-2xl border border-primary-500/30">
                          <h4 className="text-primary-300 font-bold mb-2">Benefits:</h4>
                          <p className="text-gray-300 text-sm">{service.benefits}</p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div>
                      <button className={`
                        w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl 
                        font-bold text-lg transition-all duration-300 overflow-hidden relative group
                        ${isExpanded ? 'from-primary-400 to-primary-500 scale-105' : ''}
                      `}>
                        <span className="relative z-10 flex items-center justify-center">
                          {isExpanded ? 'Book Now' : 'Learn More'}
                          <span className={`ml-2 transition-transform ${isExpanded ? 'translate-x-2' : ''}`}>
                            {isExpanded ? '📞' : '→'}
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  {isExpanded && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(15)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-70"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
      `}</style>
    </section>
  )
}