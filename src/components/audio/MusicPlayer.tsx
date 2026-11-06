"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";
import { weddingConfig } from "@/config/wedding.config";
import { sfx } from "@/lib/sound";

interface MusicPlayerProps {
  autoPlayTriggered: boolean;
}

export function MusicPlayer({ autoPlayTriggered }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize and handle auto-play once user opens invitation
  useEffect(() => {
    if (autoPlayTriggered && !hasInteracted && audioRef.current) {
      setHasInteracted(true);
      const audio = audioRef.current;
      audio.volume = 0.7;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("HTML5 audio autoplay issue, retrying upon interaction:", err);
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlayTriggered, hasInteracted]);

  const togglePlay = () => {
    sfx.playTap();
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.7;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.warn("Audio play failed:", e);
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 select-none">
      {/* Audio Element with multiple sources for 100% cross-browser compatibility */}
      <audio
        ref={audioRef}
        preload="auto"
        loop
        playsInline
      >
        <source src="/audio/wedding-song.mp3" type="audio/mpeg" />
        <source src="/audio/wedding-song.ogg" type="audio/ogg" />
        <source src="/audio/wedding-song.wav" type="audio/wav" />
        Browser Anda tidak mendukung pemutar musik audio.
      </audio>

      {/* Floating Vinyl Music Disc Button */}
      <div className="relative group">
        {/* Animated Sound Wave Bars (shown when playing) */}
        {isPlaying && (
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-end justify-center gap-1 h-5 px-2 py-0.5 bg-[#2D2824]/85 backdrop-blur-md rounded-full shadow-md pointer-events-none">
            <span className="w-0.5 h-2 bg-[#D8C4A4] rounded-full animate-[soundWave_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 h-3.5 bg-[#D8C4A4] rounded-full animate-[soundWave_0.6s_ease-in-out_0.2s_infinite]" />
            <span className="w-0.5 h-2.5 bg-[#D8C4A4] rounded-full animate-[soundWave_0.9s_ease-in-out_0.4s_infinite]" />
            <span className="w-0.5 h-4 bg-[#D8C4A4] rounded-full animate-[soundWave_0.7s_ease-in-out_0.1s_infinite]" />
          </div>
        )}

        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Jeda Musik Latar" : "Putar Musik Latar"}
          className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2D2824]/90 backdrop-blur-md border border-[#D8C4A4]/50 text-[#F8F4EC] shadow-xl hover:border-[#D8C4A4] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D8C4A4]/60 cursor-pointer ${
            isPlaying ? "shadow-[0_0_20px_rgba(216,196,164,0.35)]" : "opacity-85"
          }`}
        >
          {/* Rotating vinyl grooves */}
          <div
            className={`absolute inset-1 rounded-full border border-dashed border-[#D8C4A4]/30 pointer-events-none ${
              isPlaying ? "animate-spin [animation-duration:6s]" : ""
            }`}
          />

          {isPlaying ? (
            <Pause className="w-5 h-5 text-[#D8C4A4]" />
          ) : (
            <Play className="w-5 h-5 text-[#D8C4A4] translate-x-0.5" />
          )}
        </button>

        {/* Tooltip on hover */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center px-3 py-1.5 bg-[#2D2824]/90 text-[#F8F4EC] text-xs font-sans rounded-md shadow-lg border border-[#D8C4A4]/30 whitespace-nowrap pointer-events-none transition-opacity">
          <p className="flex items-center gap-1.5">
            <Music className="w-3.5 h-3.5 text-[#D8C4A4]" />
            <span>{weddingConfig.music.title}</span>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes soundWave {
          0%, 100% {
            height: 4px;
          }
          50% {
            height: 14px;
          }
        }
      `}</style>
    </div>
  );
}
