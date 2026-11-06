"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding.config";
import {
  EucalyptusBranch,
  WhiteJasmine,
  BabysBreath,
  WatercolorRose,
} from "../decorative/BotanicalArtwork";

function InstagramIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function CoupleSection() {
  const { groom, bride } = weddingConfig.couple;

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Section Subtitle & Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#78665A] font-medium"
      >
        Mempelai Bahagia
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-[#45483B] font-light mt-1"
      >
        Groom &amp; Bride
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-sans text-xs text-[#78665A] max-w-xs mt-3 leading-relaxed"
      >
        Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
        Izinkan kami memperkenalkan kedua mempelai:
      </motion.p>

      {/* 1. GROOM (Mempelai Pria) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center mt-8 relative"
      >
        {/* Arch Portrait Frame with Organic Botanical Elements */}
        <div className="relative w-48 sm:w-52 aspect-[3/4] p-1.5 rounded-t-[100px] rounded-b-xl bg-gradient-to-b from-[#F2EAE0] to-[#E5DCD0] shadow-md border border-[#D8C4A4]/70">
          {/* Botanical Eucalyptus Leaf Sprig on Top-Left of Groom Arch */}
          <div className="absolute -top-5 -left-5 z-20 sway-left origin-bottom-left pointer-events-none">
            <EucalyptusBranch size={75} className="-rotate-15 opacity-85" />
          </div>
          {/* Jasmine Blossom */}
          <div className="absolute -top-2 -left-2 z-25 pointer-events-none">
            <WhiteJasmine size={32} bloom={true} delay={0.3} />
          </div>

          <div className="relative w-full h-full rounded-t-[95px] rounded-b-lg overflow-hidden">
            <Image
              src={groom.photo}
              alt={groom.fullName}
              fill
              sizes="220px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2824]/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Groom Names & Family */}
        <div className="mt-5 max-w-sm">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#45483B] tracking-wide">
            {groom.fullName}
          </h3>
          <p className="font-sans text-xs text-[#78665A] mt-2 font-normal leading-relaxed">
            {groom.orderInFamily}
            <br />
            <strong className="text-[#45483B] font-medium">{groom.fatherName}</strong>
            {" & "}
            <strong className="text-[#45483B] font-medium">{groom.motherName}</strong>
          </p>

          <p className="font-serif italic text-xs text-[#78665A] mt-3 px-4 leading-relaxed">
            &ldquo;{groom.bio}&rdquo;
          </p>

          {groom.instagram && (
            <a
              href={`https://instagram.com/${groom.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${groom.shortName}`}
              className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D8C4A4]/60 text-[11px] font-sans text-[#78665A] hover:text-[#45483B] hover:border-[#A5A88D] transition-colors shadow-sm"
            >
              <InstagramIcon className="w-3 h-3 text-[#C99D9D]" />
              <span>@{groom.instagram}</span>
            </a>
          )}
        </div>
      </motion.div>

      {/* Romantic Ampersand Divider with Rosebud & Baby's Breath */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-8 flex items-center justify-center gap-3 relative"
      >
        <span className="h-[1px] w-12 bg-[#D8C4A4]/70" />
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[#F4EDE2] border border-[#D8C4A4] flex items-center justify-center shadow-inner">
            <span className="font-script text-2xl text-[#C99D9D]">
              &amp;
            </span>
          </div>
          {/* Subtle Blooming Rosebud behind the ampersand circle */}
          <div className="absolute -top-3 -right-3 pointer-events-none opacity-80">
            <WatercolorRose size={36} bloom={true} delay={0.4} />
          </div>
        </div>
        <span className="h-[1px] w-12 bg-[#D8C4A4]/70" />
      </motion.div>

      {/* 2. BRIDE (Mempelai Wanita) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center relative"
      >
        {/* Arch Portrait Frame with Organic Botanical Elements */}
        <div className="relative w-48 sm:w-52 aspect-[3/4] p-1.5 rounded-t-[100px] rounded-b-xl bg-gradient-to-b from-[#F2EAE0] to-[#E5DCD0] shadow-md border border-[#D8C4A4]/70">
          {/* Botanical Eucalyptus Leaf Sprig on Top-Right of Bride Arch */}
          <div className="absolute -top-5 -right-5 z-20 sway-right origin-bottom-right pointer-events-none -scale-x-100">
            <EucalyptusBranch size={75} className="-rotate-15 opacity-85" />
          </div>
          {/* Jasmine Blossom */}
          <div className="absolute -top-2 -right-2 z-25 pointer-events-none">
            <WhiteJasmine size={32} bloom={true} delay={0.35} />
          </div>

          <div className="relative w-full h-full rounded-t-[95px] rounded-b-lg overflow-hidden">
            <Image
              src={bride.photo}
              alt={bride.fullName}
              fill
              sizes="220px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2824]/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Bride Names & Family */}
        <div className="mt-5 max-w-sm">
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#45483B] tracking-wide">
            {bride.fullName}
          </h3>
          <p className="font-sans text-xs text-[#78665A] mt-2 font-normal leading-relaxed">
            {bride.orderInFamily}
            <br />
            <strong className="text-[#45483B] font-medium">{bride.fatherName}</strong>
            {" & "}
            <strong className="text-[#45483B] font-medium">{bride.motherName}</strong>
          </p>

          <p className="font-serif italic text-xs text-[#78665A] mt-3 px-4 leading-relaxed">
            &ldquo;{bride.bio}&rdquo;
          </p>

          {bride.instagram && (
            <a
              href={`https://instagram.com/${bride.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${bride.shortName}`}
              className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#D8C4A4]/60 text-[11px] font-sans text-[#78665A] hover:text-[#45483B] hover:border-[#A5A88D] transition-colors shadow-sm"
            >
              <InstagramIcon className="w-3 h-3 text-[#C99D9D]" />
              <span>@{bride.instagram}</span>
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
