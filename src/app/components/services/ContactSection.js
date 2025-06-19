'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [hoveredContact, setHoveredContact] = useState(null)

  const contactMethods = [
    {
      id: 'phone',
      title: 'Call Us Now',
      icon: '📞',
      value: '(+91) 98765-43210',
      description: 'Speak directly with our experts',
      action: 'Call Now',
      href: 'tel:+919876543210',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'website',
      title: 'Visit Our Website',
      icon: '🌐',
      value: 'www.shinmasterstudio.com',
      description: 'Explore our full portfolio online',
      action: 'Visit Site',
      href: 'https://www.shinmasterstudio.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'email',
      title: 'Email Support',
      icon: '✉️',
      value: 'info@shinmaster.com',
      description: 'Get detailed quotes and information',
      action: 'Send Email',
      href: 'mailto:info@shinmaster.com',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
  ]

  return (
    <section className="py-24 px-6 relative bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 px-8 py-4 bg-primary-500/20 backdrop-blur-md text-primary-400 rounded-full text-lg font-bold border border-primary-500/40">
            📞 Get In Touch
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gradient mb-8">
            Contact Shinmaster
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Ready to elevate your ride? Contact us today to book your appointment and experience premium automotive care.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((contact, index) => {
            const isHovered = hoveredContact === contact.id
            
            return (
              <div
                key={contact.id}
                className="group relative"
                style={{
                  animation: `float ${4 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 200}ms`
                }}
                onMouseEnter={() => setHoveredContact(contact.id)}
                onMouseLeave={() => setHoveredContact(null)}
              >
                <div className={`
                  relative h-[350px] p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 cursor-pointer overflow-hidden
                  ${isHovered 
                    ? 'bg-gray-800/60 border-primary-400/60 scale-105 shadow-2xl' 
                    : 'bg-gray-800/40 border-primary-500/30 hover:bg-gray-800/50'
                  }
                `}>
                  
                  {/* Background Gradient */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 transition-opacity duration-500
                    ${isHovered ? 'opacity-10' : ''}
                  `} />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between text-center">
                    {/* Top Section */}
                    <div>
                      <div 
                        className={`
                          text-6xl mb-6 transition-all duration-500
                          ${isHovered ? 'scale-125' : ''}
                        `}
                        style={{ 
                          filter: isHovered 
                            ? 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.8))' 
                            : 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.4))'
                        }}
                      >
                        {contact.icon}
                      </div>

                      <h3 className={`
                        text-2xl font-bold mb-3 transition-colors duration-300
                        ${isHovered ? 'text-primary-300' : 'text-white'}
                      `}>
                        {contact.title}
                      </h3>

                      <p className="text-gray-400 mb-6">{contact.description}</p>

                      <div className={`
                        text-xl font-bold mb-6 transition-colors duration-300
                        ${isHovered ? 'text-primary-400' : 'text-gray-300'}
                      `}>
                        {contact.value}
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div>
                      <a 
                        href={contact.href}
                        className={`
                          inline-block w-full px-6 py-4 bg-gradient-to-r ${contact.color} rounded-2xl 
                          font-bold text-lg text-white transition-all duration-300 hover:scale-105 shadow-lg
                        `}
                      >
                        {contact.action}
                      </a>
                    </div>
                  </div>

                  {/* Floating Particles */}
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-70"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Glowing Border */}
                  {isHovered && (
                    <div className={`absolute -inset-1 bg-gradient-to-r ${contact.color} rounded-3xl opacity-30 animate-pulse`} />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Business Hours & Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Business Hours */}
          <div className="p-8 bg-gray-800/40 backdrop-blur-md rounded-3xl border border-primary-500/30">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4" style={{ filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))' }}>
                🕒
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">Business Hours</h3>
              <p className="text-gray-400">We're here when you need us</p>
            </div>

            <div className="space-y-4">
              {businessHours.map((schedule, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-gray-700/30 rounded-2xl">
                  <span className="text-white font-semibold">{schedule.day}</span>
                  <span className="text-primary-400 font-bold">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts */}
          <div className="p-8 bg-gray-800/40 backdrop-blur-md rounded-3xl border border-primary-500/30">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4" style={{ filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))' }}>
                ⚡
              </div>
              <h3 className="text-3xl font-bold text-gradient mb-2">Quick Facts</h3>
              <p className="text-gray-400">What makes us special</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: '🏆', title: 'Award Winning', desc: 'Recognized for excellence in automotive care' },
                { icon: '🛡️', title: 'Warranty Protected', desc: 'All services backed by comprehensive warranty' },
                { icon: '🚀', title: 'Quick Service', desc: 'Most services completed same day' },
                { icon: '💎', title: 'Premium Materials', desc: 'Only the finest products and materials used' }
              ].map((fact, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-2xl">
                  <div className="text-3xl">{fact.icon}</div>
                  <div>
                    <h4 className="text-white font-bold">{fact.title}</h4>
                    <p className="text-gray-400 text-sm">{fact.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="max-w-3xl mx-auto p-12 bg-gradient-to-r from-primary-500/20 to-primary-600/20 backdrop-blur-md rounded-3xl border border-primary-500/40">
            <h3 className="text-4xl font-bold text-gradient mb-6">
              🌟 Your Vehicle Deserves the Best
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Experience Shinmaster's premium touch and see why we're the trusted choice for automotive excellence.
            </p>
            <button className="group px-12 py-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl font-bold text-2xl transition-all duration-500 hover:scale-110 shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                🚗 Book Your Appointment Today
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
          33% { transform: translateY(-8px) rotate(0.5deg); }
          66% { transform: translateY(-4px) rotate(-0.5deg); }
        }
      `}</style>
    </section>
  )
}