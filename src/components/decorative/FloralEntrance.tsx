"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  WatercolorRose,
  WhiteJasmine,
  BabysBreath,
  EucalyptusBranch,
} from "./BotanicalArtwork";

interface FloralEntranceProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-arch" | "side-vine";
  className?: string;
  size?: number;
  showRose?: boolean;
  showJasmine?: boolean;
  showEucalyptus?: boolean;
  showBabysBreath?: boolean;
}

export function FloralEntrance({
  position = "top-left",
  className = "",
  size = 140,
  showRose = true,
  showJasmine = true,
  showEucalyptus = true,
  showBabysBreath = true,
}: FloralEntranceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const isRight = position.includes("right");
  const isBottom = position.includes("bottom");

  // Container reveal variant
  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      x: isRight ? 25 : -25,
      y: isBottom ? 25 : -25,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.1,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const leafVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, rotate: isRight ? 15 : -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      style={{ width: size, height: size }}
      className={`relative select-none pointer-events-none ${className} ${
        isRight ? "-scale-x-100" : ""
      } ${isBottom ? "-scale-y-100" : ""}`}
      aria-hidden="true"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-full h-full"
      >
        {/* 1. Eucalyptus Branch with Gentle Natural Breeze Sway */}
        {showEucalyptus && (
          <motion.div
            variants={leafVariants}
            className="absolute -top-2 -left-2 sway-left origin-bottom-left"
          >
            <EucalyptusBranch size={size * 0.8} />
          </motion.div>
        )}

        {/* 2. Baby's Breath delicate sprays */}
        {showBabysBreath && (
          <motion.div
            variants={leafVariants}
            className="absolute top-2 left-10 -rotate-12 opacity-85"
          >
            <BabysBreath size={size * 0.7} />
          </motion.div>
        )}

        {/* 3. Main Blooming Watercolor Rose */}
        {showRose && (
          <div className="absolute top-4 left-4 z-10">
            <WatercolorRose
              size={size * 0.68}
              bloom={isInView}
              delay={0.2}
              duration={1.4}
            />
          </div>
        )}

        {/* 4. Delicate White Jasmine Star Blossom */}
        {showJasmine && (
          <div className="absolute top-1 left-2 z-20 rotate-15">
            <WhiteJasmine
              size={size * 0.35}
              bloom={isInView}
              delay={0.4}
              duration={1.2}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}

/**
 * Enchanted Botanical Header Arch
 * Perfectly frames couple names or section headers with symmetrical blooming vines.
 */
export function BotanicalHeaderArch({
  className = "",
}: {
  className?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-center w-full max-w-[340px] my-3 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Left botanical garland */}
      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.8 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center gap-1"
      >
        <div className="sway-left origin-bottom-left">
          <EucalyptusBranch size={70} className="-rotate-60" />
        </div>
        <WhiteJasmine size={36} bloom={isInView} delay={0.2} />
        <BabysBreath size={50} className="-scale-y-100 -rotate-30" />
      </motion.div>

      {/* Centerpiece Rose Blossom */}
      <div className="relative mx-1 z-10">
        <WatercolorRose size={64} bloom={isInView} delay={0.35} />
      </div>

      {/* Right botanical garland */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.8 }}
        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex items-center gap-1 -scale-x-100"
      >
        <div className="sway-left origin-bottom-left">
          <EucalyptusBranch size={70} className="-rotate-60" />
        </div>
        <WhiteJasmine size={36} bloom={isInView} delay={0.25} />
        <BabysBreath size={50} className="-scale-y-100 -rotate-30" />
      </motion.div>
    </div>
  );
}
