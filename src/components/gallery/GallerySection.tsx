"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Sparkles } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";
import { sfx } from "@/lib/sound";
import { FloralDivider } from "../decorative/BotanicalFlourish";
import { LightboxModal, GalleryItem } from "./LightboxModal";

export function GallerySection() {
  const { gallery } = weddingConfig;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeItem = selectedIndex !== null ? gallery[selectedIndex] : null;

  const handleOpen = (index: number) => {
    sfx.playChime();
    setSelectedIndex(index);
  };

  const handleClose = () => {
    sfx.playTap();
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    sfx.playTap();
    setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    sfx.playTap();
    setSelectedIndex((selectedIndex + 1) % gallery.length);
  };

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center text-center">
      {/* Subtitle & Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#78665A] font-medium"
      >
        Dokumentasi Bahagia
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-[#45483B] font-light mt-1"
      >
        Our Moments
      </motion.h2>

      <FloralDivider className="my-6 opacity-75" />

      {/* Asymmetric Editorial Gallery Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm mt-2">
        {gallery.map((item, idx) => {
          // Asymmetric spans: tall, wide, or normal
          const isSpanTall = item.span === "tall";
          const isSpanWide = item.span === "wide";

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => handleOpen(idx)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-sm border border-[#D8C4A4]/50 bg-[#FAF6F0] ${
                isSpanWide ? "col-span-2 aspect-[16/9]" : isSpanTall ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 240px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Editorial hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2824]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-md self-end mb-auto text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
                <p className="font-serif italic text-xs text-[#F8F4EC] line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Native <dialog> Lightbox Modal */}
      <LightboxModal
        isOpen={selectedIndex !== null}
        activeItem={activeItem}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
        total={gallery.length}
        currentIndex={selectedIndex ?? 0}
      />
    </section>
  );
}

