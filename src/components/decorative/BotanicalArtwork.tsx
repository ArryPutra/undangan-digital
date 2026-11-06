"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface FlowerProps {
  className?: string;
  size?: number;
  bloom?: boolean;
  delay?: number;
  duration?: number;
}

/**
 * 1. REALISTIC WATERCOLOR ROSE
 * Multi-petaled English garden rose with layered watercolor gradations.
 * Features realistic petal unfurling (blooming) when bloom={true}.
 */
export function WatercolorRose({
  className = "",
  size = 120,
  bloom = false,
  delay = 0,
  duration = 1.6,
}: FlowerProps) {
  // Staggered blooming variants
  const outerPetalVariants: Variants = {
    initial: { scale: bloom ? 0.3 : 1, rotate: bloom ? -25 : 0, opacity: bloom ? 0 : 1 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration, delay: delay + 0.1, ease: "easeOut" },
    },
  };

  const midPetalVariants: Variants = {
    initial: { scale: bloom ? 0.2 : 1, rotate: bloom ? 30 : 0, opacity: bloom ? 0 : 1 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: duration * 0.9, delay: delay + 0.25, ease: "easeOut" },
    },
  };

  const innerCoreVariants: Variants = {
    initial: { scale: bloom ? 0.15 : 1, rotate: bloom ? -45 : 0, opacity: bloom ? 0 : 1 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration: duration * 0.8, delay: delay + 0.45, ease: "easeOut" },
    },
  };

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-block select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Watercolor Gradients */}
          <radialGradient id="roseOuterGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DF9EA4" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#CA8B91" stopOpacity="0.85" />
            <stop offset="90%" stopColor="#AD6C72" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#8C4E54" />
          </radialGradient>

          <radialGradient id="roseMidGrad" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#F7DFE1" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#E6A8AE" stopOpacity="0.9" />
            <stop offset="85%" stopColor="#C47880" />
            <stop offset="100%" stopColor="#9C5259" />
          </radialGradient>

          <radialGradient id="roseCoreGrad" cx="42%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FDECEE" />
            <stop offset="35%" stopColor="#DF939A" />
            <stop offset="75%" stopColor="#BA666E" />
            <stop offset="100%" stopColor="#7B333B" />
          </radialGradient>

          {/* Leaf / Sepal Gradient */}
          <linearGradient id="sepalGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A8AC92" />
            <stop offset="100%" stopColor="#5F634D" />
          </linearGradient>

          {/* Soft Shadow */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. SEPAL / CALYX (Back layer) */}
        <g id="sepals">
          <path
            d="M 80 80 C 60 40, 20 50, 8 70 C 24 82, 55 85, 80 80 Z"
            fill="url(#sepalGrad)"
            opacity="0.85"
          />
          <path
            d="M 80 80 C 110 35, 145 40, 155 60 C 140 76, 110 82, 80 80 Z"
            fill="url(#sepalGrad)"
            opacity="0.85"
          />
          <path
            d="M 80 80 C 70 120, 40 145, 25 140 C 35 120, 60 98, 80 80 Z"
            fill="url(#sepalGrad)"
            opacity="0.8"
          />
          <path
            d="M 80 80 C 105 115, 135 135, 148 128 C 135 110, 105 92, 80 80 Z"
            fill="url(#sepalGrad)"
            opacity="0.8"
          />
        </g>

        {/* 2. LAYER 1: OUTER UNFURLING PETALS */}
        <motion.g
          id="outerPetals"
          style={{ transformOrigin: "80px 80px" }}
          variants={outerPetalVariants}
          initial={bloom ? "initial" : false}
          animate={bloom ? "animate" : false}
        >
          {/* Top Petal */}
          <path
            d="M 45 60 C 38 25, 118 20, 115 58 C 102 68, 60 70, 45 60 Z"
            fill="url(#roseOuterGrad)"
            stroke="#C07E84"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
          {/* Top-Right Petal */}
          <path
            d="M 100 48 C 142 42, 155 105, 122 115 C 108 102, 92 80, 100 48 Z"
            fill="url(#roseOuterGrad)"
            stroke="#C07E84"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
          {/* Bottom Petal */}
          <path
            d="M 120 105 C 122 148, 45 152, 38 112 C 55 98, 98 96, 120 105 Z"
            fill="url(#roseOuterGrad)"
            stroke="#C07E84"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
          {/* Left Petal */}
          <path
            d="M 45 110 C 10 98, 12 45, 52 46 C 60 62, 58 92, 45 110 Z"
            fill="url(#roseOuterGrad)"
            stroke="#C07E84"
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
        </motion.g>

        {/* 3. LAYER 2: MID CUP-SHAPED PETALS */}
        <motion.g
          id="midPetals"
          style={{ transformOrigin: "80px 80px" }}
          variants={midPetalVariants}
          initial={bloom ? "initial" : false}
          animate={bloom ? "animate" : false}
        >
          <path
            d="M 52 64 C 48 40, 105 38, 108 62 C 95 72, 65 72, 52 64 Z"
            fill="url(#roseMidGrad)"
          />
          <path
            d="M 98 56 C 128 58, 130 104, 106 108 C 96 95, 84 82, 98 56 Z"
            fill="url(#roseMidGrad)"
          />
          <path
            d="M 105 100 C 104 130, 52 132, 50 104 C 65 92, 92 90, 105 100 Z"
            fill="url(#roseMidGrad)"
          />
          <path
            d="M 54 100 C 30 92, 32 60, 58 58 C 64 70, 62 88, 54 100 Z"
            fill="url(#roseMidGrad)"
          />
          {/* Interlocking curved crest */}
          <path
            d="M 60 72 C 55 58, 95 55, 98 70 C 88 80, 70 80, 60 72 Z"
            fill="#EDACB2"
            opacity="0.9"
          />
        </motion.g>

        {/* 4. LAYER 3: INNER SPIRALING ROSEBUD CORE */}
        <motion.g
          id="innerCore"
          style={{ transformOrigin: "80px 80px" }}
          variants={innerCoreVariants}
          initial={bloom ? "initial" : false}
          animate={bloom ? "animate" : false}
        >
          {/* Swirling deep bud center */}
          <circle cx="80" cy="80" r="18" fill="url(#roseCoreGrad)" />
          {/* Delicate spiral swirls */}
          <path
            d="M 72 74 C 74 68, 88 68, 88 74 C 88 80, 74 80, 74 84 C 74 88, 86 88, 86 84"
            stroke="#FDECEE"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M 77 78 C 78 75, 84 75, 84 78 C 84 81, 78 81, 78 83"
            stroke="#9E464E"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </motion.g>
      </svg>
    </div>
  );
}

