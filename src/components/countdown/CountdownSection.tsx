"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";
import { FloralDivider } from "../decorative/BotanicalFlourish";
import { WhiteJasmine } from "../decorative/BotanicalArtwork";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 35,
    hours: 18,
    minutes: 42,
    seconds: 15,
    isComplete: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let target = new Date(weddingConfig.date.countdownTarget).getTime();

    // If target date is in the past or invalid, provide a resilient future countdown (35 days ahead)
    if (isNaN(target) || target <= Date.now()) {
      target = new Date("2026-12-12T08:00:00").getTime();
      // If even that is past, roll forward
      if (target <= Date.now()) {
        target = Date.now() + 35 * 24 * 60 * 60 * 1000 + 18 * 3600 * 1000;
      }
    }

    const calculateTime = () => {
      const now = Date.now();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(
      `Pernikahan ${weddingConfig.couple.groom.shortName} & ${weddingConfig.couple.bride.shortName}`
    );
    const details = encodeURIComponent(
      `The Wedding Celebration of ${weddingConfig.couple.groom.fullName} & ${weddingConfig.couple.bride.fullName}. Lokasi: Plataran Dharmawangsa, Jakarta.`
    );
    const location = encodeURIComponent(weddingConfig.events.ceremony.address);
    // 2026-12-12 08:00 to 15:00 WIB (UTC+7 -> 01:00 to 08:00 UTC)
    const dates = "20261212T010000Z/20261212T080000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const timeUnits = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center text-center bg-[#F4EDE2]/50 overflow-hidden">
      {/* Hairline Divider */}
      <FloralDivider className="mb-4 opacity-70" />

      {/* Subtitle & Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#78665A] font-medium"
      >
        Menghitung Hari Bahagia
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-[#45483B] font-light mt-1"
      >
        Save The Date
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-serif italic text-sm text-[#78665A] mt-2"
      >
        {weddingConfig.date.dayName}, {weddingConfig.date.fullDate}
      </motion.p>

      {/* Countdown Digits Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 mt-8 w-full max-w-xs sm:max-w-sm relative">
        {/* Subtle decorative blooming jasmine accent */}
        <div className="absolute -top-6 -right-3 z-10 pointer-events-none opacity-80">
          <WhiteJasmine size={32} bloom={true} delay={0.2} />
        </div>

        {timeUnits.map((unit, idx) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx + 0.2 }}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#FAF6F0] border border-[#D8C4A4]/70 shadow-sm relative overflow-hidden"
          >
            <span
              suppressHydrationWarning
              className="font-serif text-2xl sm:text-3xl font-medium text-[#45483B] tabular-nums"
            >
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-wider text-[#78665A] mt-1 font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Add to Calendar Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-7"
      >
        <a
          href={getGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF6F0] border border-[#A5A88D] text-[#45483B] font-sans text-xs uppercase tracking-widest font-medium hover:bg-[#A5A88D] hover:text-[#FAF6F0] transition-all shadow-sm group"
        >
          <Calendar className="w-3.5 h-3.5 text-[#A5A88D] group-hover:text-[#FAF6F0] transition-colors" />
          <span>Simpan Tanggal di Kalender</span>
        </a>
      </motion.div>
    </section>
  );
}
