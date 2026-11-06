import React from "react";

interface BotanicalProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
  size?: number;
}

/**
 * Exquisite botanical corner ornament with delicate olive leaves,
 * rose buds, and fine ornamental filigree flourishes.
 */
export function BotanicalCorner({
  className = "",
  color = "#A5A88D", // Sage green
  secondaryColor = "#D8C4A4", // Champagne gold
}: BotanicalProps) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer subtle corner accent line */}
      <path
        d="M 12 148 L 12 28 C 12 19.163 19.163 12 28 12 L 148 12"
        stroke={secondaryColor}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <path
        d="M 18 136 L 18 32 C 18 24.268 24.268 18 32 18 L 136 18"
        stroke={secondaryColor}
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />

      {/* Main curling botanical stem */}
      <path
        d="M 16 140 C 20 90, 45 45, 140 16"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Leaf 1 - top branch */}
      <path
        d="M 70 34 C 76 22, 94 20, 96 32 C 92 40, 78 40, 70 34 Z"
        fill={color}
        fillOpacity="0.8"
      />
      {/* Leaf 2 - opposite */}
      <path
        d="M 54 48 C 42 42, 40 24, 52 22 C 60 26, 60 40, 54 48 Z"
        fill={color}
        fillOpacity="0.75"
      />

      {/* Leaf 3 - mid branch */}
      <path
        d="M 98 22 C 108 12, 126 12, 126 24 C 120 32, 106 30, 98 22 Z"
        fill={color}
        fillOpacity="0.85"
      />

      {/* Leaf 4 - lower branch */}
      <path
        d="M 38 68 C 24 74, 22 92, 34 94 C 42 90, 42 76, 38 68 Z"
        fill={color}
        fillOpacity="0.8"
      />
      <path
        d="M 24 100 C 14 110, 14 126, 26 124 C 34 118, 32 104, 24 100 Z"
        fill={color}
        fillOpacity="0.85"
      />

      {/* Delicate rose blossom bud */}
      <g transform="translate(132, 12)">
        <circle cx="6" cy="6" r="5" fill="#C99D9D" fillOpacity="0.85" />
        <path
          d="M 3 6 C 3 4, 9 4, 9 6 C 9 8, 4 9, 3 6"
          stroke="#9F6E6E"
          strokeWidth="0.8"
          fill="none"
        />
        <circle cx="6" cy="6" r="2" fill="#D8C4A4" />
      </g>

      <g transform="translate(12, 132)">
        <circle cx="6" cy="6" r="5" fill="#C99D9D" fillOpacity="0.85" />
        <path
          d="M 3 6 C 3 4, 9 4, 9 6 C 9 8, 4 9, 3 6"
          stroke="#9F6E6E"
          strokeWidth="0.8"
          fill="none"
        />
        <circle cx="6" cy="6" r="2" fill="#D8C4A4" />
      </g>

      {/* Secondary micro leaves and buds */}
      <circle cx="48" cy="48" r="2" fill={secondaryColor} />
      <circle cx="34" cy="34" r="2.5" fill={secondaryColor} />
      <circle cx="28" cy="28" r="1.5" fill={secondaryColor} />
    </svg>
  );
}

/**
 * Elegant Symmetrical Floral Divider with central flower & golden hairline accents
 */