/**
 * 2. WHITE JASMINE FLOWER (Melati Putih)
 * Delicate 5-petaled star jasmine with ivory porcelain petals,
 * translucent shading, and bright golden stamen center.
 */
export function WhiteJasmine({
  className = "",
  size = 54,
  bloom = false,
  delay = 0,
  duration = 1.3,
}: FlowerProps) {
  const jasmineVariants: Variants = {
    initial: { scale: bloom ? 0.2 : 1, rotate: bloom ? -30 : 0, opacity: bloom ? 0 : 1 },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-block select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="jasminePetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#FAF6F0" />
            <stop offset="100%" stopColor="#E9DFD3" />
          </linearGradient>

          <radialGradient id="jasmineStamenGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="60%" stopColor="#E5C158" />
            <stop offset="100%" stopColor="#B38A2A" />
          </radialGradient>
        </defs>

        <motion.g
          style={{ transformOrigin: "50px 50px" }}
          variants={jasmineVariants}
          initial={bloom ? "initial" : false}
          animate={bloom ? "animate" : false}
        >
          {/* Calyx tips behind petals */}
          <path d="M 50 50 L 48 10 L 52 10 Z" fill="#888E75" opacity="0.8" />
          <path d="M 50 50 L 88 24 L 88 28 Z" fill="#888E75" opacity="0.8" />
          <path d="M 50 50 L 80 82 L 76 84 Z" fill="#888E75" opacity="0.8" />
          <path d="M 50 50 L 22 78 L 24 74 Z" fill="#888E75" opacity="0.8" />
          <path d="M 50 50 L 14 30 L 16 26 Z" fill="#888E75" opacity="0.8" />

          {/* 5 Delicate Oval Petals */}
          {/* Petal 1 (Top) */}
          <path
            d="M 50 50 C 40 38, 38 14, 50 8 C 62 14, 60 38, 50 50 Z"
            fill="url(#jasminePetalGrad)"
            stroke="#DFD5C8"
            strokeWidth="0.5"
          />
          {/* Petal 2 (Top-Right) */}
          <path
            d="M 50 50 C 58 40, 84 32, 88 42 C 86 54, 64 56, 50 50 Z"
            fill="url(#jasminePetalGrad)"
            stroke="#DFD5C8"
            strokeWidth="0.5"
          />
          {/* Petal 3 (Bottom-Right) */}
          <path
            d="M 50 50 C 60 54, 76 76, 68 84 C 56 86, 48 64, 50 50 Z"
            fill="url(#jasminePetalGrad)"
            stroke="#DFD5C8"
            strokeWidth="0.5"
          />
          {/* Petal 4 (Bottom-Left) */}
          <path
            d="M 50 50 C 44 60, 24 74, 18 64 C 18 52, 40 48, 50 50 Z"
            fill="url(#jasminePetalGrad)"
            stroke="#DFD5C8"
            strokeWidth="0.5"
          />
          {/* Petal 5 (Top-Left) */}
          <path
            d="M 50 50 C 40 44, 18 24, 28 16 C 38 16, 46 38, 50 50 Z"
            fill="url(#jasminePetalGrad)"
            stroke="#DFD5C8"
            strokeWidth="0.5"
          />

          {/* Petal Center Rib / Crease */}
          <path d="M 50 50 L 50 18" stroke="#D3C7B7" strokeWidth="0.5" strokeOpacity="0.6" />
          <path d="M 50 50 L 76 38" stroke="#D3C7B7" strokeWidth="0.5" strokeOpacity="0.6" />
          <path d="M 50 50 L 64 74" stroke="#D3C7B7" strokeWidth="0.5" strokeOpacity="0.6" />
          <path d="M 50 50 L 28 62" stroke="#D3C7B7" strokeWidth="0.5" strokeOpacity="0.6" />
          <path d="M 50 50 L 32 26" stroke="#D3C7B7" strokeWidth="0.5" strokeOpacity="0.6" />

          {/* Central Stamen Gold Crown */}
          <circle cx="50" cy="50" r="5" fill="url(#jasmineStamenGrad)" />
          <circle cx="50" cy="50" r="2.2" fill="#5F634D" />
          {/* Stamen dots */}
          <circle cx="48" cy="47" r="0.9" fill="#FFFFFF" />
          <circle cx="52" cy="48" r="0.8" fill="#FFF3D0" />
          <circle cx="50" cy="53" r="0.8" fill="#FFF3D0" />
        </motion.g>
      </svg>
    </div>
  );
}

