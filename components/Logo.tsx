import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-14" }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <div className="relative flex flex-col items-center">
      {/* Shark Icon / Illustration - Simplified representation of the image logo */}
      <svg 
        viewBox="0 0 200 80" 
        className="h-16 w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M20 50 C 40 45, 60 20, 100 20 C 140 20, 160 45, 180 50 C 160 55, 140 60, 100 60 C 60 60, 40 55, 20 50" 
          stroke="#b49b57" 
          strokeWidth="2" 
          fill="#b49b57" 
          fillOpacity="0.1"
        />
        <path 
          d="M80 20 L 100 5 L 120 20" 
          stroke="#b49b57" 
          strokeWidth="2" 
          fill="#b49b57"
        />
        <text 
          x="100" 
          y="55" 
          textAnchor="middle" 
          fontFamily="'Playfair Display', serif" 
          fontWeight="900" 
          fontSize="32" 
          fill="#b49b57"
          style={{ letterSpacing: '0.1em' }}
        >
          KARISH
        </text>
      </svg>
      <div className="text-[10px] font-bold text-white tracking-[0.4em] uppercase -mt-2">
        Law Firm
      </div>
    </div>
  </div>
);