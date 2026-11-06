"use client";

import React from "react";
import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";
import { RoyalMonogramCrest } from "../decorative/BotanicalFlourish";
import { FloralEntrance } from "../decorative/FloralEntrance";
import {
  WatercolorRose,
  WhiteJasmine,
  BabysBreath,
  EucalyptusBranch,
} from "../decorative/BotanicalArtwork";
import { RomanticLoveWatermark } from "../decorative/WeddingLovePattern";

interface ClosingSectionProps {
  guestName?: string;
}

export function ClosingSection({ guestName = "" }: ClosingSectionProps) {
  const { closingMessage, couple } = weddingConfig;

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo! Kami bermaksud mengundang Bapak/Ibu/Saudara/i ke pernikahan ${couple.groom.shortName} & ${couple.bride.shortName}.\n\nSilakan buka tautan undangan digital kami berikut:\n${window.location.origin}${guestName ? `?to=${encodeURIComponent(guestName)}` : ""}\n\nTerima kasih atas doa restunya!`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <section className="relative w-full pt-12 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Bottom Botanical Entrance Corners */}
      <FloralEntrance
        position="bottom-left"
        size={130}
        className="absolute -bottom-2 -left-2 z-10"
      />
      <FloralEntrance
        position="bottom-right"
        size={130}
        className="absolute -bottom-2 -right-2 z-10"
      />

      {/* Royal Crest */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="z-10"
      >
        <RoyalMonogramCrest monogram={couple.monogram} />
      </motion.div>

      {/* Romantic Love Watermark */}
      <RomanticLoveWatermark
        size={280}
        opacity={0.1}
        className="absolute top-20 left-1/2 -translate-x-1/2 z-0"
      />

      {/* Center Botanical Floral Emblem Bouquet */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative my-4 flex items-center justify-center pointer-events-none select-none z-10"
      >
        {/* Left swaying branch */}
        <div className="sway-left origin-bottom-left -rotate-45 opacity-80">
          <EucalyptusBranch size={70} />
        </div>

        {/* Center blooming rose */}
        <div className="relative mx-1 z-10">
          <WatercolorRose size={65} bloom={true} delay={0.2} />
        </div>

        {/* Jasmine accent */}
        <div className="absolute -top-1 -right-2 z-20">
          <WhiteJasmine size={32} bloom={true} delay={0.4} />
        </div>

        {/* Right swaying branch */}
        <div className="sway-right origin-bottom-right rotate-45 -scale-x-100 opacity-80">
          <EucalyptusBranch size={70} />
        </div>
      </motion.div>

      {/* Thank you Lead */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#78665A] font-medium mt-2 z-10"
      >
        {closingMessage.lead}
      </motion.p>

      {/* Body Narrative */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="font-serif italic text-sm sm:text-base text-[#45483B] max-w-sm mt-3 leading-relaxed z-10"
      >
        &ldquo;{closingMessage.body}&rdquo;
      </motion.p>

      {/* Salutation & Signatures */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center mt-6 z-10"
      >
        <p className="font-sans text-xs text-[#78665A] uppercase tracking-wider font-medium">
          {closingMessage.salutation}
        </p>

        <h3 className="font-script text-4xl sm:text-5xl text-[#45483B] mt-2 font-normal">
          {couple.groom.shortName} &amp; {couple.bride.shortName}
        </h3>

        <p className="font-sans text-[11px] text-[#78665A] mt-2 tracking-widest uppercase">
          Beserta Seluruh Keluarga Besar
        </p>
      </motion.div>

      {/* Share Invitation Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-8 z-10"
      >
        <button
          type="button"
          onClick={handleShareWhatsApp}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF6F0] border border-[#D8C4A4] text-xs font-sans text-[#45483B] uppercase tracking-wider font-medium hover:bg-[#F4EDE2] transition-all cursor-pointer shadow-sm group"
        >
          <Share2 className="w-3.5 h-3.5 text-[#A5A88D] group-hover:rotate-12 transition-transform" />
          <span>Bagikan Undangan (WhatsApp)</span>
        </button>
      </motion.div>

      {/* Footer copyright */}
      <div className="mt-14 pt-4 border-t border-[#D8C4A4]/40 w-full max-w-xs text-center z-10">
        <p className="font-serif italic text-xs text-[#78665A]/80">
          The Wedding Celebration of {couple.groom.shortName} &amp; {couple.bride.shortName}
        </p>
        <p className="font-sans text-[10px] text-[#78665A]/60 mt-1 uppercase tracking-widest">
          © 2026 • Crafted with Love &amp; Devotion
        </p>
      </div>
    </section>
  );
}
