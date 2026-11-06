"use client";

import React from "react";

interface WeddingLovePatternProps {
  /**
   * "paper": Subtle champagne/rose filigree on light wedding stationery
   * "dark": Deep romantic jacquard lace on dark luxury outer container
   * "rose": Soft romantic dusty rose motif
   */
  variant?: "paper" | "dark" | "rose";
  opacity?: number;
  className?: string;
}

/**
 * WeddingLovePattern
 * 
 * An ultra-refined, seamless botanical love filigree pattern (Sulur Cinta Abadi)
 * featuring interlocking botanical hearts, delicate leaf pairs, romantic love knots,
 * and 4-leaf heart rosettes at corner intersections.
 * 
 * Renders as a lightweight vector SVG pattern that scales cleanly across mobile and desktop.
 */
export function WeddingLovePattern({
  variant = "paper",
  opacity,
  className = "",
}: WeddingLovePatternProps) {
  // Determine stroke and accent colors based on variant
  const strokeColor =
    variant === "dark"
      ? "rgba(216, 196, 164, 0.12)"
      : variant === "rose"
      ? "rgba(201, 157, 157, 0.22)"
      : "rgba(197, 168, 128, 0.18)";

  const accentColor =
    variant === "dark"
      ? "rgba(232, 213, 181, 0.18)"
      : variant === "rose"
      ? "rgba(201, 157, 157, 0.3)"
      : "rgba(201, 157, 157, 0.25)";

  const defaultOpacity =
    opacity !== undefined
      ? opacity
      : variant === "dark"
      ? 0.7
      : variant === "rose"
      ? 0.8
      : 0.85;

  const patternId = `wedding-love-damask-${variant}`;

  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{ opacity: defaultOpacity }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="84"
            height="84"
            patternUnits="userSpaceOnUse"
          >
            {/* Center Botanical Love Heart */}
            <g
              fill="none"
              stroke={strokeColor}
              strokeWidth="0.85"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Botanical Heart Silhouette: Curving floral vines */}
              <path d="M 42,56 C 33,48 20,38 20,26 C 20,16 30,12 37,18 C 39.5,20.5 42,24 42,26 C 42,24 44.5,20.5 47,18 C 54,12 64,16 64,26 C 64,38 51,48 42,56 Z" />

              {/* Inner Heart Sprouting Florets & Starlight */}
              <path
                d="M 42,30 C 42.8,33 45,34.2 47.5,35 C 45,35.8 42.8,37 42,40 C 41.2,37 39,35.8 36.5,35 C 39,34.2 41.2,33 42,30 Z"
                fill={accentColor}
                stroke={accentColor}
                strokeWidth="0.6"
              />

              {/* Side Botanical Laurel Leaves on the Heart Curves */}
              <path d="M 23,28 C 16,26 15,33 22,34" fill={accentColor} fillOpacity="0.3" />
              <path d="M 61,28 C 68,26 69,33 62,34" fill={accentColor} fillOpacity="0.3" />
              <path d="M 28,40 C 22,41 23,48 29,45" fill={accentColor} fillOpacity="0.25" />
              <path d="M 56,40 C 62,41 61,48 55,45" fill={accentColor} fillOpacity="0.25" />

              {/* Romantic Infinity Knot / Ribbon Swirls at Heart Base */}
              <path d="M 42,56 C 36,60 32,63 35,67 C 38,67 40,62 42,56" />
              <path d="M 42,56 C 48,60 52,63 49,67 C 46,67 44,62 42,56" />
              <circle cx="42" cy="56" r="1.2" fill={accentColor} />

              {/* Corner Love Clover (Quarters meet to form a 4-heart clover at tile intersections) */}
              {/* Top-Left Corner (0,0) */}
              <path d="M 0,18 C 8,16 14,13 16,7 C 17,3 17,0 17,0" />
              <path d="M 18,0 C 16,8 13,14 7,16 C 3,17 0,17 0,17" />
              <path d="M 0,0 L 8,8" />
              <circle cx="8" cy="8" r="1" fill={accentColor} />

              {/* Top-Right Corner (84,0) */}
              <path d="M 84,18 C 76,16 70,13 68,7 C 67,3 67,0 67,0" />
              <path d="M 66,0 C 68,8 71,14 77,16 C 81,17 84,17 84,17" />
              <path d="M 84,0 L 76,8" />
              <circle cx="76" cy="8" r="1" fill={accentColor} />

              {/* Bottom-Left Corner (0,84) */}
              <path d="M 0,66 C 8,68 14,71 16,77 C 17,81 17,84 17,84" />
              <path d="M 18,84 C 16,76 13,70 7,68 C 3,67 0,67 0,67" />
              <path d="M 0,84 L 8,76" />
              <circle cx="8" cy="76" r="1" fill={accentColor} />

              {/* Bottom-Right Corner (84,84) */}
              <path d="M 84,66 C 76,68 70,71 68,77 C 67,81 67,84 67,84" />
              <path d="M 66,84 C 68,76 71,70 77,68 C 81,67 84,67 84,67" />
              <path d="M 84,84 L 76,76" />
              <circle cx="76" cy="76" r="1" fill={accentColor} />

              {/* Interlocking Arch Scrollwork linking Hearts seamlessly */}
              <path d="M 42,10 C 37,5 28,2 19,3 C 14,4 8,8 5,12" />
              <path d="M 42,10 C 47,5 56,2 65,3 C 70,4 76,8 79,12" />
              <path d="M 42,74 C 37,79 28,82 19,81 C 14,80 8,76 5,72" />
              <path d="M 42,74 C 47,79 56,82 65,81 C 70,80 76,76 79,72" />

              {/* Delicate Diamond Accent Points between Tiles */}
              <path
                d="M 42,8 L 44,10 L 42,12 L 40,10 Z"
                fill={accentColor}
                stroke={accentColor}
                strokeWidth="0.5"
              />
              <path
                d="M 42,72 L 44,74 L 42,76 L 40,74 Z"
                fill={accentColor}
                stroke={accentColor}
                strokeWidth="0.5"
              />
              <path
                d="M 8,42 L 10,40 L 12,42 L 10,44 Z"
                fill={accentColor}
                stroke={accentColor}
                strokeWidth="0.5"
              />
              <path
                d="M 72,42 L 74,40 L 76,42 L 74,44 Z"
                fill={accentColor}
                stroke={accentColor}
                strokeWidth="0.5"
              />
            </g>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

