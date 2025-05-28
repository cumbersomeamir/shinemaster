import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesGrid from './components/ServicesGrid';
import StatsSection from './components/StatsSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FloatingParticles from './components/FloatingParticles';
import MouseOilAnimation from './components/MouseOilAnimation';

export default function HomePage() {
  return (
    <div className="bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Global Effects */}
      <FloatingParticles />
      <MouseOilAnimation />
      
      {/* Hero Section with Animated Sedan */}
      <HeroSection />
      
      {/* Company Stats */}
      <StatsSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Services Grid */}
      <ServicesGrid />
      
      {/* Our Process Section */}
      <ProcessSection />
      
      {/* Customer Testimonials */}
      <TestimonialsSection />
      
      {/* Technology & Facts Section */}
      <section className="py-24 bg-gradient-to-b from-[#1A1A1B] to-[#0A0A0B] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-6">
              Advanced Technology
            </h2>
            <p className="text-xl text-[#8B8B8D] max-w-3xl mx-auto">
              We use cutting-edge equipment and premium materials from industry leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-2xl border border-[#00D4FF]/20">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-[#00D4FF] mb-3">Nano-Technology</h3>
              <p className="text-[#8B8B8D] mb-4">Advanced nano-coatings that bond at molecular level for superior protection</p>
              <div className="text-sm text-[#00D4FF]">• 9H Hardness Rating • Self-Healing Properties</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-2xl border border-[#00D4FF]/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#00D4FF] mb-3">Precision Tools</h3>
              <p className="text-[#8B8B8D] mb-4">German-engineered polishing machines with micro-adjustment capabilities</p>
              <div className="text-sm text-[#00D4FF]">• ±0.1mm Accuracy • Temperature Control</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-2xl border border-[#00D4FF]/20">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-[#00D4FF] mb-3">Climate Control</h3>
              <p className="text-[#8B8B8D] mb-4">Controlled environment facilities for optimal coating application</p>
              <div className="text-sm text-[#00D4FF]">• 22°C ±1°C • 45% Humidity • HEPA Filtered</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-2xl border border-[#00D4FF]/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-[#00D4FF] mb-3">Paint Thickness Gauge</h3>
              <p className="text-[#8B8B8D] mb-4">Digital measurement tools for precise coating application</p>
              <div className="text-sm text-[#00D4FF]">• 0.1 Micron Precision • Non-Destructive Testing</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-2xl border border-[#00D4FF]/20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#00D4FF] mb-3">LED Inspection</h3>
              <p className="text-[#8B8B8D] mb-4">Professional-grade lighting for defect detection and quality control</p>
              <div className="text-sm text-[#00D4FF]">• 6000K Color Temperature • 95+ CRI Rating</div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-2xl border border-[#00D4FF]/20">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-[#00D4FF] mb-3">Premium Materials</h3>
              <p className="text-[#8B8B8D] mb-4">Imported coatings and materials from leading global manufacturers</p>
              <div className="text-sm text-[#00D4FF]">• SiO2 & Graphene Based • 5-10 Year Warranty</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Facts Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-6">
              Industry Facts
            </h2>
            <p className="text-xl text-[#8B8B8D] max-w-3xl mx-auto">
              Understanding the importance of professional automotive care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] rounded-full flex items-center justify-center text-xl font-bold text-black">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00D4FF] mb-2">Paint Damage Prevention</h3>
                  <p className="text-[#8B8B8D]">UV rays cause 80% of paint fading. Professional coatings provide 99% UV protection, preserving your vehicle's value.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] rounded-full flex items-center justify-center text-xl font-bold text-black">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00D4FF] mb-2">Resale Value Protection</h3>
                  <p className="text-[#8B8B8D]">Properly maintained vehicles retain 15-20% higher resale value. Our services are an investment in your asset.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] rounded-full flex items-center justify-center text-xl font-bold text-black">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00D4FF] mb-2">Maintenance Cost Reduction</h3>
                  <p className="text-[#8B8B8D]">Regular professional care reduces maintenance costs by up to 40% over the vehicle's lifetime.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] rounded-full flex items-center justify-center text-xl font-bold text-black">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#00D4FF] mb-2">Environmental Impact</h3>
                  <p className="text-[#8B8B8D]">Our eco-friendly products reduce environmental impact by 60% compared to traditional methods.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/30">
                <h3 className="text-3xl font-bold text-[#00D4FF] mb-6">Did You Know?</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">🚗</div>
                    <div>
                      <div className="text-2xl font-bold text-[#33DDFF]">₹2,50,000</div>
                      <div className="text-sm text-[#8B8B8D]">Average cost of a paint job</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">⏱️</div>
                    <div>
                      <div className="text-2xl font-bold text-[#33DDFF]">15 Days</div>
                      <div className="text-sm text-[#8B8B8D]">Typical body shop repair time</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">🛡️</div>
                    <div>
                      <div className="text-2xl font-bold text-[#33DDFF]">5-10 Years</div>
                      <div className="text-sm text-[#8B8B8D]">Our coating protection duration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">💰</div>
                    <div>
                      <div className="text-2xl font-bold text-[#33DDFF]">90%</div>
                      <div className="text-sm text-[#8B8B8D]">Cost saving vs. repainting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative py-20 bg-gradient-to-t from-[#0A0A0B] to-[#1A1A1B] border-t border-[#00D4FF]/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-4">
                ShineMaster
              </h3>
              <p className="text-[#8B8B8D] mb-6 max-w-md">
                India's premier automotive care destination, setting new standards in vehicle protection and enhancement since 2008.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:scale-110 transition-transform">
                  f
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:scale-110 transition-transform">
                  i
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] rounded-full flex items-center justify-center text-black font-bold cursor-pointer hover:scale-110 transition-transform">
                  t
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-[#00D4FF] font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <div className="text-[#8B8B8D] hover:text-[#00D4FF] cursor-pointer transition-colors">Services</div>
                <div className="text-[#8B8B8D] hover:text-[#00D4FF] cursor-pointer transition-colors">Booking</div>
                <div className="text-[#8B8B8D] hover:text-[#00D4FF] cursor-pointer transition-colors">Gallery</div>
                <div className="text-[#8B8B8D] hover:text-[#00D4FF] cursor-pointer transition-colors">Contact</div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-[#00D4FF] font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-[#8B8B8D]">
                <div>📍 Premium Auto Care Center</div>
                <div>📞 +91 98765 43210</div>
                <div>✉️ info@shinemaster.com</div>
                <div>🕐 Mon-Sun: 9AM-8PM</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#00D4FF]/20 pt-8 text-center">
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] mx-auto mb-4" />
            <p className="text-[#8B8B8D] text-sm">© 2025 ShineMaster. All rights reserved. | Crafted with precision and passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}