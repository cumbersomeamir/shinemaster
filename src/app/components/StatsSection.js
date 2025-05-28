'use client';

const StatsSection = () => {
  const stats = [
    {
      number: "15+",
      label: "Years of Excellence",
      description: "Serving automotive enthusiasts since 2008",
      icon: "🏆"
    },
    {
      number: "5,000+",
      label: "Cars Transformed",
      description: "From luxury sedans to sports cars",
      icon: "🚗"
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
      description: "Based on verified customer reviews",
      icon: "⭐"
    },
    {
      number: "24/7",
      label: "Emergency Support",
      description: "Round-the-clock assistance available",
      icon: "🛠️"
    },
    {
      number: "50+",
      label: "Expert Technicians",
      description: "Certified professionals at your service",
      icon: "👨‍🔧"
    },
    {
      number: "₹2Cr+",
      label: "Cars Protected",
      description: "Total value of vehicles we've enhanced",
      icon: "💎"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#33DDFF]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-6">
            Numbers That Speak
          </h2>
          <p className="text-xl text-[#8B8B8D] max-w-3xl mx-auto">
            Our commitment to excellence is reflected in every statistic
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-[#2D2D30]/40 to-[#1A1A1B]/40 rounded-2xl border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              
              {/* Label */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-[#8B8B8D] text-sm">
                {stat.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-[#33DDFF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;