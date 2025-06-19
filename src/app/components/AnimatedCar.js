'use client';

import { useState, useEffect } from 'react';

const AnimatedCar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotation = scrollY * 0.3;

  return (
    <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
      <div 
        className="w-80 h-80 md:w-96 md:h-96 transition-transform duration-75 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg
          viewBox="0 0 700 400"
          className="w-full h-full drop-shadow-2xl filter brightness-110"
          fill="none"
        >
          {/* Car Shadow */}
          <ellipse cx="350" cy="360" rx="180" ry="25" fill="rgba(0, 0, 0, 0.4)" />
          
          {/* Main Car Body - Sports Car Shape */}
          <path
            d="M120 240 L140 200 L180 170 L200 160 L250 150 L400 150 L500 160 L550 180 L580 220 L590 260 L580 280 L560 290 L140 290 L120 270 Z"
            fill="url(#mainBodyGradient)"
            stroke="url(#bodyStroke)"
            strokeWidth="2"
          />
          
          {/* Front Hood */}
          <path
            d="M500 160 L550 180 L580 220 L590 260 L580 240 L560 200 L520 170 L500 160 Z"
            fill="url(#hoodGradient)"
            stroke="rgba(0, 212, 255, 0.4)"
            strokeWidth="1"
          />
          
          {/* Windshield */}
          <path
            d="M250 150 L400 150 L480 170 L450 180 L280 180 L200 160 Z"
            fill="rgba(0, 212, 255, 0.12)"
            stroke="rgba(0, 212, 255, 0.8)"
            strokeWidth="1"
          />
          
          {/* Side Windows */}
          <path
            d="M280 180 L450 180 L480 200 L460 210 L300 210 L260 200 Z"
            fill="rgba(0, 184, 230, 0.1)"
            stroke="rgba(0, 212, 255, 0.5)"
            strokeWidth="1"
          />
          
          {/* Rear Window */}
          <path
            d="M200 160 L260 200 L240 210 L180 190 L160 180 Z"
            fill="rgba(0, 212, 255, 0.08)"
            stroke="rgba(0, 212, 255, 0.6)"
            strokeWidth="1"
          />
          
          {/* Front Bumper & Grille */}
          <path
            d="M580 220 L590 260 L600 270 L610 260 L605 240 L590 220 Z"
            fill="url(#grilleGradient)"
            stroke="rgba(255, 153, 0, 0.6)"
            strokeWidth="1"
          />
          
          {/* Headlights */}
          <ellipse cx="585" cy="200" rx="18" ry="12" fill="url(#headlightGradient)" className="animate-pulse" />
          <ellipse cx="585" cy="200" rx="12" ry="8" fill="#FFFFFF" opacity="0.9" />
          
          <ellipse cx="590" cy="270" rx="18" ry="12" fill="url(#headlightGradient)" className="animate-pulse" />
          <ellipse cx="590" cy="270" rx="12" ry="8" fill="#FFFFFF" opacity="0.9" />
          
          {/* Tail Lights */}
          <ellipse cx="130" cy="210" rx="15" ry="10" fill="#FF3333" opacity="0.9" />
          <ellipse cx="125" cy="260" rx="15" ry="10" fill="#FF3333" opacity="0.9" />
          
          {/* Accent Stripes - Yellow/Orange */}
          <path
            d="M180 190 L480 190 L500 200 L490 210 L200 210 L180 200 Z"
            fill="url(#accentGradient)"
            opacity="0.8"
          />
          
          <path
            d="M200 230 L520 230 L540 240 L530 250 L220 250 L200 240 Z"
            fill="url(#accentGradient)"
            opacity="0.6"
          />
          
          {/* Wheels - Front (larger) */}
          <circle cx="480" cy="280" r="45" fill="#1A1A1B" stroke="#2D2D30" strokeWidth="4" />
          <circle cx="480" cy="280" r="35" fill="url(#wheelGradient)" />
          <circle cx="480" cy="280" r="25" fill="#0A0A0B" />
          <circle cx="480" cy="280" r="15" fill="url(#hubGradient)" />
          
          {/* Wheels - Rear (smaller) */}
          <circle cx="200" cy="280" r="40" fill="#1A1A1B" stroke="#2D2D30" strokeWidth="4" />
          <circle cx="200" cy="280" r="30" fill="url(#wheelGradient)" />
          <circle cx="200" cy="280" r="20" fill="#0A0A0B" />
          <circle cx="200" cy="280" r="12" fill="url(#hubGradient)" />
          
          {/* Wheel Spokes - Front */}
          <g className="animate-spin" style={{ transformOrigin: '480px 280px', animationDuration: '8s' }}>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <line
                key={i}
                x1="480"
                y1="280"
                x2={480 + 30 * Math.cos((angle * Math.PI) / 180)}
                y2={280 + 30 * Math.sin((angle * Math.PI) / 180)}
                stroke="#00D4FF"
                strokeWidth="2"
                opacity="0.8"
              />
            ))}
          </g>
          
          {/* Wheel Spokes - Rear */}
          <g className="animate-spin" style={{ transformOrigin: '200px 280px', animationDuration: '8s' }}>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <line
                key={i}
                x1="200"
                y1="280"
                x2={200 + 25 * Math.cos((angle * Math.PI) / 180)}
                y2={280 + 25 * Math.sin((angle * Math.PI) / 180)}
                stroke="#00D4FF"
                strokeWidth="2"
                opacity="0.8"
              />
            ))}
          </g>
          
          {/* Side Vents */}
          <rect x="350" y="220" width="30" height="4" rx="2" fill="rgba(255, 153, 0, 0.8)" />
          <rect x="350" y="230" width="25" height="4" rx="2" fill="rgba(255, 153, 0, 0.6)" />
          <rect x="350" y="240" width="20" height="4" rx="2" fill="rgba(255, 153, 0, 0.4)" />
          
          {/* Door Handles */}
          <rect x="300" y="215" width="12" height="5" rx="2" fill="#FF9900" />
          <rect x="400" y="215" width="12" height="5" rx="2" fill="#FF9900" />
          
          {/* Side Mirrors */}
          <ellipse cx="250" cy="170" rx="10" ry="6" fill="url(#mirrorGradient)" />
          <ellipse cx="470" cy="170" rx="10" ry="6" fill="url(#mirrorGradient)" />
          
          {/* Spoiler */}
          <path
            d="M140 200 L180 190 L180 185 L140 195 Z"
            fill="url(#spoilerGradient)"
            stroke="rgba(255, 153, 0, 0.5)"
            strokeWidth="1"
          />
          
          {/* Side Character Lines */}
          <path
            d="M180 200 L550 200 Q570 205 560 210 L200 210 Q180 205 180 200"
            stroke="url(#sideLineGradient)"
            strokeWidth="3"
            fill="none"
          />
          
          <path
            d="M200 240 L530 240 Q550 245 540 250 L220 250 Q200 245 200 240"
            stroke="rgba(255, 153, 0, 0.6)"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Brand Logo Area */}
          <rect x="320" y="260" width="80" height="12" rx="3" fill="rgba(0, 212, 255, 0.1)" stroke="rgba(0, 212, 255, 0.4)" strokeWidth="1" />
          
          {/* Gradients and Effects */}
          <defs>
            <linearGradient id="mainBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D2D30" />
              <stop offset="20%" stopColor="#1A1A1B" />
              <stop offset="60%" stopColor="#0A0A0B" />
              <stop offset="100%" stopColor="#1A1A1B" />
            </linearGradient>
            
            <linearGradient id="hoodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A1A1B" />
              <stop offset="100%" stopColor="#2D2D30" />
            </linearGradient>
            
            <linearGradient id="spoilerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D2D30" />
              <stop offset="100%" stopColor="#FF9900" />
            </linearGradient>
            
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9900" />
              <stop offset="50%" stopColor="#FFB84D" />
              <stop offset="100%" stopColor="#FF9900" />
            </linearGradient>
            
            <linearGradient id="bodyStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" opacity="0.6" />
              <stop offset="50%" stopColor="#33DDFF" opacity="0.9" />
              <stop offset="100%" stopColor="#FF9900" opacity="0.7" />
            </linearGradient>
            
            <radialGradient id="wheelGradient">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="70%" stopColor="#0099CC" />
              <stop offset="100%" stopColor="#1A1A1B" />
            </radialGradient>
            
            <radialGradient id="hubGradient">
              <stop offset="0%" stopColor="#FF9900" />
              <stop offset="100%" stopColor="#00B8E6" />
            </radialGradient>
            
            <radialGradient id="headlightGradient">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#0099CC" />
            </radialGradient>
            
            <linearGradient id="grilleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2D2D30" />
              <stop offset="50%" stopColor="#FF9900" />
              <stop offset="100%" stopColor="#0A0A0B" />
            </linearGradient>
            
            <linearGradient id="mirrorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A1A1B" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
            
            <linearGradient id="sideLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 212, 255, 0.3)" />
              <stop offset="30%" stopColor="rgba(0, 212, 255, 0.9)" />
              <stop offset="70%" stopColor="rgba(255, 153, 0, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 153, 0, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedCar;