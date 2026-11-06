"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

interface LightboxModalProps {
  isOpen: boolean;
  activeItem: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  total: number;
  currentIndex: number;
}

export function LightboxModal({
  isOpen,
  activeItem,
  onClose,
  onPrev,
  onNext,
  total,
  currentIndex,
}: LightboxModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Manage native dialog open state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Handle keyboard events (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  // Light dismiss: Close when clicking backdrop
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (isOutside) {
      onClose();
    }
  };

  if (!activeItem) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      onClose={onClose}
      aria-labelledby="lightbox-caption"
      className="fixed inset-0 m-auto p-0 bg-transparent text-[#F8F4EC] max-w-lg w-full h-auto overflow-visible focus:outline-none z-50 backdrop:bg-black/85 backdrop:backdrop-blur-md"
    >
      <div className="relative w-full p-4 flex flex-col items-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup Galeri"
          className="absolute -top-10 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Container */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40">
          <Image
            src={activeItem.url}
            alt={activeItem.alt}
            fill
            sizes="(max-width: 640px) 95vw, 500px"
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none px-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Foto Sebelumnya"
            className="pointer-events-auto p-2.5 rounded-full bg-[#1C1A18]/70 hover:bg-[#1C1A18] text-[#F8F4EC] border border-white/20 transition-all shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Foto Selanjutnya"
            className="pointer-events-auto p-2.5 rounded-full bg-[#1C1A18]/70 hover:bg-[#1C1A18] text-[#F8F4EC] border border-white/20 transition-all shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption & Counter */}
        <div className="w-full text-center mt-3 px-4">
          <p
            id="lightbox-caption"
            className="font-serif italic text-sm text-[#F8F4EC] drop-shadow-sm"
          >
            {activeItem.caption}
          </p>
          <p className="font-sans text-xs text-[#D8C4A4] mt-1 tracking-wider uppercase">
            {currentIndex + 1} dari {total}
          </p>
        </div>
      </div>
    </dialog>
  );
}

