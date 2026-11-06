import React from "react";
import { WeddingLovePattern } from "../decorative/WeddingLovePattern";

interface InvitationWrapperProps {
  children: React.ReactNode;
}

export function InvitationWrapper({ children }: InvitationWrapperProps) {
  return (
    <div className="relative min-h-screen w-full flex justify-center bg-[#23201D] overflow-x-hidden">
      {/* 1. Dark Romantic Damask Lace Pattern on outer desktop background */}
      <WeddingLovePattern variant="dark" opacity={0.5} />

      {/* Subtle ambient lighting with warm romantic undertone for wide screens */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(201,157,157,0.12),rgba(35,32,29,0.96))]" />

      {/* Main Luxury Invitation Card Canvas */}
      <main className="relative w-full max-w-[480px] min-h-screen bg-[#F8F4EC] text-[#45483B] shadow-[0_0_80px_rgba(0,0,0,0.55)] paper-texture flex flex-col z-10 overflow-hidden">
        {/* Seamless Botanical Love Damask (Sulur Cinta Abadi) across entire invitation */}
        <WeddingLovePattern
          variant="paper"
          opacity={0.75}
          className="z-0 mix-blend-multiply"
        />

        {/* Soft Romantic Rose & Champagne Lighting Veil */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,rgba(201,157,157,0.06)_0%,transparent_50%),radial-gradient(ellipse_at_bottom,rgba(216,196,164,0.08)_0%,transparent_50%)]" />

        {/* Invitation Content Layers */}
        <div className="relative z-10 flex flex-col w-full">
          {children}
        </div>
      </main>
    </div>
  );
}

