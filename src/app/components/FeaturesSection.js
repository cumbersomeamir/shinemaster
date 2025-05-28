'use client';

const FeaturesSection = () => {
  const features = [
    {
      title: "Advanced Technology",
      description: "Cutting-edge automotive solutions powered by AI and precision engineering for superior results",
      icon: "⚡",
      stats: "99.9% Precision"
    },
    {
      title: "Premium Quality",
      description: "Unmatched attention to detail with industry-leading standards and certified professionals",
      icon: "💎",
      stats: "5-Star Rating"
    },
    {
      title: "Future Ready",
      description: "Next-generation services designed for tomorrow's vehicles with sustainable practices",
      icon: "🚀",
      stats: "100% Eco-Friendly"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0A0A0B] via-[#1A1A1B] to-[#0A0A0B]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#33DDFF]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-6">
            Why Choose ShineMaster?
          </h2>
          <p className="text-xl text-[#8B8B8D] max-w-3xl mx-auto">
            Discover what makes us the leader in automotive excellence and innovation across the industry
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 lg:p-10 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-[#33DDFF]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Feature Icon */}
                <div className="relative z-10 text-6xl lg:text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Stats Badge */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#00D4FF]/20 to-[#33DDFF]/20 rounded-full border border-[#00D4FF]/30 mb-4">
                  <span className="text-sm font-semibold text-[#00D4FF]">
                    {feature.stats}
                  </span>
                </div>
                
                {/* Feature Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-[#00D4FF] mb-4 relative z-10">
                  {feature.title}
                </h3>
                
                {/* Feature Description */}
                <p className="text-[#8B8B8D] leading-relaxed text-base lg:text-lg relative z-10">
                  {feature.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-[#00D4FF]/20 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-[#00D4FF]/10 to-[#33DDFF]/10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Connecting Lines (visible on larger screens) */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-0.5 bg-gradient-to-r from-[#00D4FF]/50 to-transparent transform -translate-y-1/2 z-0" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#2D2D30]/30 to-[#1A1A1B]/30 rounded-full border border-[#00D4FF]/20 backdrop-blur-sm">
            <span className="text-[#8B8B8D]">Trusted by</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent">
              1000+
            </span>
            <span className="text-[#8B8B8D]">satisfied customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;