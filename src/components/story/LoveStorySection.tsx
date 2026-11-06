"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding.config";
import { FloralDivider } from "../decorative/BotanicalFlourish";
import { WhiteJasmine, EucalyptusBranch, WatercolorRose } from "../decorative/BotanicalArtwork";

export function LoveStorySection() {
  const { loveStory } = weddingConfig;

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center text-center bg-[#F4EDE2]/40 overflow-hidden">
      {/* Subtitle & Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#78665A] font-medium"
      >
        Perjalanan Cinta
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-[#45483B] font-light mt-1"
      >
        Our Love Story
      </motion.h2>

      <FloralDivider className="my-6 opacity-75" />

      {/* Romantic Timeline */}
      <div className="relative w-full max-w-sm mt-4">
        {/* Central Vertical Golden Guideline */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-8 w-[1px] bg-gradient-to-b from-[#D8C4A4]/40 via-[#A5A88D]/60 to-[#D8C4A4]/40" />

        <div className="flex flex-col gap-10">
          {loveStory.map((item, idx) => (
            <motion.div
              key={item.year + item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="relative flex flex-col items-center"
            >
              {/* Year Circular Badge with Botanical Accent */}
              <div className="relative z-10 flex items-center justify-center mb-3">
                <div className="w-11 h-11 rounded-full bg-[#FAF6F0] border border-[#C5A880] shadow-sm flex items-center justify-center">
                  <span className="font-serif text-xs font-semibold text-[#45483B]">
                    {item.year}
                  </span>
                </div>
                {/* Climbing Jasmine Blossom on alternating sides */}
                <div
                  className={`absolute top-0 pointer-events-none opacity-85 ${
                    idx % 2 === 0 ? "-left-6" : "-right-6 -scale-x-100"
                  }`}
                >
                  <WhiteJasmine size={26} bloom={true} delay={0.25} />
                </div>
              </div>

              {/* Story Content Card */}
              <div className="w-full p-5 rounded-2xl bg-[#FAF6F0] border border-[#D8C4A4]/60 shadow-sm flex flex-col items-center relative overflow-hidden">
                {/* Subtle corner eucalyptus sprig */}
                <div className="absolute -top-3 -right-3 pointer-events-none opacity-70 -scale-x-100">
                  <EucalyptusBranch size={55} />
                </div>

                {/* Photo */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#D8C4A4]/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 300px, 360px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2824]/30 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-[#2D2824]/70 backdrop-blur-sm text-[10px] text-[#FAF6F0] uppercase tracking-wider font-sans">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-[#45483B]">
                  {item.title}
                </h3>

                {/* Narrative */}
                <p className="font-sans text-xs text-[#78665A] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Climax of Timeline: Blooming Rose marking the Wedding Day */}
        <div className="relative z-10 flex flex-col items-center mt-6">
          <WatercolorRose size={64} bloom={true} delay={0.4} />
          <span className="font-serif italic text-xs text-[#78665A] mt-1">
            Menuju Hari Bahagia
          </span>
        </div>
      </div>
    </section>
  );
}
