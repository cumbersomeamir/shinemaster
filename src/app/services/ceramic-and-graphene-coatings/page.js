'use client';

import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import MouseOilAnimation from '../../components/MouseOilAnimation';
import ServiceMediaManager from '../../components/ServiceMediaManager';

export default function CeramicCoatingsPage() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check admin status
    setIsAdminLoggedIn(localStorage.getItem('isAdminLoggedIn') === 'true');
  }, []);

  const serviceDetails = {
    title: "Ceramic and Graphene Coatings",
    subtitle: "Advanced nano-technology protection for your vehicle",
    description: "Advanced coatings derived with nano-technology that help prevent environmental damages on your car's precious paint. These coatings form a 9H or 10H hard crystallised layer on top of your vehicle's clear coat and provide resistance against light scratches, chemical/acids and also protects the paint against harmful UV rays.",
    features: [
      "9H-10H hardness rating for superior protection",
      "Hydrophobic properties repel water and contaminants", 
      "UV protection prevents paint fading and oxidation",
      "Self-healing properties for minor scratches",
      "Chemical resistance against acids and alkalis",
      "Enhanced gloss and depth of paint finish"
    ],
    pricing: {
      basic: "₹15,000 - ₹25,000",
      premium: "₹35,000 - ₹50,000", 
      elite: "₹60,000 - ₹80,000"
    },
    warranty: "3, 5, and 7 year warranty plans available",
    duration: "4-8 hours depending on vehicle size and condition"
  };

  return (
    <div className="bg-[#0A0A0B] text-white min-h-screen">
      <MouseOilAnimation />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF9900]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center space-x-2 text-sm font-exo">
              <a href="/" className="text-[#FF9900] hover:text-[#FFB84D] transition-colors">Home</a>
              <span className="text-[#8B8B8D]">•</span>
              <a href="/services" className="text-[#FF9900] hover:text-[#FFB84D] transition-colors">Services</a>
              <span className="text-[#8B8B8D]">•</span>
              <span className="text-[#8B8B8D]">Ceramic and Graphene Coatings</span>
            </nav>
          </div>

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00D4FF] via-[#FF9900] to-[#33DDFF] bg-clip-text text-transparent mb-6 font-orbitron">
              {serviceDetails.title}
            </h1>
            <p className="text-xl md:text-2xl text-[#8B8B8D] max-w-4xl mx-auto font-exo">
              {serviceDetails.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Service Media Manager - Reusable Component */}
      <ServiceMediaManager 
        serviceName="Ceramic and Graphene Coatings"
        isAdminLoggedIn={isAdminLoggedIn}
        maxFiles={25}
      />

      {/* Service Description */}
      <section className="py-16 bg-gradient-to-b from-[#1A1A1B] to-[#0A0A0B]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/20 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-[#00D4FF] mb-6 font-orbitron">About This Service</h2>
              <p className="text-lg text-[#8B8B8D] leading-relaxed mb-6 font-exo">
                {serviceDetails.description}
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-[#00D4FF]/10 rounded-2xl border border-[#00D4FF]/20">
                  <h3 className="text-xl font-bold text-[#00D4FF] mb-4 font-orbitron">Duration</h3>
                  <p className="text-[#8B8B8D] font-exo">{serviceDetails.duration}</p>
                </div>
                <div className="p-6 bg-[#FF9900]/10 rounded-2xl border border-[#FF9900]/20">
                  <h3 className="text-xl font-bold text-[#FF9900] mb-4 font-orbitron">Warranty</h3>
                  <p className="text-[#8B8B8D] font-exo">{serviceDetails.warranty}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF9900] bg-clip-text text-transparent mb-4 font-orbitron">
              Key Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-[#2D2D30]/40 to-[#1A1A1B]/40 rounded-2xl border border-[#00D4FF]/20 hover:border-[#FF9900]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-sm font-bold">✓</span>
                  </div>
                  <p className="text-[#8B8B8D] font-exo">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-b from-[#1A1A1B] to-[#0A0A0B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF9900] bg-clip-text text-transparent mb-4 font-orbitron">
              Service Packages
            </h2>
            <p className="text-xl text-[#8B8B8D] font-exo">Choose the perfect protection for your vehicle</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/30">
              <h3 className="text-2xl font-bold text-[#00D4FF] mb-4 font-orbitron">Basic Package</h3>
              <div className="text-3xl font-bold text-[#FF9900] mb-4 font-orbitron">{serviceDetails.pricing.basic}</div>
              <p className="text-[#8B8B8D] mb-6 font-exo">Essential protection for daily drivers</p>
              <ul className="space-y-2 text-sm text-[#8B8B8D] font-exo">
                <li>• Single layer ceramic coating</li>
                <li>• 3-year warranty</li>
                <li>• Basic paint correction</li>
                <li>• Hydrophobic protection</li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-[#FF9900]/20 to-[#1A1A1B]/50 rounded-3xl border border-[#FF9900]/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-[#FF9900] to-[#FFB84D] text-black text-sm font-bold rounded-full font-exo">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-[#FF9900] mb-4 font-orbitron">Premium Package</h3>
              <div className="text-3xl font-bold text-[#00D4FF] mb-4 font-orbitron">{serviceDetails.pricing.premium}</div>
              <p className="text-[#8B8B8D] mb-6 font-exo">Enhanced protection with graphene technology</p>
              <ul className="space-y-2 text-sm text-[#8B8B8D] font-exo">
                <li>• Multi-layer ceramic + graphene coating</li>
                <li>• 5-year warranty</li>
                <li>• Professional paint correction</li>
                <li>• Self-healing properties</li>
                <li>• Enhanced UV protection</li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/30">
              <h3 className="text-2xl font-bold text-[#00D4FF] mb-4 font-orbitron">Elite Package</h3>
              <div className="text-3xl font-bold text-[#FF9900] mb-4 font-orbitron">{serviceDetails.pricing.elite}</div>
              <p className="text-[#8B8B8D] mb-6 font-exo">Ultimate protection for luxury vehicles</p>
              <ul className="space-y-2 text-sm text-[#8B8B8D] font-exo">
                <li>• Premium graphene coating system</li>
                <li>• 7-year warranty</li>
                <li>• Complete paint restoration</li>
                <li>• Advanced self-healing technology</li>
                <li>• Premium maintenance kit included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF9900] bg-clip-text text-transparent mb-6 font-orbitron">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl text-[#8B8B8D] mb-8 font-exo">
              Get a personalized quote for your vehicle's ceramic coating protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF9900]/50 font-exo">
                Get Free Quote
              </button>
              <button className="px-8 py-4 border-2 border-[#00D4FF] text-[#00D4FF] font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#FF9900] hover:text-black transition-all duration-300 font-exo">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}