"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Navigation, Shirt } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";
import { FloralDivider } from "../decorative/BotanicalFlourish";
import { WhiteJasmine, BabysBreath, EucalyptusBranch } from "../decorative/BotanicalArtwork";

export function EventsSection() {
  const { ceremony, reception } = weddingConfig.events;

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Subtitle & Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#78665A] font-medium"
      >
        Waktu &amp; Tempat
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-[#45483B] font-light mt-1"
      >
        Wedding Events
      </motion.h2>

      <FloralDivider className="my-6 opacity-75" />

      <div className="w-full flex flex-col gap-8 max-w-sm">
        {/* CARD 1: AKAD NIKAH */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative p-6 sm:p-7 rounded-2xl bg-[#FAF6F0] border border-[#D8C4A4]/70 shadow-sm flex flex-col items-center overflow-hidden"
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 border border-[#D8C4A4]/30 rounded-xl pointer-events-none" />

          {/* Top-Right Jasmine Botanical Accent */}
          <div className="absolute -top-1 -right-1 z-10 pointer-events-none opacity-85">
            <WhiteJasmine size={36} bloom={true} delay={0.2} />
          </div>

          {/* Event Badge */}
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A5A88D] font-semibold px-3 py-1 bg-[#F4EDE2] rounded-full border border-[#D8C4A4]/40">
            {ceremony.subtitle}
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#45483B] mt-3">
            {ceremony.title}
          </h3>

          {/* Date & Time */}
          <div className="mt-4 flex flex-col gap-2 w-full text-xs text-[#78665A] border-y border-[#D8C4A4]/40 py-3">
            <p className="flex items-center justify-center gap-2 font-medium text-[#45483B]">
              <Calendar className="w-3.5 h-3.5 text-[#C99D9D]" />
              <span>{ceremony.date}</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C99D9D]" />
              <span>{ceremony.time}</span>
            </p>
          </div>

          {/* Venue & Address */}
          <div className="mt-4 text-xs text-[#78665A]">
            <p className="font-serif text-base font-semibold text-[#45483B]">
              {ceremony.venue}
            </p>
            <p className="mt-1 text-[#78665A] leading-relaxed max-w-xs">
              {ceremony.address}
            </p>
          </div>

          {/* Dresscode */}
          {ceremony.dressCode && (
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4EDE2]/70 text-[11px] text-[#78665A]">
              <Shirt className="w-3 h-3 text-[#A5A88D]" />
              <span>Dress Code: {ceremony.dressCode}</span>
            </div>
          )}

          {/* Google Maps Button */}
          <a
            href={ceremony.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#45483B] text-[#F8F4EC] text-xs font-sans uppercase tracking-wider font-medium hover:bg-[#323528] transition-all shadow-sm group"
          >
            <Navigation className="w-3.5 h-3.5 text-[#D8C4A4] group-hover:scale-110 transition-transform" />
            <span>Petunjuk Lokasi (Google Maps)</span>
          </a>
        </motion.div>

        {/* CARD 2: RESEPSI PERNIKAHAN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative p-6 sm:p-7 rounded-2xl bg-[#FAF6F0] border border-[#D8C4A4]/70 shadow-sm flex flex-col items-center overflow-hidden"
        >
          {/* Inner hairline border */}
          <div className="absolute inset-2 border border-[#D8C4A4]/30 rounded-xl pointer-events-none" />

          {/* Top-Left Jasmine Botanical Accent */}
          <div className="absolute -top-1 -left-1 z-10 pointer-events-none opacity-85 -scale-x-100">
            <WhiteJasmine size={36} bloom={true} delay={0.3} />
          </div>

          {/* Event Badge */}
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A5A88D] font-semibold px-3 py-1 bg-[#F4EDE2] rounded-full border border-[#D8C4A4]/40">
            {reception.subtitle}
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#45483B] mt-3">
            {reception.title}
          </h3>

          {/* Date & Time */}
          <div className="mt-4 flex flex-col gap-2 w-full text-xs text-[#78665A] border-y border-[#D8C4A4]/40 py-3">
            <p className="flex items-center justify-center gap-2 font-medium text-[#45483B]">
              <Calendar className="w-3.5 h-3.5 text-[#C99D9D]" />
              <span>{reception.date}</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C99D9D]" />
              <span>{reception.time}</span>
            </p>
          </div>

          {/* Venue & Address */}
          <div className="mt-4 text-xs text-[#78665A]">
            <p className="font-serif text-base font-semibold text-[#45483B]">
              {reception.venue}
            </p>
            <p className="mt-1 text-[#78665A] leading-relaxed max-w-xs">
              {reception.address}
            </p>
          </div>

          {/* Dresscode */}
          {reception.dressCode && (
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4EDE2]/70 text-[11px] text-[#78665A]">
              <Shirt className="w-3 h-3 text-[#A5A88D]" />
              <span>Dress Code: {reception.dressCode}</span>
            </div>
          )}

          {/* Google Maps Button */}
          <a
            href={reception.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#45483B] text-[#F8F4EC] text-xs font-sans uppercase tracking-wider font-medium hover:bg-[#323528] transition-all shadow-sm group"
          >
            <Navigation className="w-3.5 h-3.5 text-[#D8C4A4] group-hover:scale-110 transition-transform" />
            <span>Petunjuk Lokasi (Google Maps)</span>
          </a>
        </motion.div>
      </div>

      {/* Embedded Google Maps Preview */}
      {ceremony.mapsEmbedUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 w-full max-w-sm rounded-2xl overflow-hidden border border-[#D8C4A4]/60 shadow-md"
        >
          <iframe
            src={ceremony.mapsEmbedUrl}
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi Pernikahan"
            className="grayscale contrast-[0.9] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </motion.div>
      )}
    </section>
  );
}
