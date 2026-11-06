"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen, Sparkles } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";
import { FloralDivider } from "../decorative/BotanicalFlourish";
import {
  WatercolorRose,
  WhiteJasmine,
  BabysBreath,
  EucalyptusBranch,
  RosePetalSVG,
} from "../decorative/BotanicalArtwork";
import { WaxSeal } from "./WaxSeal";
import { sfx } from "@/lib/sound";
import { WeddingLovePattern } from "../decorative/WeddingLovePattern";

interface EnvelopeIntroProps {
  guestName: string;
  onOpen: () => void;
}

export function EnvelopeIntro({ guestName, onOpen }: EnvelopeIntroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenClick = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    // Play tactile wax seal break and paper unfold sound effect
    sfx.playWaxBreak();

    // Orchestrated opening sequence:
    // 0ms: Wax seal breaks, flowers bloom outward
    // 300ms: Petals burst around envelope
    // 1200ms: Smooth transition into main invitation
    setTimeout(() => {
      setIsOpened(true);
      onOpen();
    }, 1300);
  };

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, scale: 1.02, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#1C1A18]"
        >
          {/* Subtle textured ambient background with enchanted garden glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(69,72,59,0.4)_0%,_rgba(28,26,24,0.96)_100%)]" />
          
          {/* Dark Romantic Botanical Love Damask Pattern */}
          <WeddingLovePattern variant="dark" opacity={0.4} />

          {/* BACKGROUND BOTANICAL ENCHANTED BURST (Surrounding the Envelope) */}
          <motion.div
            initial={{ opacity: 0.8, scale: 0.95 }}
            animate={
              isOpening
                ? { opacity: 1, scale: 1.12, transition: { duration: 1.1, ease: "easeOut" } }
                : { opacity: 0.85, scale: 1 }
            }
            className="absolute inset-0 pointer-events-none flex items-center justify-center select-none overflow-hidden"
          >
            {/* Top-Left Floral Cluster */}
            <div className="absolute -top-6 -left-6 sm:top-4 sm:left-4 z-20">
              <div className="sway-left origin-bottom-left">
                <EucalyptusBranch size={160} />
              </div>
              <div className="absolute top-8 left-8">
                <WatercolorRose size={100} bloom={isOpening} delay={0.1} />
              </div>
              <div className="absolute top-2 left-4 rotate-12">
                <WhiteJasmine size={46} bloom={isOpening} delay={0.25} />
              </div>
              <div className="absolute top-16 left-20">
                <BabysBreath size={90} />
              </div>
            </div>

            {/* Top-Right Floral Cluster */}
            <div className="absolute -top-6 -right-6 sm:top-4 sm:right-4 z-20 -scale-x-100">
              <div className="sway-left origin-bottom-left">
                <EucalyptusBranch size={160} />
              </div>
              <div className="absolute top-8 left-8">
                <WatercolorRose size={100} bloom={isOpening} delay={0.15} />
              </div>
              <div className="absolute top-2 left-4 rotate-12">
                <WhiteJasmine size={46} bloom={isOpening} delay={0.3} />
              </div>
              <div className="absolute top-16 left-20">
                <BabysBreath size={90} />
              </div>
            </div>

            {/* Bottom-Left Floral Cluster */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-4 sm:left-4 z-20 -scale-y-100">
              <div className="sway-left origin-bottom-left">
                <EucalyptusBranch size={150} />
              </div>
              <div className="absolute top-8 left-8">
                <WatercolorRose size={90} bloom={isOpening} delay={0.2} />
              </div>
              <div className="absolute top-2 left-4 rotate-12">
                <WhiteJasmine size={42} bloom={isOpening} delay={0.35} />
              </div>
            </div>

            {/* Bottom-Right Floral Cluster */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-4 sm:right-4 z-20 -scale-x-100 -scale-y-100">
              <div className="sway-left origin-bottom-left">
                <EucalyptusBranch size={150} />
              </div>
              <div className="absolute top-8 left-8">
                <WatercolorRose size={90} bloom={isOpening} delay={0.25} />
              </div>
              <div className="absolute top-2 left-4 rotate-12">
                <WhiteJasmine size={42} bloom={isOpening} delay={0.4} />
              </div>
            </div>
          </motion.div>

          {/* BURSTING PETALS ON UNSEALING */}
          {isOpening && (
            <div className="absolute inset-0 pointer-events-none z-30 select-none overflow-hidden">
              {[
                { x: -140, y: -120, r: 45, d: 0.1 },
                { x: 150, y: -110, r: -60, d: 0.15 },
                { x: -160, y: 100, r: 85, d: 0.2 },
                { x: 170, y: 120, r: -95, d: 0.25 },
                { x: 0, y: -180, r: 15, d: 0.1 },
                { x: 0, y: 190, r: -15, d: 0.2 },
                { x: -180, y: 0, r: 110, d: 0.15 },
                { x: 190, y: 0, r: -110, d: 0.2 },
              ].map((petal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 0.4, x: 0, y: 0, rotate: 0 }}
                  animate={{
                    opacity: 0,
                    scale: 1.2,
                    x: petal.x,
                    y: petal.y,
                    rotate: petal.r,
                  }}
                  transition={{ duration: 1.1, delay: petal.d, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <RosePetalSVG size={26} color="#C99D9D" />
                </motion.div>
              ))}
            </div>
          )}

          {/* MAIN ENVELOPE STATIONERY COMPOSITION */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={
              isOpening
                ? { scale: 1.03, y: -10, opacity: 1, transition: { duration: 0.9, ease: "easeInOut" } }
                : { scale: 1, opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }
            className="relative w-full max-w-md sm:max-w-lg aspect-[3/4.2] max-h-[92vh] flex flex-col items-center justify-between p-6 sm:p-10 rounded-2xl bg-[#F8F4EC] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_0_0_1px_rgba(216,196,164,0.4)] paper-texture overflow-hidden z-20"
          >
            {/* Romantic Botanical Love Damask Stationery Pattern */}
            <WeddingLovePattern variant="paper" opacity={0.65} className="z-0 mix-blend-multiply" />

            {/* Outer Double Gold Hairline Border */}
            <div className="absolute inset-3 sm:inset-4 border border-[#C5A880]/40 rounded-xl pointer-events-none">
              <div className="absolute inset-1 border border-[#C5A880]/20 rounded-lg" />
            </div>

            {/* Inner Corner Botanical Sprigs */}
            <div className="absolute top-2 left-2 z-10 opacity-70">
              <WhiteJasmine size={32} />
            </div>
            <div className="absolute top-2 right-2 z-10 opacity-70 -scale-x-100">
              <WhiteJasmine size={32} />
            </div>
            <div className="absolute bottom-2 left-2 z-10 opacity-70 -scale-y-100">
              <WhiteJasmine size={32} />
            </div>
            <div className="absolute bottom-2 right-2 z-10 opacity-70 -scale-x-100 -scale-y-100">
              <WhiteJasmine size={32} />
            </div>

            {/* Top Header: The Wedding Announcement */}
            <div className="relative z-10 text-center pt-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#78665A] font-medium"
              >
                The Wedding Of
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-3xl sm:text-4xl text-[#45483B] mt-2 font-normal tracking-wide"
              >
                {weddingConfig.couple.groom.shortName}{" "}
                <span className="font-script text-2xl sm:text-3xl text-[#C99D9D] font-normal mx-1">
                  &amp;
                </span>{" "}
                {weddingConfig.couple.bride.shortName}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-serif italic text-xs sm:text-sm text-[#78665A] mt-1"
              >
                {weddingConfig.date.dayName}, {weddingConfig.date.fullDate}
              </motion.p>
            </div>

            {/* Middle: Wax Seal Emblem & Royal Monogram */}
            <div className="relative z-10 my-auto flex flex-col items-center">
              <motion.div
                animate={isOpening ? { scale: [1, 1.25, 0.7], opacity: [1, 1, 0] } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <WaxSeal
                  monogram={weddingConfig.couple.monogram}
                  onClick={handleOpenClick}
                  isOpen={isOpening}
                />
              </motion.div>

              <FloralDivider className="my-2 opacity-80" />
            </div>

            {/* Bottom: Guest Personalization & Buka Undangan CTA */}
            <div className="relative z-10 w-full text-center pb-2 flex flex-col items-center">
              <div className="w-full max-w-[280px] sm:max-w-xs bg-[#F4EDE2]/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-[#D8C4A4]/50 shadow-sm mb-4">
                <p className="font-sans text-[11px] text-[#78665A] tracking-wider uppercase">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <p className="font-serif text-lg sm:text-xl font-medium text-[#45483B] mt-1 truncate">
                  {guestName || "Tamu Undangan"}
                </p>
                <p className="text-[10px] text-[#78665A]/80 italic mt-0.5">
                  Mohon maaf bila ada kesalahan penulisan nama/gelar
                </p>
              </div>

              {/* Prominent "Buka Undangan" Button */}
              <motion.button
                type="button"
                onClick={handleOpenClick}
                disabled={isOpening}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#45483B] text-[#F8F4EC] font-sans text-sm tracking-widest uppercase font-medium shadow-lg hover:bg-[#34372C] transition-all border border-[#D8C4A4]/40 cursor-pointer group"
              >
                <MailOpen className="w-4 h-4 text-[#D8C4A4] group-hover:rotate-12 transition-transform" />
                <span>{isOpening ? "Membuka Undangan..." : "Buka Undangan"}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D8C4A4] opacity-80 animate-pulse" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
