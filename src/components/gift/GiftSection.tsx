"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Copy, Check, CreditCard, QrCode, Gift, MapPin } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";
import { sfx } from "@/lib/sound";
import { FloralDivider } from "../decorative/BotanicalFlourish";

export function GiftSection() {
  const { gifts } = weddingConfig;
  const [copiedBankIndex, setCopiedBankIndex] = useState<number | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [showQris, setShowQris] = useState(false);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    sfx.playChime();
    setCopiedBankIndex(index);
    setTimeout(() => setCopiedBankIndex(null), 2500);
  };

  const handleCopyAddress = (text: string) => {
    navigator.clipboard.writeText(text);
    sfx.playChime();
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center text-center bg-[#F4EDE2]/40">
      {/* Subtitle & Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#78665A] font-medium"
      >
        Tanda Kasih
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl text-[#45483B] font-light mt-1"
      >
        Wedding Gift
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-sans text-xs text-[#78665A] max-w-xs mt-2 leading-relaxed"
      >
        Doa restu Anda merupakan karunia terindah bagi kami. Namun bila memberi adalah tanda kasih Anda, kami menyediakan amplop digital berikut:
      </motion.p>

      <FloralDivider className="my-6 opacity-75" />

      {/* Bank Transfer Cards */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        {gifts.banks.map((bank, idx) => (
          <motion.div
            key={bank.accountNumber}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF6F0] to-[#F2EAE0] border border-[#D8C4A4]/80 shadow-sm flex flex-col gap-3 relative text-left"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-base font-semibold text-[#45483B]">
                {bank.bankName}
              </span>
              <CreditCard className="w-5 h-5 text-[#C5A880]" />
            </div>

            <div className="pt-2">
              <p className="font-sans text-[11px] text-[#78665A] uppercase tracking-wider">
                Nomor Rekening:
              </p>
              <p className="font-serif text-2xl font-semibold text-[#45483B] tracking-wider mt-0.5">
                {bank.accountNumber}
              </p>
              <p className="font-sans text-xs text-[#78665A] mt-1 font-medium">
                a.n. {bank.accountHolder}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(bank.accountNumber, idx)}
              className="mt-1 self-start inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF6F0] border border-[#A5A88D] text-xs font-sans text-[#45483B] hover:bg-[#A5A88D] hover:text-[#FAF6F0] transition-all cursor-pointer shadow-sm"
            >
              {copiedBankIndex === idx ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700 font-medium">Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A5A88D]" />
                  <span>Salin No. Rekening</span>
                </>
              )}
            </button>
          </motion.div>
        ))}

        {/* QRIS Option */}
        {gifts.qris && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#D8C4A4]/80 shadow-sm flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-2 mb-2">
              <QrCode className="w-4 h-4 text-[#C5A880]" />
              <span className="font-serif text-base font-semibold text-[#45483B]">
                QRIS Pembayaran Digital
              </span>
            </div>
            <p className="font-sans text-[11px] text-[#78665A] max-w-xs mb-3">
              {gifts.qris.description}
            </p>

            <button
              type="button"
              onClick={() => {
                sfx.playTap();
                setShowQris(!showQris);
              }}
              className="px-4 py-1.5 rounded-full bg-[#FAF6F0] border border-[#A5A88D] text-xs font-sans text-[#45483B] hover:bg-[#A5A88D] hover:text-[#FAF6F0] transition-all cursor-pointer shadow-sm"
            >
              {showQris ? "Tutup Kode QRIS" : "Tampilkan Kode QRIS"}
            </button>

            {showQris && (
              <div className="mt-4 p-3 bg-white rounded-xl border border-[#D8C4A4] shadow-md flex flex-col items-center">
                <div className="relative w-48 h-48">
                  <Image
                    src={gifts.qris.imageUrl}
                    alt="QRIS Wedding Gift"
                    fill
                    sizes="200px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] text-[#78665A] font-sans mt-2">
                  Scan melalui BCA, Mandiri, GoPay, OVO, ShopeePay
                </span>
              </div>
            )}
          </motion.div>
        )}

        {/* Physical Gift Mailing Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#D8C4A4]/80 shadow-sm flex flex-col gap-2.5 text-left"
        >
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-[#C5A880]" />
            <span className="font-serif text-base font-semibold text-[#45483B]">
              Kirim Kado Fisik
            </span>
          </div>

          <p className="font-sans text-xs text-[#45483B] leading-relaxed">
            <strong className="font-medium">Penerima:</strong> {gifts.physicalGiftAddress.recipient}
            <br />
            <strong className="font-medium">No. Telepon:</strong> {gifts.physicalGiftAddress.phone}
            <br />
            <strong className="font-medium">Alamat:</strong> {gifts.physicalGiftAddress.address}
          </p>

          <button
            type="button"
            onClick={() => handleCopyAddress(`${gifts.physicalGiftAddress.recipient} (${gifts.physicalGiftAddress.phone}) - ${gifts.physicalGiftAddress.address}`)}
            className="mt-1 self-start inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF6F0] border border-[#A5A88D] text-xs font-sans text-[#45483B] hover:bg-[#A5A88D] hover:text-[#FAF6F0] transition-all cursor-pointer shadow-sm"
          >
            {copiedAddress ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-700 font-medium">Alamat Disalin!</span>
              </>
            ) : (
              <>
                <MapPin className="w-3.5 h-3.5 text-[#A5A88D]" />
                <span>Salin Alamat Lengkap</span>
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