export function FloralDivider({
  className = "",
  color = "#A5A88D",
  goldColor = "#C5A880",
}: BotanicalProps & { goldColor?: string }) {
  return (
    <div className={`flex items-center justify-center my-6 select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 320 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-56 sm:w-72 max-w-full h-auto"
      >
        {/* Left hairline with taper */}
        <line x1="10" y1="16" x2="115" y2="16" stroke={goldColor} strokeWidth="0.8" strokeOpacity="0.6" />
        <circle cx="115" cy="16" r="1.5" fill={goldColor} />

        {/* Left botanical sprig */}
        <path
          d="M 120 16 C 130 11, 140 10, 148 16"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 128 13 C 126 8, 132 7, 134 11 Z"
          fill={color}
          fillOpacity="0.85"
        />
        <path
          d="M 140 12 C 142 7, 148 9, 146 13 Z"
          fill={color}
          fillOpacity="0.85"
        />

        {/* Center floral rosette */}
        <g transform="translate(160, 16)">
          <circle cx="0" cy="0" r="5" fill="#C99D9D" fillOpacity="0.9" />
          <circle cx="0" cy="0" r="2" fill={goldColor} />
          {/* Petals */}
          <circle cx="-6" cy="0" r="3" fill="#E8D2CE" fillOpacity="0.7" />
          <circle cx="6" cy="0" r="3" fill="#E8D2CE" fillOpacity="0.7" />
          <circle cx="0" cy="-6" r="3" fill="#E8D2CE" fillOpacity="0.7" />
          <circle cx="0" cy="6" r="3" fill="#E8D2CE" fillOpacity="0.7" />
          <circle cx="0" cy="0" r="1.5" fill="#45483B" />
        </g>

        {/* Right botanical sprig */}
        <path
          d="M 172 16 C 180 10, 190 11, 200 16"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M 180 12 C 178 7, 184 9, 186 13 Z"
          fill={color}
          fillOpacity="0.85"
        />
        <path
          d="M 192 13 C 194 8, 200 7, 198 11 Z"
          fill={color}
          fillOpacity="0.85"
        />

        {/* Right hairline with taper */}
        <circle cx="205" cy="16" r="1.5" fill={goldColor} />
        <line x1="205" y1="16" x2="310" y2="16" stroke={goldColor} strokeWidth="0.8" strokeOpacity="0.6" />
      </svg>
    </div>
  );
}

/**
 * Botanical Laurel Wreath for monograms, countdown, or quotes
 */
export function BotanicalWreath({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center p-6 ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Left branch */}
        <path
          d="M 100 185 C 50 185, 20 145, 20 95 C 20 50, 55 20, 95 15"
          stroke="#A5A88D"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Left leaves */}
        <path d="M 32 140 C 22 135, 18 122, 28 120 C 34 125, 34 135, 32 140 Z" fill="#A5A88D" />
        <path d="M 23 105 C 12 102, 12 90, 22 88 C 28 92, 28 100, 23 105 Z" fill="#A5A88D" />
        <path d="M 28 70 C 20 62, 24 50, 34 52 C 38 58, 34 68, 28 70 Z" fill="#A5A88D" />
        <path d="M 50 40 C 44 30, 52 22, 60 26 C 62 34, 56 42, 50 40 Z" fill="#A5A88D" />
        <path d="M 80 20 C 76 10, 88 6, 94 12 C 94 20, 86 24, 80 20 Z" fill="#A5A88D" />

        {/* Right branch */}
        <path
          d="M 100 185 C 150 185, 180 145, 180 95 C 180 50, 145 20, 105 15"
          stroke="#A5A88D"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Right leaves */}
        <path d="M 168 140 C 178 135, 182 122, 172 120 C 166 125, 166 135, 168 140 Z" fill="#A5A88D" />
        <path d="M 177 105 C 188 102, 188 90, 178 88 C 172 92, 172 100, 177 105 Z" fill="#A5A88D" />
        <path d="M 172 70 C 180 62, 176 50, 166 52 C 162 58, 166 68, 172 70 Z" fill="#A5A88D" />
        <path d="M 150 40 C 156 30, 148 22, 140 26 C 138 34, 144 42, 150 40 Z" fill="#A5A88D" />
        <path d="M 120 20 C 124 10, 112 6, 106 12 C 106 20, 114 24, 120 20 Z" fill="#A5A88D" />

        {/* Bottom ribbon knot */}
        <path
          d="M 94 184 C 98 181, 102 181, 106 184"
          stroke="#C5A880"
          strokeWidth="1.5"
        />
        <circle cx="100" cy="184" r="2.5" fill="#C5A880" />
      </svg>
      {children}
    </div>
  );
}

/**
 * Royal Stationery Crest
 */
export function RoyalMonogramCrest({
  monogram = "A & A",
  className = "",
}: {
  monogram?: string;
  className?: string;
}) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
        {/* Outer dotted gold circle */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="#C5A880"
            strokeWidth="0.8"
            strokeDasharray="2 3"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            stroke="#D8C4A4"
            strokeWidth="0.6"
            fill="none"
            strokeOpacity="0.6"
          />
        </svg>

        {/* Monogram Letters */}
        <span className="font-serif text-2xl sm:text-3xl text-[#45483B] tracking-wider font-light italic">
          {monogram}
        </span>
      </div>
    </div>
  );
}

