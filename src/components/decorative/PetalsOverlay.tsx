"use client";

import React, { useEffect, useState } from "react";
import { RosePetalSVG } from "./BotanicalArtwork";

interface PetalParticle {
  id: number;
  left: number; // percentage (0 - 95%)
  size: number; // px
  duration: number; // seconds (12s - 22s)
  delay: number; // seconds
  startRotateZ: number; // deg
  endRotateZ: number; // deg
  type: "rose-blush" | "rose-dusty" | "jasmine-ivory" | "sage-leaflet";
  driftDistance: number; // px horizontal sway
  blur: number; // px
  opacity: number;
}

export function PetalsOverlay() {
  const [particles, setParticles] = useState<PetalParticle[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const types: PetalParticle["type"][] = [
      "rose-blush",
      "rose-dusty",
      "jasmine-ivory",
      "rose-blush",
      "sage-leaflet",
    ];

    // Art-directed 16 falling botanical particles for fluid 60fps compositor performance
    const count = 16;
    const generated: PetalParticle[] = Array.from({ length: count }, (_, i) => {
      const type = types[i % types.length];
      const isForeground = i % 4 === 0;
      const isBackground = i % 3 === 0;

      return {
        id: i,
        left: Math.random() * 94,
        size: isForeground ? Math.floor(Math.random() * 6) + 22 : isBackground ? Math.floor(Math.random() * 4) + 12 : Math.floor(Math.random() * 6) + 16,
        duration: Math.random() * 8 + 12, // 12s to 20s gentle drift
        delay: Math.random() * 10,
        startRotateZ: Math.floor(Math.random() * 180),
        endRotateZ: Math.floor(Math.random() * 360) + 180,
        type,
        driftDistance: (Math.random() * 50 + 20) * (i % 2 === 0 ? 1 : -1),
        blur: isBackground ? 1.2 : 0,
        opacity: isBackground ? 0.45 : isForeground ? 0.9 : 0.75,
      };
    });

    setParticles(generated);
  }, []);

  if (reducedMotion || particles.length === 0) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-25 select-none"
      aria-hidden="true"
    >
      {particles.map((p) => {
        const petalColor =
          p.type === "rose-blush"
            ? "#D68E94"
            : p.type === "rose-dusty"
            ? "#BA666E"
            : p.type === "jasmine-ivory"
            ? "#F8F4EC"
            : "#9CA38D";

        return (
          <div
            key={p.id}
            className="absolute block will-change-transform"
            style={{
              left: `${p.left}%`,
              top: "-50px",
              width: `${p.size}px`,
              height: `${p.size * 1.3}px`,
              opacity: p.opacity,
              filter: p.blur > 0 ? `blur(${p.blur}px)` : undefined,
              animation: `botanicalPetalFall ${p.duration}s infinite linear`,
              animationDelay: `${p.delay}s`,
              transform: `rotate(${p.startRotateZ}deg)`,
              // Custom CSS property for dynamic sway distance
              ["--sway-x" as string]: `${p.driftDistance}px`,
            }}
          >
            {p.type === "jasmine-ivory" ? (
              // Jasmine delicate petal
              <svg
                viewBox="0 0 30 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(120,102,90,0.15)]"
              >
                <path
                  d="M 15 2 C 22 0, 28 10, 27 22 C 26 34, 18 38, 15 39 C 12 38, 4 34, 3 22 C 2 10, 8 0, 15 2 Z"
                  fill="#FFFDF9"
                  stroke="#E8DEC8"
                  strokeWidth="0.5"
                />
                <circle cx="15" cy="36" r="1.5" fill="#DFBF6A" opacity="0.8" />
              </svg>
            ) : p.type === "sage-leaflet" ? (
              // Eucalyptus leaflet
              <svg
                viewBox="0 0 25 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(69,72,59,0.15)]"
              >
                <path
                  d="M 12 2 C 20 5, 23 18, 18 28 C 15 33, 12 34, 12 34 C 12 34, 9 33, 6 28 C 1 18, 4 5, 12 2 Z"
                  fill="#9CA38D"
                  opacity="0.9"
                />
                <path d="M 12 4 L 12 32" stroke="#6C735B" strokeWidth="0.6" strokeOpacity="0.7" />
              </svg>
            ) : (
              // Realistic illustrated watercolor rose petal
              <RosePetalSVG
                size={p.size}
                color={petalColor}
                className="w-full h-full drop-shadow-[0_2px_6px_rgba(100,50,55,0.2)]"
              />
            )}
          </div>
        );
      })}

      <style jsx global>{`
        @keyframes botanicalPetalFall {
          0% {
            transform: translateY(-40px) translateX(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.9);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          30% {
            transform: translateY(30vh) translateX(var(--sway-x, 30px)) rotateX(80deg) rotateY(120deg) rotateZ(90deg) scale(1);
          }
          60% {
            transform: translateY(60vh) translateX(calc(var(--sway-x, 30px) * -0.7)) rotateX(190deg) rotateY(240deg) rotateZ(180deg) scale(0.95);
          }
          85% {
            opacity: 0.75;
          }
          100% {
            transform: translateY(105vh) translateX(var(--sway-x, 30px)) rotateX(360deg) rotateY(360deg) rotateZ(280deg) scale(0.9);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
