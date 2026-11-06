"use client";

import React from "react";
import { motion } from "framer-motion";

interface WaxSealProps {
  monogram?: string;
  onClick?: () => void;
  isOpen?: boolean;
  className?: string;
}

export function WaxSeal({
  monogram = "A & A",
  onClick,
  isOpen = false,
  className = "",
}: WaxSealProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Buka Segel Undangan"
      className={`relative group cursor-pointer focus:outline-none rounded-full transition-transform ${className}`}
    >
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
        {/* Soft realistic drop shadow for the wax */}
        <div className="absolute inset-1 rounded-full bg-[#3B1F23]/40 blur-md translate-y-2" />

        {/* Outer irregular wax drip SVG shape */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full drop-shadow-lg"
        >
          <defs>
            <radialGradient id="waxGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#A84C57" />
              <stop offset="45%" stopColor="#8A3440" />
              <stop offset="85%" stopColor="#69222C" />
              <stop offset="100%" stopColor="#4A161E" />
            </radialGradient>
            <filter id="waxTexture" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" />
              <feComposite in2="SourceGraphic" in="glint" operator="in" />
            </filter>
          </defs>

          {/* Hand-poured wax rim with natural imperfections */}
          <path
            d="M 50 4 
               C 66 3, 82 12, 92 26 
               C 99 37, 98 55, 93 69 
               C 87 83, 76 94, 60 97 
               C 44 99, 27 95, 14 83 
               C 3 71, 1 54, 5 38 
               C 9 22, 28 6, 50 4 Z"
            fill="url(#waxGrad)"
          />

          {/* Inner embossed rim */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#531720"
            strokeWidth="2.5"
            strokeOpacity="0.7"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="#D8C4A4"
            strokeWidth="1.2"
            strokeDasharray="1.5 2"
            strokeOpacity="0.8"
          />
          <circle
            cx="50"
            cy="50"
            r="31"
            fill="#752B35"
            stroke="#9F424E"
            strokeWidth="1"
          />

          {/* Top specular highlight reflection */}
          <ellipse
            cx="40"
            cy="32"
            rx="14"
            ry="7"
            fill="white"
            fillOpacity="0.22"
            transform="rotate(-20 40 32)"
          />
        </svg>

        {/* Embossed Monogram Initials */}
        <span
          className="relative z-10 font-serif text-lg sm:text-xl font-normal text-[#F4E3D7] tracking-wider drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] select-none italic"
          style={{ textShadow: "0 1px 2px rgba(40,10,15,0.9), 0 -1px 0 rgba(255,255,255,0.2)" }}
        >
          {monogram}
        </span>
      </div>

      {/* Gentle pulsing gold ring indicator */}
      {!isOpen && (
        <span className="absolute -inset-1 rounded-full border border-[#D8C4A4]/60 animate-ping pointer-events-none opacity-40" />
      )}
    </motion.button>
  );
}

