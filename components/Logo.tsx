import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-14" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 320 80" 
    className={`${className} w-auto`}
    aria-label="Karish Law Firm Logo"
    fill="none"
  >
    {/* Icon Section: Scales of Justice */}
    <g transform="translate(0, 5)">
        {/* Center Post */}
        <line x1="40" y1="10" x2="40" y2="65" stroke="#b49b57" strokeWidth="3" strokeLinecap="round" />
        <line x1="30" y1="65" x2="50" y2="65" stroke="#b49b57" strokeWidth="3" strokeLinecap="round" />
        <circle cx="40" cy="10" r="3" fill="#b49b57" />
        
        {/* Balance Beam */}
        <line x1="15" y1="20" x2="65" y2="20" stroke="#b49b57" strokeWidth="3" strokeLinecap="round" />
        
        {/* Left Pan */}
        <line x1="15" y1="20" x2="25" y2="45" stroke="#b49b57" strokeWidth="1.5" />
        <line x1="15" y1="20" x2="5" y2="45" stroke="#b49b57" strokeWidth="1.5" />
        <path d="M5 45 C 5 53, 25 53, 25 45 Z" fill="#b49b57" fillOpacity="0.2" stroke="#b49b57" strokeWidth="2" />
        
        {/* Right Pan */}
        <line x1="65" y1="20" x2="75" y2="45" stroke="#b49b57" strokeWidth="1.5" />
        <line x1="65" y1="20" x2="55" y2="45" stroke="#b49b57" strokeWidth="1.5" />
        <path d="M55 45 C 55 53, 75 53, 75 45 Z" fill="#b49b57" fillOpacity="0.2" stroke="#b49b57" strokeWidth="2" />
    </g>

    {/* Text Section */}
    <text 
      x="85" 
      y="50" 
      fontFamily="'Playfair Display', serif" 
      fontWeight="700" 
      fontSize="42" 
      fill="#ffffff" 
    >
      KARISH
    </text>
    
    <text 
      x="88" 
      y="72" 
      fontFamily="'Lato', sans-serif" 
      fontWeight="700" 
      fontSize="12" 
      fill="#b49b57" 
      letterSpacing="6"
      style={{ textTransform: 'uppercase' }}
    >
      Law Firm
    </text>
  </svg>
);