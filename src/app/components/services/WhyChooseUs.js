'use client'

import { useState, useEffect } from 'react'

export default function WhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 'certified-technicians',
      title: 'Certified Technicians',
      icon: '🏆',
      description: 'Trained specialists with years of experience in detailing, paint, and customization.',
      stats: '10+ Years Experience',
      color: 'from-primary-400 to-primary-600'
    },
    {
      id: 'state-of-art-facility',
      title: 'State-of-the-Art Facility',
      icon: '🏭',
      description: 'Climate-controlled bays, advanced paint booths, and precision alignment racks.',
      stats: '5000+ Sq Ft Facility',
      color: 'from-primary-500 to-primary-700'
    },
    {
      id: 'premium-products',
      title: 'Premium Products',
      icon: '💎',
      description: 'We use only industry-top polishes, coatings, and films with proven performance.',
      stats: 'Top-Tier Brands Only',
      color: 'from-primary-300 to-primary-500'
    },
    {
      id: 'transparent-pricing',
      title: 'Transparent Pricing',
      icon: '💰',
      description: 'Detailed estimates with no hidden fees; service packages to match every budget.',
      stats: 'No Hidden Costs',
      color: 'from-primary-600 to-primary-800'
    },
    {
      id: 'satisfaction-guarantee',
      title: 'Customer Satisfaction Guarantee',
      icon: '✅',
      description: 'We stand behind our work—if you\'re not thrilled, we\'ll make it right.',
      stats: '100% Satisfaction',
      color: 'from-primary-400 to-primary-700'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-8 py-4 bg-primary-500/20 backdrop-blur-md text-primary-400 rounded-full text-lg font-bold border border-primary-500/40">
            ⭐ Why Choose Shinmaster
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-8">
            Excellence Guaranteed
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover what sets us apart from the competition and why customers trust us with their prized vehicles
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const isActive = activeFeature === index
              
              return (
                <div
                  key={feature.id}
                  className={`
                    p-8 rounded-3xl cursor-pointer transition-all duration-700 border backdrop-blur-md
                    ${isActive 
                      ? 'bg-primary-500/20 border-primary-400/60 scale-105 shadow-2xl' 
                      : 'bg-gray-800/40 border-primary-500/20 hover:bg-gray-800/60 hover:border-primary-400/30'
                    }
                  `}
                  onClick={() => setActiveFeature(index)}
                  style={{
                    animation: `float ${5 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <div 
                      className={`
                        text-5xl transition-all duration-500 flex-shrink-0
                        ${isActive ? 'scale-125' : ''}
                      `}
                      style={{ 
                        filter: isActive 
                          ? 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.8))' 
                          : 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.3))'
                      }}
                    >
                      {feature.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`
                          text-2xl font-bold transition-colors duration-300
                          ${isActive ? 'text-primary-300' : 'text-white'}
                        `}>
                          {feature.title}
                        </h3>
                        <div className={`
                          px-3 py-1 rounded-full text-sm font-bold transition-all duration-300
                          ${isActive 
                            ? 'bg-primary-500 text-white scale-110' 
                            : 'bg-primary-500/30 text-primary-400'
                          }
                        `}>
                          {feature.stats}
                        </div>
                      </div>
                      
                      <p className={`
                        leading-relaxed transition-colors duration-300
                        ${isActive ? 'text-gray-200' : 'text-gray-400'}
                      `}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="mt-4 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-pulse" />
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Side - Visual Display */}
          <div className="relative">
            <div className="sticky top-32">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 p-12 flex flex-col items-center justify-center text-center">
                  {/* Large Icon */}
                  <div 
                    className="text-9xl mb-8 transition-all duration-700"
                    style={{ 
                      filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.8))',
                      animation: 'glow 3s ease-in-out infinite alternate'
                    }}
                  >
                    {features[activeFeature].icon}
                  </div>

                  {/* Active Feature Details */}
                  <h3 className="text-4xl font-black text-gradient mb-6">
                    {features[activeFeature].title}
                  </h3>
                  
                  <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-md">
                    {features[activeFeature].description}
                  </p>

                  <div className="text-3xl font-bold text-primary-400 mb-8">
                    {features[activeFeature].stats}
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex space-x-3">
                    {features.map((_, idx) => (
                      <div
                        key={idx}
                        className={`
                          w-3 h-3 rounded-full transition-all duration-300
                          ${activeFeature === idx ? 'bg-primary-400 scale-125' : 'bg-gray-600'}
                        `}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl opacity-50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-r from-primary-500/10 to-primary-600/10 backdrop-blur-md rounded-3xl border border-primary-500/30">
            <h3 className="text-4xl font-bold text-gradient mb-6">
              🚀 Ready to Experience Excellence?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of satisfied customers who trust Shinmaster for their automotive needs. 
              Your vehicle deserves the best—experience our premium touch today.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="group px-10 py-5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl font-bold text-xl transition-all duration-500 hover:scale-110 shadow-2xl relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  📞 Call Now: (+91) 98765-43210
                  <span className="ml-4 text-2xl group-hover:animate-bounce">📱</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group px-10 py-5 backdrop-blur-md bg-white/10 border-2 border-primary-500/40 rounded-3xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:bg-primary-500/20">
                <span className="text-gradient flex items-center justify-center">
                  🌐 Visit Website
                  <span className="ml-3 group-hover:rotate-12 transition-transform">🔗</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        @keyframes glow {
          0% { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.6)); }
          100% { filter: drop-shadow(0 0 40px rgba(0, 212, 255, 1)) drop-shadow(0 0 60px rgba(51, 221, 255, 0.8)); }
        }
      `}</style>
    </section>
  )
}