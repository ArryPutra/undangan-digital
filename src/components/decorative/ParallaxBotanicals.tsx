"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  EucalyptusBranch,
  WhiteJasmine,
  BabysBreath,
  WatercolorRose,
} from "./BotanicalArtwork";

export function ParallaxBotanicals() {
  const { scrollY } = useScroll();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setReducedMotion(true);
  }, []);

  // Parallax subtle vertical offsets for varied depth
  const yLayer1 = useTransform(scrollY, [0, 3000], [0, -120]);
  const yLayer2 = useTransform(scrollY, [0, 3000], [0, 90]);
  const yLayer3 = useTransform(scrollY, [0, 3000], [0, -160]);
  const yLayer4 = useTransform(scrollY, [0, 3000], [0, 110]);

  // Subtle rotation shifts during scroll
  const rotate1 = useTransform(scrollY, [0, 3000], [0, 14]);
  const rotate2 = useTransform(scrollY, [0, 3000], [0, -18]);

  if (reducedMotion) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. Left upper margin: Soft eucalyptus sprig with jasmine */}
      <motion.div
        style={{ y: yLayer1, rotate: rotate1 }}
        className="absolute top-[18%] -left-8 sm:-left-12 opacity-60 filter blur-[0.3px]"
      >
        <div className="sway-left origin-bottom-left">
          <EucalyptusBranch size={110} />
        </div>
        <div className="absolute top-8 left-6 rotate-12">
          <WhiteJasmine size={34} />
        </div>
      </motion.div>

      {/* 2. Right upper margin: Baby's breath and miniature rose bud */}
      <motion.div
        style={{ y: yLayer2, rotate: rotate2 }}
        className="absolute top-[32%] -right-7 sm:-right-10 opacity-55 filter blur-[0.4px] -scale-x-100"
      >
        <div className="sway-right origin-bottom-right">
          <BabysBreath size={95} />
        </div>
        <div className="absolute top-4 left-6">
          <WatercolorRose size={48} />
        </div>
      </motion.div>

      {/* 3. Left mid-scroll margin: Floating jasmine and eucalyptus leaf cluster */}
      <motion.div
        style={{ y: yLayer3 }}
        className="absolute top-[52%] -left-6 sm:-left-9 opacity-50 filter blur-[0.5px]"
      >
        <div className="sway-left origin-bottom-left rotate-45">
          <EucalyptusBranch size={100} />
        </div>
        <div className="absolute top-12 left-8">
          <WhiteJasmine size={30} />
        </div>
      </motion.div>

      {/* 4. Right lower margin: Gentle eucalyptus with baby's breath */}
      <motion.div
        style={{ y: yLayer4 }}
        className="absolute top-[72%] -right-8 sm:-right-12 opacity-55 filter blur-[0.3px] -scale-x-100"
      >
        <div className="sway-right origin-bottom-right">
          <EucalyptusBranch size={120} />
        </div>
        <div className="absolute top-10 left-8">
          <BabysBreath size={85} />
        </div>
      </motion.div>

      {/* 5. Left bottom near closing: Soft blush rosebud */}
      <motion.div
        style={{ y: yLayer1 }}
        className="absolute top-[88%] -left-5 opacity-50"
      >
        <WatercolorRose size={52} />
      </motion.div>
    </div>
  );
}