/**
 * 3. DELICATE BABY'S BREATH (Gypsophila)
 * Slender wiry branches bearing clusters of airy white florets.
 */
export function BabysBreath({
  className = "",
  size = 110,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      style={{ width: size, height: size * 0.8 }}
      className={`relative inline-block select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 140 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Wiry olive/sage stems */}
        <g stroke="#7F856A" strokeWidth="0.8" strokeLinecap="round">
          {/* Main Stem */}
          <path d="M 10 100 C 40 85, 70 70, 110 30" />
          {/* Sub-branch 1 */}
          <path d="M 45 80 C 48 60, 42 45, 30 35" />
          <path d="M 42 45 C 52 35, 65 30, 72 25" />
          {/* Sub-branch 2 */}
          <path d="M 75 62 C 85 50, 95 45, 120 48" />
          <path d="M 85 52 C 92 38, 90 25, 88 15" />
          {/* Sub-branch 3 */}
          <path d="M 98 38 C 112 28, 125 22, 132 12" />
        </g>

        {/* Baby's breath florets (clusters of 4 tiny white petals with soft centers) */}
        {[
          { cx: 30, cy: 35 },
          { cx: 25, cy: 32 },
          { cx: 72, cy: 25 },
          { cx: 76, cy: 22 },
          { cx: 88, cy: 15 },
          { cx: 120, cy: 48 },
          { cx: 126, cy: 45 },
          { cx: 110, cy: 30 },
          { cx: 132, cy: 12 },
          { cx: 135, cy: 15 },
          { cx: 58, cy: 52 },
          { cx: 102, cy: 26 },
        ].map((pt, i) => (
          <g key={i} transform={`translate(${pt.cx}, ${pt.cy})`}>
            {/* Soft floret petals */}
            <circle cx="-1.8" cy="0" r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
            <circle cx="1.8" cy="0" r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
            <circle cx="0" cy="-1.8" r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
            <circle cx="0" cy="1.8" r="1.8" fill="#FFFFFF" fillOpacity="0.9" />
            {/* Center dot */}
            <circle cx="0" cy="0" r="1" fill="#E6D7B8" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/**
 * 4. EUCALYPTUS BRANCH (Daun Eukaliptus)
 * Silver dollar & willow eucalyptus leaves with delicate sage gradients
 * and realistic central veins. Designed to sway organically with .sway-left or .sway-right.
 */
export function EucalyptusBranch({
  className = "",
  size = 140,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      style={{ width: size, height: size * 1.3 }}
      className={`relative inline-block select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="eucaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4C9B8" />
            <stop offset="50%" stopColor="#9CA38D" />
            <stop offset="100%" stopColor="#6C735B" />
          </linearGradient>

          <linearGradient id="eucaGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BAC0AE" />
            <stop offset="60%" stopColor="#8E967F" />
            <stop offset="100%" stopColor="#5E654E" />
          </linearGradient>
        </defs>

        {/* Main Central Stem */}
        <path
          d="M 20 155 C 35 120, 50 75, 75 10"
          stroke="#7A8068"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Pair 1: Low leaves */}
        <g>
          <path
            d="M 32 125 C 10 120, 2 135, 14 142 C 26 145, 34 135, 32 125 Z"
            fill="url(#eucaGrad1)"
            opacity="0.9"
          />
          <path d="M 32 125 L 14 138" stroke="#5E654E" strokeWidth="0.6" strokeOpacity="0.6" />
          <path
            d="M 36 118 C 58 116, 68 130, 58 138 C 46 142, 38 130, 36 118 Z"
            fill="url(#eucaGrad2)"
            opacity="0.9"
          />
          <path d="M 36 118 L 56 132" stroke="#5E654E" strokeWidth="0.6" strokeOpacity="0.6" />
        </g>

        {/* Pair 2: Mid-Low leaves */}
        <g>
          <path
            d="M 44 92 C 18 84, 12 100, 24 108 C 38 110, 46 98, 44 92 Z"
            fill="url(#eucaGrad2)"
            opacity="0.92"
          />
          <path d="M 44 92 L 24 104" stroke="#5E654E" strokeWidth="0.6" strokeOpacity="0.6" />
          <path
            d="M 48 85 C 72 80, 84 94, 74 104 C 60 108, 50 96, 48 85 Z"
            fill="url(#eucaGrad1)"
            opacity="0.92"
          />
          <path d="M 48 85 L 72 98" stroke="#5E654E" strokeWidth="0.6" strokeOpacity="0.6" />
        </g>

        {/* Pair 3: Mid-High leaves */}
        <g>
          <path
            d="M 58 58 C 36 48, 30 64, 42 72 C 54 74, 60 64, 58 58 Z"
            fill="url(#eucaGrad1)"
            opacity="0.95"
          />
          <path d="M 58 58 L 40 68" stroke="#5E654E" strokeWidth="0.6" strokeOpacity="0.6" />
          <path
            d="M 62 52 C 86 46, 94 60, 84 70 C 72 74, 64 62, 62 52 Z"
            fill="url(#eucaGrad2)"
            opacity="0.95"
          />
          <path d="M 62 52 L 82 65" stroke="#5E654E" strokeWidth="0.6" strokeOpacity="0.6" />
        </g>

        {/* Pair 4: Terminal young leaves at tip */}
        <g>
          <path
            d="M 72 26 C 56 16, 52 28, 62 34 C 70 36, 74 30, 72 26 Z"
            fill="url(#eucaGrad2)"
          />
          <path
            d="M 74 20 C 90 14, 96 26, 88 32 C 80 34, 76 26, 74 20 Z"
            fill="url(#eucaGrad1)"
          />
          {/* Tip bud */}
          <path
            d="M 75 10 C 72 2, 78 2, 75 10 Z"
            fill="#8A9178"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * 5. ILLUSTRATED ROSE PETAL (For Falling Petals Particle System)
 */
export function RosePetalSVG({
  size = 20,
  color = "#C99D9D",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id={`petalGrad-${color}`} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF2F4" stopOpacity="0.95" />
          <stop offset="45%" stopColor={color} stopOpacity="0.85" />
          <stop offset="100%" stopColor="#8A464E" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      {/* Curved organic petal silhouette */}
      <path
        d="M 20 2 
           C 28 0, 38 8, 38 24 
           C 38 38, 28 48, 20 49 
           C 12 48, 2 38, 2 24 
           C 2 8, 12 0, 20 2 Z"
        fill={`url(#petalGrad-${color})`}
      />
      {/* Translucent rim highlight */}
      <path
        d="M 12 6 C 18 3, 26 3, 30 7"
        stroke="#FFFFFF"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

/**
 * 6. LUSH BOTANICAL CORNER ARRANGEMENT
 * Combines watercolor rose, white jasmine, baby's breath, and eucalyptus branches
 * into an art-directed luxury wedding bouquet.
 */
export function LushBotanicalArrangement({
  className = "",
  position = "top-left",
  size = 180,
  bloom = true,
}: {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  bloom?: boolean;
}) {
  const isRight = position.includes("right");
  const isBottom = position.includes("bottom");

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative select-none pointer-events-none ${className} ${
        isRight ? "-scale-x-100" : ""
      } ${isBottom ? "-scale-y-100" : ""}`}
      aria-hidden="true"
    >
      {/* Background Eucalyptus Branch (Swaying gently in breeze) */}
      <div className="absolute -top-3 -left-3 sway-left origin-bottom-left opacity-90">
        <EucalyptusBranch size={size * 0.75} />
      </div>

      {/* Secondary Eucalyptus Branch arching sideways */}
      <div className="absolute top-10 left-8 rotate-45 sway-right origin-bottom-left opacity-80">
        <EucalyptusBranch size={size * 0.55} />
      </div>

      {/* Delicate Baby's Breath sprig */}
      <div className="absolute top-2 left-12 -rotate-12 opacity-85">
        <BabysBreath size={size * 0.7} />
      </div>

      {/* Centerpiece Watercolor English Rose */}
      <div className="absolute top-6 left-5 z-10">
        <WatercolorRose size={size * 0.65} bloom={bloom} delay={0.2} />
      </div>

      {/* White Jasmine Accent 1 */}
      <div className="absolute top-1 left-2 z-15 rotate-12">
        <WhiteJasmine size={size * 0.32} bloom={bloom} delay={0.4} />
      </div>

      {/* White Jasmine Accent 2 */}
      <div className="absolute bottom-4 left-16 z-15 -rotate-25">
        <WhiteJasmine size={size * 0.28} bloom={bloom} delay={0.55} />
      </div>
    </div>
  );
}
