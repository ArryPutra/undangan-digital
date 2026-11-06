"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Heart, User, Clock, Loader2, Sparkles } from "lucide-react";
import {
  fetchGuestbookMessages,
  saveGuestbookMessage,
  GuestbookRecord,
} from "@/lib/supabase";
import { sfx } from "@/lib/sound";
import { FloralDivider } from "../decorative/BotanicalFlourish";

interface GuestbookSectionProps {
  initialGuestName?: string;
}

export function GuestbookSection({ initialGuestName = "" }: GuestbookSectionProps) {
  const [messages, setMessages] = useState<GuestbookRecord[]>([]);
  const [name, setName] = useState(initialGuestName);
  const [relationship, setRelationship] = useState("Sahabat");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const data = await fetchGuestbookMessages();
      setMessages(data);
    } catch {
      // Ignore fetch error
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    try {
      const newMsg = await saveGuestbookMessage({
        guest_name: name.trim(),
        relationship,
        message: message.trim(),
        attendance_status: "hadir",
      });

      setMessages((prev) => [newMsg, ...prev]);
      setMessage("");
      sfx.playChime();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  // Format date helper
  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "Baru saja";
    }
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
        Untaian Doa &amp; Ucapan
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-[#45483B] font-light mt-1"
      >
        Digital Guestbook
      </motion.h2>

      <FloralDivider className="my-6 opacity-75" />

      {/* Guestbook Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-sm p-5 sm:p-6 rounded-2xl bg-[#FAF6F0] border border-[#D8C4A4]/70 shadow-sm text-left mb-8"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          {submitted && (
            <div className="p-2.5 rounded-lg bg-[#A5A88D]/20 border border-[#A5A88D]/40 text-xs text-[#45483B] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#A5A88D]" />
              <span>Terima kasih! Doa restu Anda telah dipublikasikan.</span>
            </div>
          )}

          <div>
            <label className="block font-sans text-xs font-medium text-[#45483B] mb-1">
              Nama Pengirim
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="w-full px-3 py-2 rounded-xl border border-[#D8C4A4] bg-white text-xs text-[#45483B] focus:outline-none focus:ring-2 focus:ring-[#A5A88D]/50 transition-all"
            />
          </div>

          <div>
            <label className="block font-sans text-xs font-medium text-[#45483B] mb-1">
              Hubungan / Relasi
            </label>
            <select
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-[#D8C4A4] bg-white text-xs text-[#45483B] focus:outline-none focus:ring-2 focus:ring-[#A5A88D]/50 transition-all cursor-pointer"
            >
              <option value="Sahabat">Sahabat</option>
              <option value="Keluarga">Keluarga</option>
              <option value="Rekan Kerja">Rekan Kerja</option>
              <option value="Tamu Undangan">Tamu Undangan</option>
            </select>
          </div>

          <div>
            <label className="block font-sans text-xs font-medium text-[#45483B] mb-1">
              Ucapan &amp; Doa
            </label>
            <textarea
              rows={3}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan selamat dan doa restu terbaik Anda..."
              className="w-full px-3 py-2 rounded-xl border border-[#D8C4A4] bg-white text-xs text-[#45483B] focus:outline-none focus:ring-2 focus:ring-[#A5A88D]/50 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-full bg-[#45483B] text-[#F8F4EC] text-xs font-sans uppercase tracking-wider font-medium hover:bg-[#323528] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-1"
          >
            {loading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin text-[#D8C4A4]" />
                <span>Mengirim...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 text-[#D8C4A4]" />
                <span>Kirim Doa Restu</span>
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Messages Stream Container */}
      <div className="w-full max-w-sm flex flex-col gap-3 text-left">
        <div className="flex items-center justify-between px-2 mb-1">
          <span className="font-sans text-xs font-medium text-[#78665A]">
            Ucapan Masuk ({messages.length})
          </span>
          <span className="font-sans text-[10px] text-[#A5A88D] uppercase tracking-wider font-semibold">
            Doa &amp; Restu
          </span>
        </div>

        <div className="max-h-[380px] overflow-y-auto pr-1 flex flex-col gap-3 luxury-scrollbar">
          {fetching ? (
            <div className="py-8 text-center text-xs text-[#78665A] flex flex-col items-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin text-[#A5A88D]" />
              <span>Memuat ucapan doa...</span>
            </div>
          ) : messages.length === 0 ? (
            <div className="py-6 text-center text-xs text-[#78665A] bg-[#FAF6F0] rounded-xl border border-[#D8C4A4]/40">
              Belum ada ucapan. Jadilah yang pertama memberikan doa restu!
            </div>
          ) : (
            messages.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-[#FAF6F0] border border-[#D8C4A4]/50 shadow-sm flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#EADBD7] text-[#9F6E6E] font-serif text-xs font-bold flex items-center justify-center shrink-0">
                      {item.guest_name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#45483B] leading-tight line-clamp-1">
                        {item.guest_name}
                      </h4>
                      {item.relationship && (
                        <span className="text-[10px] text-[#A5A88D] font-sans font-medium">
                          {item.relationship}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] text-[#78665A]/80 font-sans whitespace-nowrap">
                    {formatDate(item.created_at)}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#45483B] mt-1 leading-relaxed pl-9">
                  {item.message}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

