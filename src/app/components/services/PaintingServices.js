'use client'

import { useState } from 'react'

export default function PaintingServices() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      id: 'professional-painting',
      title: 'Professional Painting Jobs',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop',
      features: [
        'OEM-Spec Repainting',
        'Custom Finishes (Matte, Satin, Metallic)',
        'Two-Tone Effects',
        'Color-Shift Finishes'
      ],
      description: 'Perfect match to original paint codes with lasting durability and custom finish options.',
      warranty: '3+ Years'
    },
    {
      id: 'paint-protection-film',
      title: 'Paint Protection Film (PPF)',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      features: [
        'Self-Healing Film Technology',
        'Edge-to-Edge Coverage',
        'Rock Chip Protection',
        'UV Ray Resistance'
      ],
      description: 'Invisible shield that protects against road debris and minor scratches with self-healing properties.',
      warranty: '10+ Years'
    },
    {
      id: 'ceramic-coating',
      title: 'Ceramic Coating',
      icon: '💎',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=400&fit=crop',
      features: [
        'Multi-Layer Application',
        'Hydrophobic Barrier',
        'UV Protection',
        'Reduced Wash Frequency'
      ],
      description: 'Creates a hydrophobic barrier that repels water, dirt, and UV rays with long-lasting protection.',
      warranty: '2-5 Years'
    },
    {
      id: 'vehicle-wraps',
      title: 'Vehicle Wraps',
      icon: '🌈',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=600&h=400&fit=crop',
      features: [
        'Full & Partial Wraps',
        'High-Resolution Printing',
        'Commercial Branding',
        'Any Color or Finish'
      ],
      description: 'Vinyl wraps in any color or finish including gloss, matte, brushed metal, and custom graphics.',
      warranty: '5-7 Years'
    },
    {
      id: 'underbody-coating',
      title: 'Underbody Coating',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
      features: [
        'Rust Prevention',
        'Wax-Based Protection',
        'Sound Dampening',
        'NVH Reduction'
      ],
      description: 'Wax-based or rubberized undercoating that seals out moisture and salt while reducing noise.',
      warranty: '3+ Years'
    },
    {
      id: 'custom-graphics',
      title: 'Custom Stickers & Graphics',
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
      features: [
        'Precision Cut-Vinyl',
        'Racing Stripes',
        'Custom Logos',
        'Professional Installation'
      ],
      description: 'Precision-cut vinyl graphics with bubble-free application and edge-sealing to prevent peeling.',
      warranty: '3-5 Years'
    }
  ]

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-8 py-4 bg-primary-500/20 backdrop-blur-md text-primary-400 rounded-full text-lg font-bold border border-primary-500/40 animate-pulse">
            🎨 Painting & Protection Services
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-8">
            Paint Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From professional repainting to advanced protection films, we ensure your vehicle looks stunning and stays protected
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredCard === service.id
            
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl transition-all duration-700 cursor-pointer"
                style={{
                  animation: `float ${6 + (index * 0.3)}s ease-in-out infinite`,
                  animationDelay: `${index * 150}ms`
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Container */}
                <div className={`
                  relative h-[550px] backdrop-blur-xl bg-gray-800/50 border border-primary-500/30 rounded-3xl 
                  transition-all duration-500 overflow-hidden
                  ${isHovered ? 'scale-105 border-primary-400/60 shadow-2xl' : 'hover:scale-102'}
                `}>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className={`
                      absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/85 to-gray-900/30
                      transition-opacity duration-500
                      ${isHovered ? 'opacity-90' : 'opacity-80'}
                    `} />
                  </div>

                  {/* Glowing Border Effect */}
                  {isHovered && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl opacity-50 animate-pulse" />
                  )}

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      {/* Icon and Warranty */}
                      <div className="flex items-center justify-between mb-6">
                        <div 
                          className={`
                            text-5xl transition-all duration-300
                            ${isHovered ? 'scale-125' : ''}
                          `}
                          style={{ filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))' }}
                        >
                          {service.icon}
                        </div>
                        <div className={`
                          px-4 py-2 bg-primary-500/80 backdrop-blur-sm text-white rounded-full text-sm font-bold
                          ${isHovered ? 'bg-primary-400 scale-110' : ''}
                        `}>
                          {service.warranty} Warranty
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`
                        text-2xl font-bold text-white mb-4 transition-all duration-300
                        ${isHovered ? 'text-primary-300 text-3xl' : ''}
                      `}>
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-400">
                            <div className={`
                              w-2 h-2 bg-primary-400 rounded-full mr-3 transition-all duration-300
                              ${isHovered ? 'w-3 h-3 bg-primary-300 animate-pulse' : ''}
                            `} />
                            <span className={`text-sm ${isHovered ? 'text-gray-200' : ''}`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div>
                      <button className={`
                        w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl 
                        font-bold text-lg transition-all duration-300 overflow-hidden relative group
                        ${isHovered ? 'from-primary-400 to-primary-500 scale-105 shadow-lg' : ''}
                      `}>
                        <span className="relative z-10 flex items-center justify-center">
                          Get Quote
                          <span className={`ml-2 transition-transform ${isHovered ? 'translate-x-2' : ''}`}>
                            💎
                          </span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
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

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-primary-500/10 to-primary-600/10 backdrop-blur-md rounded-3xl border border-primary-500/30">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              🎨 Transform Your Vehicle Today
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Professional painting and protection services with industry-leading warranties
            </p>
            <button className="group px-12 py-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl font-bold text-2xl transition-all duration-500 hover:scale-110 shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                📞 Schedule Consultation
                <span className="ml-4 text-3xl group-hover:animate-bounce">✨</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(1deg); }
          66% { transform: translateY(-6px) rotate(-1deg); }
        }
      `}</style>
    </section>
  )
}