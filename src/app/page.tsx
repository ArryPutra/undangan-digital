"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { EnvelopeIntro } from "@/components/opening/EnvelopeIntro";
import { HeroSection } from "@/components/hero/HeroSection";
import { CoupleSection } from "@/components/couple/CoupleSection";
import { CountdownSection } from "@/components/countdown/CountdownSection";
import { EventsSection } from "@/components/events/EventsSection";
import { LoveStorySection } from "@/components/story/LoveStorySection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { RsvpSection } from "@/components/rsvp/RsvpSection";
import { GuestbookSection } from "@/components/guestbook/GuestbookSection";
import { GiftSection } from "@/components/gift/GiftSection";
import { ClosingSection } from "@/components/closing/ClosingSection";
import { MusicPlayer } from "@/components/audio/MusicPlayer";
import { PetalsOverlay } from "@/components/decorative/PetalsOverlay";
import { ParallaxBotanicals } from "@/components/decorative/ParallaxBotanicals";
import { InvitationWrapper } from "@/components/layout/InvitationWrapper";

function WeddingInvitationContent() {
  const searchParams = useSearchParams();
  // Support ?to=Name or ?guest=Name or ?p=Name
  const guestQuery =
    searchParams.get("to") ||
    searchParams.get("guest") ||
    searchParams.get("p") ||
    "Tamu Undangan";

  const [hasOpened, setHasOpened] = useState(false);

  const handleOpenInvitation = () => {
    setHasOpened(true);
  };

  return (
    <>
      {/* Intro Envelope / Opening Screen with Enchanted Botanical Bloom */}
      <EnvelopeIntro
        guestName={guestQuery}
        onOpen={handleOpenInvitation}
      />

      {/* Falling Botanical Petals Particle System (Rose, Jasmine, Eucalyptus) */}
      <PetalsOverlay />

      {/* Floating Background Music Player */}
      <MusicPlayer autoPlayTriggered={hasOpened} />

      {/* Main Luxury Invitation Journey */}
      <InvitationWrapper>
        {/* Parallax Botanical Background Layer */}
        <ParallaxBotanicals />

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Couple Section (Groom & Bride) */}
        <CoupleSection />

        {/* 3. Wedding Countdown & Save The Date */}
        <CountdownSection />

        {/* 4. Wedding Events (Akad & Resepsi) */}
        <EventsSection />

        {/* 5. Our Love Story Timeline */}
        <LoveStorySection />

        {/* 6. Photo & Video Moments Gallery */}
        <GallerySection />

        {/* 7. RSVP Attendance Confirmation */}
        <RsvpSection initialGuestName={guestQuery !== "Tamu Undangan" ? guestQuery : ""} />

        {/* 8. Digital Guestbook */}
        <GuestbookSection initialGuestName={guestQuery !== "Tamu Undangan" ? guestQuery : ""} />

        {/* 9. Wedding Gift (Amplop Digital & QRIS) */}
        <GiftSection />

        {/* 10. Closing Section */}
        <ClosingSection guestName={guestQuery !== "Tamu Undangan" ? guestQuery : ""} />
      </InvitationWrapper>
    </>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-[#1C1A18] text-[#D8C4A4]">
          <div className="font-serif text-xl tracking-widest animate-pulse">
            Memuat Undangan...
          </div>
        </div>
      }
    >
      <WeddingInvitationContent />
    </Suspense>
  );
}
