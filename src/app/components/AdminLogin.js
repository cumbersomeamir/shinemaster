'use client';

import { useState } from 'react';
import MouseOilAnimation from './MouseOilAnimation';

const AdminLogin = ({ onLogin, onClose }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Static credentials - you can change these
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'shinemaster2025'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      if (
        credentials.username === ADMIN_CREDENTIALS.username &&
        credentials.password === ADMIN_CREDENTIALS.password
      ) {
        localStorage.setItem('isAdminLoggedIn', 'true');
        onLogin(true);
        onClose();
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <MouseOilAnimation />
      
      <div className="relative bg-gradient-to-br from-[#2D2D30]/90 to-[#1A1A1B]/90 backdrop-blur-md rounded-3xl border border-[#00D4FF]/30 p-8 w-full max-w-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#FF9900]/20 hover:bg-[#FF9900]/40 transition-colors duration-300"
        >
          <span className="text-[#FF9900] text-xl">×</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-black font-bold text-2xl font-orbitron">A</span>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00D4FF] via-[#FF9900] to-[#33DDFF] bg-clip-text text-transparent font-orbitron mb-2">
            Admin Login
          </h2>
          <p className="text-[#8B8B8D] font-exo">Access the admin dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[#00D4FF] font-semibold mb-2 font-exo">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-4 py-3 bg-[#0A0A0B]/50 border border-[#00D4FF]/30 rounded-xl text-white placeholder-[#8B8B8D] focus:border-[#FF9900] focus:outline-none transition-colors duration-300 font-exo"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-[#00D4FF] font-semibold mb-2 font-exo">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-4 py-3 bg-[#0A0A0B]/50 border border-[#00D4FF]/30 rounded-xl text-white placeholder-[#8B8B8D] focus:border-[#FF9900] focus:outline-none transition-colors duration-300 font-exo"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm font-exo">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gradient-to-r from-[#00D4FF] to-[#FF9900] text-black font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#FF9900]/50 font-exo disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Demo Credentials Info */}
        <div className="mt-6 p-4 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-xl">
          <p className="text-xs text-[#8B8B8D] font-exo text-center">
            Demo Credentials: admin / shinemaster2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;