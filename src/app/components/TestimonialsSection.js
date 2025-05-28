'use client';

import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      vehicle: "BMW X5 2023",
      service: "Ceramic Coating",
      rating: 5,
      text: "Absolutely phenomenal service! My BMW looks better than the day I bought it. The ceramic coating has been protecting it for 8 months now, and it still beads water like magic.",
      image: "👨‍💼",
      location: "Mumbai"
    },
    {
      name: "Priya Sharma",
      vehicle: "Audi A4 2022",
      service: "Paint Protection Film",
      rating: 5,
      text: "The paint protection film is invisible yet incredibly effective. After 6 months of city driving, my car still looks pristine. Worth every rupee!",
      image: "👩‍💼",
      location: "Delhi"
    },
    {
      name: "Arjun Singh",
      vehicle: "Mercedes C-Class",
      service: "Full Detailing",
      rating: 5,
      text: "The attention to detail is unmatched. They transformed my 3-year-old car to showroom condition. The interior cleaning was especially impressive.",
      image: "👨‍🚗",
      location: "Bangalore"
    },
    {
      name: "Sneha Patel",
      vehicle: "Jaguar F-Pace",
      service: "Graphene Coating",
      rating: 5,
      text: "The graphene coating has exceeded my expectations. The hydrophobic properties are incredible, and the gloss is simply stunning. Highly recommended!",
      image: "👩‍🔬",
      location: "Pune"
    },
    {
      name: "Vikram Mehta",
      vehicle: "Porsche 911",
      service: "Premium Wrap",
      rating: 5,
      text: "The wrap quality and installation are world-class. My Porsche now has a unique matte finish that turns heads everywhere. Exceptional craftsmanship!",
      image: "👨‍🎨",
      location: "Chennai"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0B] to-[#1A1A1B] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#00D4FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#33DDFF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#8B8B8D] max-w-3xl mx-auto">
            Real experiences from satisfied customers across India
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-8 lg:p-12 bg-gradient-to-br from-[#2D2D30]/50 to-[#1A1A1B]/50 rounded-3xl border border-[#00D4FF]/30 backdrop-blur-sm">
            {/* Quote Icon */}
            <div className="text-6xl text-[#00D4FF]/30 mb-6">"</div>
            
            {/* Testimonial Text */}
            <p className="text-xl lg:text-2xl text-white mb-8 leading-relaxed">
              {testimonials[currentTestimonial].text}
            </p>
            
            {/* Customer Info */}
            <div className="flex items-center gap-6">
              <div className="text-5xl">
                {testimonials[currentTestimonial].image}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#00D4FF] mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-[#8B8B8D] mb-1">
                  {testimonials[currentTestimonial].vehicle} • {testimonials[currentTestimonial].service}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-[#00D4FF]">★</span>
                    ))}
                  </div>
                  <span className="text-sm text-[#8B8B8D]">
                    • {testimonials[currentTestimonial].location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-[#00D4FF] scale-125' 
                  : 'bg-[#8B8B8D] hover:bg-[#00D4FF]/50'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-[#2D2D30]/30 to-[#1A1A1B]/30 rounded-2xl border border-[#00D4FF]/20">
            <div className="text-3xl font-bold text-[#00D4FF] mb-2">4.9/5</div>
            <div className="text-[#8B8B8D]">Average Rating</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#2D2D30]/30 to-[#1A1A1B]/30 rounded-2xl border border-[#00D4FF]/20">
            <div className="text-3xl font-bold text-[#00D4FF] mb-2">1200+</div>
            <div className="text-[#8B8B8D]">Reviews</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#2D2D30]/30 to-[#1A1A1B]/30 rounded-2xl border border-[#00D4FF]/20">
            <div className="text-3xl font-bold text-[#00D4FF] mb-2">98%</div>
            <div className="text-[#8B8B8D]">Would Recommend</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#2D2D30]/30 to-[#1A1A1B]/30 rounded-2xl border border-[#00D4FF]/20">
            <div className="text-3xl font-bold text-[#00D4FF] mb-2">85%</div>
            <div className="text-[#8B8B8D]">Repeat Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;