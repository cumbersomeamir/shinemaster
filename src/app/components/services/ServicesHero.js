'use client'

import { useState, useEffect } from 'react'

export default function ServicesHero() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setLoaded(true)
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section className="pt-32 pb-20 px-6 text-center relative min-h-screen flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Moving gradient orbs */}
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-primary-500/25 to-primary-400/25 rounded-full blur-3xl"
          style={{
            left: `${30 + (mousePos.x * 0.015)}px`,
            top: `${15 + (mousePos.y * 0.01)}px`,
            animation: 'float 10s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute w-60 h-60 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-full blur-2xl"
          style={{
            right: `${20 + (mousePos.x * -0.02)}px`,
            bottom: `${25 + (mousePos.y * 0.015)}px`,
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
        
        {/* Service icons floating */}
        {['🚗', '🎨', '🏍️', '✨', '🔧', '🛡️'].map((icon, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-30"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title */}
        <div 
          className={`mb-12 transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <div className="relative inline-block p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-primary-500/30 mb-8">
            <h1 
              className="text-6xl md:text-8xl font-black text-gradient leading-tight"
              style={{
                textShadow: '0 0 50px rgba(0, 212, 255, 0.5)',
                animation: 'glow 4s ease-in-out infinite alternate'
              }}
            >
              PREMIUM
              <br />
              <span className="text-5xl md:text-7xl">SERVICES</span>
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl animate-pulse" />
          </div>
        </div>

        {/* Subtitle */}
        <div 
          className={`mb-8 transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <p className="text-2xl md:text-4xl font-light text-gray-300 mb-6">
            Auto Detailing & Customization Studio
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
            At Shinmaster, we combine industry-leading techniques with the highest quality products 
            to deliver unrivaled care for your vehicle. Whether you drive a sedan, SUV, motorcycle, 
            or sports car, our expert technicians tailor every service to your make and model.
          </p>
        </div>

        {/* Service Categories */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-500 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: '🚗', title: 'Car Services', count: '8+ Services' },
              { icon: '🎨', title: 'Paint & Protection', count: '6+ Options' },
              { icon: '🏍️', title: 'Bike Services', count: '5+ Specialties' }
            ].map((category, idx) => (
              <div key={idx} className="text-center group">
                <div 
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    animation: `float ${4 + idx}s ease-in-out infinite`,
                    filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))'
                  }}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-2">{category.title}</h3>
                <p className="text-gray-400">{category.count}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          className={`transition-all duration-1000 delay-700 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <button 
            className="group relative px-12 py-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl font-bold text-2xl transition-all duration-300 hover:scale-110 overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)' }}
          >
            <span className="relative z-10 flex items-center justify-center">
              📞 Book Your Service
              <span className="ml-4 text-3xl transition-transform group-hover:translate-x-2">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.4); }
          100% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.8), 0 0 60px rgba(51, 221, 255, 0.6); }
        }
      `}</style>
    </section>
  )
}