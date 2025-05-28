'use client';

import { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check admin status
    const checkAdminStatus = () => {
      setIsAdminLoggedIn(localStorage.getItem('isAdminLoggedIn') === 'true');
    };
    
    window.addEventListener('scroll', handleScroll);
    checkAdminStatus();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdminLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdminLoggedIn(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0A0A0B]/95 backdrop-blur-md border-b border-[#00D4FF]/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg font-orbitron">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#33DDFF] bg-clip-text text-transparent font-orbitron">
              ShineMaster
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="relative text-white hover:text-[#00D4FF] transition-colors duration-300 font-exo group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/services" 
              className="relative text-white hover:text-[#00D4FF] transition-colors duration-300 font-exo group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/contact" 
              className="relative text-white hover:text-[#00D4FF] transition-colors duration-300 font-exo group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] group-hover:w-full transition-all duration-300"></span>
            </a>
            
            {/* Admin Login/Logout */}
            {isAdminLoggedIn ? (
              <button 
                onClick={handleAdminLogout}
                className="relative text-[#FF9900] hover:text-[#FFB84D] transition-colors duration-300 font-exo group"
              >
                Admin Logout
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF9900] to-[#00D4FF] group-hover:w-full transition-all duration-300"></span>
              </button>
            ) : (
              <button 
                onClick={() => setShowAdminLogin(true)}
                className="relative text-white hover:text-[#FF9900] transition-colors duration-300 font-exo group"
              >
                Admin
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF9900] to-[#00D4FF] group-hover:w-full transition-all duration-300"></span>
              </button>
            )}
            
            {/* CTA Button */}
            <button className="px-6 py-2 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00D4FF]/50 font-exo">
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-[#00D4FF] transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-[#FF9900] transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-[#00D4FF] transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-6 space-y-4 bg-[#0A0A0B]/95 backdrop-blur-md rounded-b-2xl border-b border-[#00D4FF]/20">
            <a 
              href="/" 
              className="block px-4 py-2 text-white hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 rounded-lg transition-all duration-300 font-exo"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/services" 
              className="block px-4 py-2 text-white hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 rounded-lg transition-all duration-300 font-exo"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="/contact" 
              className="block px-4 py-2 text-white hover:text-[#00D4FF] hover:bg-[#00D4FF]/10 rounded-lg transition-all duration-300 font-exo"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile Admin Button */}
            {isAdminLoggedIn ? (
              <button 
                onClick={() => {
                  handleAdminLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-[#FF9900] hover:text-[#FFB84D] hover:bg-[#FF9900]/10 rounded-lg transition-all duration-300 font-exo"
              >
                Admin Logout
              </button>
            ) : (
              <button 
                onClick={() => {
                  setShowAdminLogin(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-white hover:text-[#FF9900] hover:bg-[#FF9900]/10 rounded-lg transition-all duration-300 font-exo"
              >
                Admin Login
              </button>
            )}
            
            <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg font-exo">
              Get Quote
            </button>
          </div>
        </div>
      </div>
      
      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin 
          onLogin={setIsAdminLoggedIn}
          onClose={() => setShowAdminLogin(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;