/**
 * Precomputed 12 static coordinates for laurel wreath leaves (radius 89, center 100, 100).
 * Rounded to exact 2-decimal constants to eliminate floating point SSR/client hydration differences.
 */
const LAUREL_LEAF_POINTS = [
  { cx: 189, cy: 100 },
  { cx: 177.08, cy: 144.5 },
  { cx: 144.5, cy: 177.08 },
  { cx: 100, cy: 189 },
  { cx: 55.5, cy: 177.08 },
  { cx: 22.92, cy: 144.5 },
  { cx: 11, cy: 100 },
  { cx: 22.92, cy: 55.5 },
  { cx: 55.5, cy: 22.92 },
  { cx: 100, cy: 11 },
  { cx: 144.5, cy: 22.92 },
  { cx: 177.08, cy: 55.5 },
] as const;

/**
 * RomanticLoveWatermark
 * 
 * An editorial circular love medallion featuring botanical laurel wreath,
 * interlocking wedding rings, and romantic heart filigree for section focal points.
 */
export function RomanticLoveWatermark({
  className = "",
  size = 280,
  opacity = 0.07,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size, opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full text-[#C5A880]"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Outer Circular Laurel Frame */}
        <circle cx="100" cy="100" r="92" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="100" cy="100" r="86" strokeWidth="0.6" />

        {/* 12 Floral Laurel Leaves Around the Circle */}
        {LAUREL_LEAF_POINTS.map((pt, i) => (
          <circle
            key={i}
            cx={pt.cx}
            cy={pt.cy}
            r="2.2"
            fill="#C99D9D"
            stroke="#C5A880"
            strokeWidth="0.5"
          />
        ))}

        {/* Center Interlocking Double Hearts (Simbol Penyatuan Dua Hati) */}
        <g strokeWidth="1.2">
          {/* Left Heart */}
          <path
            d="M 92,126 C 80,116 64,104 64,88 C 64,74 76,70 86,78 C 89,81 92,86 92,89 C 92,86 95,81 98,78 C 108,70 120,74 120,88 C 120,104 104,116 92,126 Z"
            stroke="#C99D9D"
            fill="rgba(201, 157, 157, 0.08)"
          />
          {/* Right Interlocking Heart (Slightly tilted) */}
          <path
            d="M 108,124 C 98,114 84,102 84,88 C 84,76 94,72 102,79 C 105,82 108,86 108,89 C 108,86 111,82 114,79 C 122,72 132,76 132,88 C 132,102 118,114 108,124 Z"
            stroke="#C5A880"
            fill="rgba(216, 196, 164, 0.08)"
            strokeDasharray="2 0.5"
          />
        </g>

        {/* Romantic Scroll Banners & Filigree Stars */}
        <path d="M 70,62 C 85,55 115,55 130,62" strokeWidth="0.8" />
        <path d="M 70,140 C 85,147 115,147 130,140" strokeWidth="0.8" />

        {/* Central Love Sparkle */}
        <path
          d="M 100,82 C 100.8,85 103,86.2 105.5,87 C 103,87.8 100.8,89 100,92 C 99.2,89 97,87.8 94.5,87 C 97,86.2 99.2,85 100,82 Z"
          fill="#C5A880"
        />
      </svg>
    </div>
  );
}

