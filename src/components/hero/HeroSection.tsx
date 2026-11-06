"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";
import { FloralDivider, RoyalMonogramCrest } from "../decorative/BotanicalFlourish";
import { FloralEntrance, BotanicalHeaderArch } from "../decorative/FloralEntrance";
import { EucalyptusBranch, WhiteJasmine, BabysBreath } from "../decorative/BotanicalArtwork";
import { RomanticLoveWatermark } from "../decorative/WeddingLovePattern";

export function HeroSection() {
  return (
    <section className="relative w-full pt-12 pb-16 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* 1. Animated Botanical Entrance Corners (Blooming Roses, Swaying Eucalyptus, Jasmines) */}
      <FloralEntrance
        position="top-left"
        size={135}
        className="absolute -top-3 -left-3 z-15"
      />
      <FloralEntrance
        position="top-right"
        size={135}
        className="absolute -top-3 -right-3 z-15"
      />

      {/* Royal Crest Monogram */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="z-10"
      >
        <RoyalMonogramCrest monogram={weddingConfig.couple.monogram} />
      </motion.div>

      {/* Romantic Botanical Love Crest Watermark behind couple names */}
      <RomanticLoveWatermark
        size={310}
        opacity={0.12}
        className="absolute top-16 left-1/2 -translate-x-1/2 z-0"
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-sans text-[11px] uppercase tracking-[0.35em] text-[#78665A] font-medium mt-4 z-10"
      >
        Walimatul &apos;Ursy
      </motion.p>

      {/* Couple Grand Typography */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-3 z-10"
      >
        <h1 className="font-serif text-4xl sm:text-5xl text-[#45483B] font-light tracking-wide leading-tight">
          {weddingConfig.couple.groom.shortName}
        </h1>
        <div className="flex items-center justify-center my-1">
          <span className="h-[1px] w-10 bg-[#D8C4A4]" />
          <span className="font-script text-3xl sm:text-4xl text-[#C99D9D] px-3 font-normal">
            &amp;
          </span>
          <span className="h-[1px] w-10 bg-[#D8C4A4]" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#45483B] font-light tracking-wide leading-tight">
          {weddingConfig.couple.bride.shortName}
        </h2>
      </motion.div>

      {/* Arch Portrait Composition with Botanical Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="relative mt-8 mb-6 w-64 sm:w-72 aspect-[3/4] p-2 rounded-t-[120px] rounded-b-2xl bg-gradient-to-b from-[#F4EDE2] to-[#EFE7DA] shadow-xl border border-[#D8C4A4]/60 z-10"
      >
        {/* Swaying Eucalyptus Sprig on the left side of portrait */}
        <div className="absolute -left-6 bottom-8 z-20 sway-left origin-bottom-left pointer-events-none">
          <EucalyptusBranch size={90} className="-rotate-20 opacity-90" />
        </div>

        {/* Blooming White Jasmine Blossom & Baby's Breath on right side of portrait */}
        <div className="absolute -right-5 bottom-12 z-20 pointer-events-none">
          <div className="sway-right origin-bottom-right">
            <BabysBreath size={75} className="opacity-85" />
          </div>
          <div className="absolute top-2 right-1">
            <WhiteJasmine size={36} bloom={true} delay={0.6} />
          </div>
        </div>

        {/* Inner double border frame */}
        <div className="relative w-full h-full rounded-t-[115px] rounded-b-xl overflow-hidden border border-[#D8C4A4]/40">
          <Image
            src="https://images.unsplash.com/photo-1650377509454-1bbd8392e122?auto=format&fit=crop&w=900&q=85"
            alt={`${weddingConfig.couple.groom.shortName} & ${weddingConfig.couple.bride.shortName}`}
            fill
            sizes="(max-width: 640px) 280px, 320px"
            priority
            className="object-cover object-center"
          />
          {/* Subtle warm photo vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D2824]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Gold Sparkle Accent */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FAF6F0] border border-[#C5A880]/60 shadow-md flex items-center gap-1.5 whitespace-nowrap z-25">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="font-serif text-xs text-[#45483B] tracking-wider uppercase">
            12 . 12 . 2026
          </span>
        </div>
      </motion.div>

      {/* Date & Location Details */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="mt-4 flex flex-col items-center gap-1 text-[#78665A] z-10"
      >
        <p className="font-serif text-lg sm:text-xl font-medium text-[#45483B]">
          {weddingConfig.date.dayName}, {weddingConfig.date.fullDate}
        </p>
        <p className="font-sans text-xs tracking-wider flex items-center gap-1.5 text-[#78665A]">
          <MapPin className="w-3.5 h-3.5 text-[#A5A88D]" />
          <span>Plataran Dharmawangsa, Jakarta Selatan</span>
        </p>
      </motion.div>

      {/* Botanical Header Arch */}
      <BotanicalHeaderArch className="my-6" />

      {/* Romantic Quranic Verse / Wedding Quote */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="relative max-w-sm px-6 py-6 rounded-2xl bg-[#F4EDE2]/70 border border-[#D8C4A4]/40 text-center z-10"
      >
        {/* Subtle quotation mark */}
        <span className="font-serif text-4xl text-[#C99D9D]/40 leading-none select-none">
          “
        </span>
        <p className="font-serif italic text-sm sm:text-base text-[#45483B] leading-relaxed -mt-2">
          {weddingConfig.quote.text}
        </p>
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#78665A] mt-3">
          — {weddingConfig.quote.source} —
        </p>
      </motion.div>
    </section>
  );
}
