"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Users, User, MessageSquare, Loader2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { submitRsvp } from "@/lib/supabase";
import { sfx } from "@/lib/sound";
import { FloralDivider } from "../decorative/BotanicalFlourish";

interface RsvpSectionProps {
  initialGuestName?: string;
  onSubmitted?: () => void;
}

export function RsvpSection({ initialGuestName = "", onSubmitted }: RsvpSectionProps) {
  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir" | "ragu">("hadir");
  const [pax, setPax] = useState<number>(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Mohon isi nama lengkap Anda.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await submitRsvp({
        guest_name: name.trim(),
        attendance,
        pax,
        message: message.trim() || undefined,
      });

      if (res.success) {
        setSuccess(true);
        if (attendance === "hadir") {
          sfx.playCelebrationHarp();
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.75 },
            colors: ["#C5A880", "#A5A88D", "#C99D9D", "#D8C4A4"],
          });
        } else {
          sfx.playChime();
        }
        if (onSubmitted) {
          onSubmitted();
        }
      }
    } catch {
      setErrorMsg("Terjadi kendala saat mengirim. Silakan coba kembali.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center text-center bg-[#F4EDE2]/50">
      {/* Subtitle & Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#78665A] font-medium"
      >
        Konfirmasi Kehadiran
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-[#45483B] font-light mt-1"
      >
        RSVP
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-sans text-xs text-[#78665A] max-w-xs mt-2 leading-relaxed"
      >
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
      </motion.p>

      <FloralDivider className="my-6 opacity-75" />

      {/* RSVP Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-sm p-6 sm:p-7 rounded-2xl bg-[#FAF6F0] border border-[#D8C4A4]/70 shadow-sm text-left"
      >
        {success ? (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#A5A88D]/20 text-[#A5A88D] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#45483B]">
              Terima Kasih!
            </h3>
            <p className="font-sans text-xs text-[#78665A] mt-2 leading-relaxed">
              Konfirmasi kehadiran Anda telah berhasil tersimpan. Doa dan kehadiran Anda sangat berarti bagi kami.
            </p>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="mt-6 text-xs text-[#A5A88D] underline hover:text-[#45483B] cursor-pointer"
            >
              Ubah Konfirmasi Kehadiran
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Error banner */}
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                {errorMsg}
              </div>
            )}

            {/* Guest Name */}
            <div>
              <label className="block font-sans text-xs font-medium text-[#45483B] mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#A5A88D]" />
                <span>Nama Lengkap</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Bpk. Hendra &amp; Istri"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A4] bg-white text-xs text-[#45483B] placeholder:text-[#78665A]/50 focus:outline-none focus:ring-2 focus:ring-[#A5A88D]/50 transition-all"
              />
            </div>

            {/* Attendance Confirmation */}
            <div>
              <label className="block font-sans text-xs font-medium text-[#45483B] mb-1.5">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    sfx.playTap();
                    setAttendance("hadir");
                  }}
                  className={`py-2 px-1 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    attendance === "hadir"
                      ? "bg-[#A5A88D] text-white border-[#A5A88D] shadow-sm"
                      : "bg-white text-[#78665A] border-[#D8C4A4] hover:bg-[#F4EDE2]"
                  }`}
                >
                  Hadir
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sfx.playTap();
                    setAttendance("ragu");
                  }}
                  className={`py-2 px-1 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    attendance === "ragu"
                      ? "bg-[#C5A880] text-white border-[#C5A880] shadow-sm"
                      : "bg-white text-[#78665A] border-[#D8C4A4] hover:bg-[#F4EDE2]"
                  }`}
                >
                  Masih Ragu
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sfx.playTap();
                    setAttendance("tidak_hadir");
                  }}
                  className={`py-2 px-1 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    attendance === "tidak_hadir"
                      ? "bg-[#C99D9D] text-white border-[#C99D9D] shadow-sm"
                      : "bg-white text-[#78665A] border-[#D8C4A4] hover:bg-[#F4EDE2]"
                  }`}
                >
                  Tidak Hadir
                </button>
              </div>
            </div>

            {/* Number of Attendees (pax) */}
            {attendance !== "tidak_hadir" && (
              <div>
                <label className="block font-sans text-xs font-medium text-[#45483B] mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#A5A88D]" />
                  <span>Jumlah Tamu yang Hadir</span>
                </label>
                <select
                  value={pax}
                  onChange={(e) => setPax(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A4] bg-white text-xs text-[#45483B] focus:outline-none focus:ring-2 focus:ring-[#A5A88D]/50 transition-all cursor-pointer"
                >
                  <option value={1}>1 Orang</option>
                  <option value={2}>2 Orang</option>
                  <option value={3}>3 Orang</option>
                  <option value={4}>4 Orang</option>
                </select>
              </div>
            )}

            {/* Optional Wish/Message */}
            <div>
              <label className="block font-sans text-xs font-medium text-[#45483B] mb-1.5 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#A5A88D]" />
                <span>Pesan / Doa Restu (Opsional)</span>
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan atau doa restu Anda untuk kedua mempelai..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D8C4A4] bg-white text-xs text-[#45483B] placeholder:text-[#78665A]/50 focus:outline-none focus:ring-2 focus:ring-[#A5A88D]/50 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 rounded-full bg-[#45483B] text-[#F8F4EC] text-xs font-sans uppercase tracking-widest font-medium hover:bg-[#323528] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#D8C4A4]" />
                  <span>Menyimpan...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 text-[#D8C4A4]" />
                  <span>Kirim Konfirmasi</span>
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}

