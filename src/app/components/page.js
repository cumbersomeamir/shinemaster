'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import MouseOilAnimation from '../components/MouseOilAnimation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const services = [
    'Ceramic and Graphene Coatings',
    'Paint Protection Films',
    'Body-shop (Denting & Painting)',
    'Detailing and Interior Cleaning',
    'Wrap Jobs',
    'Insurance Claim',
    'Interior Modification',
    'Other Services'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('🔄 Sending your message...');

    // Simulate form submission (replace with real API call)
    setTimeout(() => {
      setSubmitStatus('🎉 Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
      
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Workshop',
      details: [
        'ShineMaster Auto Care Center',
        'Sector 18, Industrial Area',
        'Gurgaon, Haryana 122015',
        'Near Metro Station'
      ],
      color: 'from-[#00D4FF] to-[#33DDFF]'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: [
        '+91 98765 43210',
        '+91 98765 43211',
        'Mon-Sun: 9:00 AM - 8:00 PM',
        'Emergency: 24/7 Available'
      ],
      color: 'from-[#FF9900] to-[#FFB84D]'
    },
    {
      icon: '✉️',
      title: 'Email & Social',
      details: [
        'info@shinemaster.com',
        'booking@shinemaster.com',
        '@ShineMasterIndia',
        'Follow us for updates'
      ],
      color: 'from-[#00D4FF] to-[#FF9900]'
    }
  ];

  const faqs = [
    {
      question: 'How long does ceramic coating take?',
      answer: 'Ceramic coating typically takes 4-8 hours depending on your vehicle size and condition. We ensure proper preparation and curing time for best results.'
    },
    {
      question: 'Do you provide pickup and drop service?',
      answer: 'Yes! We offer complimentary pickup and drop service within 25km radius of our workshop for bookings above ₹15,000.'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'We provide 3-7 year warranty on ceramic coatings depending on the package. Paint protection films come with 5-10 year warranty.'
    },
    {
      question: 'Can I track my vehicle service status?',
      answer: 'Absolutely! We provide real-time updates via WhatsApp and SMS throughout your vehicle service process.'
    }
  ];

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
              <span className="text-[#8B8B8D]">Contact</span>
            </nav>
          </div>

          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00D4FF] via-[#FF9900] to-[#33DDFF] bg-clip-text text-transparent mb-6 font-orbitron">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-[#8B8B8D] max-w-4xl mx-auto font-exo">
              Ready to transform your vehicle? Let's discuss your automotive care needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-[#1A1A1B] to-[#0A0A0B]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/20 hover:border-[#FF9900]/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
              >
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                
                {/* Title */}
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${info.color} bg-clip-text text-transparent mb-4 font-orbitron`}>
                  {info.title}
                </h3>
                
                {/* Details */}
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-[#8B8B8D] font-exo">
                      {detail}
                    </p>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 to-[#FF9900]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="relative">
              <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/20 backdrop-blur-sm">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF9900] bg-clip-text text-transparent mb-8 font-orbitron">
                  Send Us a Message
                </h2>

                {/* Submit Status */}
                {submitStatus && (
                  <div className="mb-6 p-4 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-xl text-[#00D4FF] font-exo">
                    {submitStatus}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#00D4FF] font-semibold mb-2 font-exo">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0A0A0B]/50 border border-[#00D4FF]/30 rounded-xl text-white placeholder-[#8B8B8D] focus:border-[#FF9900] focus:outline-none transition-colors duration-300 font-exo"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#00D4FF] font-semibold mb-2 font-exo">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0A0A0B]/50 border border-[#00D4FF]/30 rounded-xl text-white placeholder-[#8B8B8D] focus:border-[#FF9900] focus:outline-none transition-colors duration-300 font-exo"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Vehicle */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#00D4FF] font-semibold mb-2 font-exo">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#0A0A0B]/50 border border-[#00D4FF]/30 rounded-xl text-white placeholder-[#8B8B8D] focus:border-[#FF9900] focus:outline-none transition-colors duration-300 font-exo"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-[#00D4FF] font-semibold mb-2 font-exo">Vehicle Details</label>
                      <input
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#0A0A0B]/50 border border-[#00D4FF]/30 rounded-xl text-white placeholder-[#8B8B8D] focus:border-[#FF9900] focus:outline-none transition-colors duration-300 font-exo"
                        placeholder="BMW X5 2023, Audi A4..."
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-[#00D4FF] font-semibold mb-2 font-exo">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0A0A0B]/50 border border-[#00D4FF]/30 rounded-xl text-white focus:border-[#FF9900] focus:outline-none transition-colors duration-300 font-exo"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-[#1A1A1B]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#00D4FF] font-semibold mb-2 font-exo">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#0A0A0B]/50 border border-[#00D4FF]/30 rounded-xl text-white placeholder-[#8B8B8D] focus:border-[#FF9900] focus:outline-none transition-colors duration-300 resize-none font-exo"
                      placeholder="Tell us about your requirements, preferred dates, or any specific concerns..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF9900]/50 font-exo disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? '🔄 Sending Message...' : '📩 Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Business Hours */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="relative h-80 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-2xl font-bold text-[#00D4FF] mb-2 font-orbitron">Find Us Here</h3>
                    <p className="text-[#8B8B8D] font-exo">Interactive map coming soon</p>
                    <button className="mt-4 px-6 py-2 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 font-exo">
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-8 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-[#FF9900] mb-6 font-orbitron">Business Hours</h3>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM', status: 'open' },
                    { day: 'Saturday', time: '9:00 AM - 7:00 PM', status: 'open' },
                    { day: 'Sunday', time: '10:00 AM - 6:00 PM', status: 'open' },
                    { day: 'Emergency Service', time: '24/7 Available', status: 'emergency' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-[#00D4FF]/10">
                      <span className="text-white font-exo">{schedule.day}</span>
                      <span className={`font-exo ${
                        schedule.status === 'emergency' ? 'text-[#FF9900]' : 'text-[#00D4FF]'
                      }`}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-[#1A1A1B] to-[#0A0A0B]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF9900] bg-clip-text text-transparent mb-4 font-orbitron">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#8B8B8D] font-exo">Quick answers to common questions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-[#2D2D30]/40 to-[#1A1A1B]/40 rounded-2xl border border-[#00D4FF]/20 hover:border-[#FF9900]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#00D4FF] mb-3 font-orbitron group-hover:text-[#FF9900] transition-colors">
                  {faq.question}
                </h3>
                <p className="text-[#8B8B8D] leading-relaxed font-exo">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF9900] bg-clip-text text-transparent mb-6 font-orbitron">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#8B8B8D] mb-8 font-exo">
              Book your consultation today and experience the ShineMaster difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF9900]/50 font-exo">
                📞 Call Now
              </button>
              <button className="px-8 py-4 border-2 border-[#00D4FF] text-[#00D4FF] font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#FF9900] hover:text-black transition-all duration-300 font-exo">
                💬 WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}