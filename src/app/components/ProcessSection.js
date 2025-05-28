'use client';

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Consultation & Assessment",
      description: "Free detailed inspection of your vehicle with personalized recommendations",
      icon: "🔍",
      duration: "30 mins",
      details: ["Vehicle condition analysis", "Service requirement assessment", "Custom package design", "Transparent pricing"]
    },
    {
      step: "02", 
      title: "Preparation & Setup",
      description: "Professional workspace preparation with premium tools and materials",
      icon: "⚙️",
      duration: "45 mins",
      details: ["Workspace sanitization", "Tool calibration", "Material quality check", "Safety protocol setup"]
    },
    {
      step: "03",
      title: "Expert Service Execution",
      description: "Skilled technicians perform the service using advanced techniques",
      icon: "🎯",
      duration: "2-8 hours",
      details: ["Precision workmanship", "Quality control checks", "Progress monitoring", "Real-time updates"]
    },
    {
      step: "04",
      title: "Quality Inspection",
      description: "Rigorous multi-point inspection to ensure perfect results",
      icon: "✅",
      duration: "30 mins",
      details: ["Final quality check", "Client walkthrough", "Service documentation", "Warranty activation"]
    },
    {
      step: "05",
      title: "Delivery & Follow-up",
      description: "Vehicle handover with maintenance tips and ongoing support",
      icon: "🚗",
      duration: "15 mins",
      details: ["Service completion report", "Maintenance guidelines", "Follow-up scheduling", "Customer satisfaction survey"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1A1A1B] to-[#0A0A0B] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-[#8B8B8D] max-w-3xl mx-auto mb-8">
            Every vehicle receives our signature 5-step treatment process designed for exceptional results
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#00D4FF]/20 to-[#33DDFF]/20 rounded-full border border-[#00D4FF]/30">
            <span className="text-[#00D4FF] font-semibold">Average Service Time: 3-10 hours</span>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D4FF]/50 via-[#33DDFF]/50 to-[#00D4FF]/50 transform -translate-x-1/2" />
          
          {steps.map((step, index) => (
            <div key={index} className={`relative mb-16 lg:mb-24 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
              {/* Step Content */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                <div className="group relative p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-2xl border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-500 backdrop-blur-sm">
                  
                  {/* Step Number & Icon */}
                  <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="text-6xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent opacity-50">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Title & Duration */}
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <h3 className="text-2xl font-bold text-[#00D4FF]">
                      {step.title}
                    </h3>
                    <span className="px-3 py-1 bg-[#00D4FF]/20 text-[#00D4FF] text-sm rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-[#8B8B8D] mb-6 text-lg">
                    {step.description}
                  </p>
                  
                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#00D4FF] rounded-full" />
                        <span className="text-sm text-[#8B8B8D]">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-[#33DDFF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] rounded-full border-4 border-[#0A0A0B]" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-2xl border border-[#00D4FF]/30">
            <h3 className="text-2xl font-bold text-[#00D4FF] mb-4">Ready to Transform Your Vehicle?</h3>
            <p className="text-[#8B8B8D] mb-6">Book your consultation today and experience the ShineMaster difference</p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] text-[#0A0A0B] font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00D4FF]/50">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;