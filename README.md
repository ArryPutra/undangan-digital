# 💍 Premium Digital Wedding Invitation Website

A luxury, romantic, and emotionally engaging digital wedding invitation website crafted with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed from the perspective of an award-winning wedding stationery atelier, this invitation feels like opening an exquisite physical letterpress invitation card, enriched with modern digital interactions.

---

## ✨ Key Features & Experience

### 1. 💌 Opening Invitation (Intro Envelope)
- **Full-Screen Opening Experience**: Realistic layered deckle-edge wedding stationery.
- **Wax Seal Micro-Interaction**: Authentic 3D wax seal emblem in burgundy/dusty-rose with embossed monogram (`A & A`) and glowing shimmer.
- **Guest Personalization**: Automatically reads guest name from query parameters:
  - `?to=Nama+Tamu`
  - `?guest=Bapak+Hendra+dan+Keluarga`
  - `?p=Sahabat+Tercinta`
- **Envelope Unfolding Sequence**: Smooth Framer Motion animation simulating breaking the wax seal, opening the envelope flap, and revealing the card.
- **Tactile Sound Effects (SFX)**: Acoustic wax seal snap and paper unsealing rustle powered by the zero-latency Web Audio API.
- **Polite Background Audio**: Music starts **only after** explicit interaction ("Buka Undangan"), complying with all modern browser autoplay restrictions.

### 2. 🌿 Hero & Royal Monogram
- **Editorial Typography**: Cormorant Garamond serif headings, delicate italics, and warm champagne highlights.
- **Arch Frame Portrait**: Vintage stationery arch frame with double hairline gold borders.
- **Quranic Verse & Romantic Quote**: QS. Ar-Rum: 21 with stylized quotation marks and attribution.
- **Scalable Botanical SVGs**: Delicate olive branches, rosebuds, and laurel wreaths.

### 3. 👰 Couple Introduction (Mempelai)
- **Groom**: Full name, academic titles, parents' names, personal romantic bio, and Instagram handle.
- **Bride**: Full name, academic titles, parents' names, personal romantic bio, and Instagram handle.
- **Romantic Ampersand Flourish**: Central seal connecting both profiles.

### 4. ⏳ Wedding Countdown & Save The Date
- **Live Countdown**: Days, Hours, Minutes, Seconds with real-time updates.
- **One-Click Calendar Integration**: Direct Google Calendar button with prefilled event details, timing, address, and notes.

### 5. 🏛️ Wedding Events (Akad & Resepsi)
- **Akad Nikah (Holy Matrimony)**: Date, time, venue name, address, dresscode, and notes.
- **Resepsi Pernikahan (Wedding Reception)**: Date, time, venue name, address, dresscode.
- **Google Maps Navigation**: One-click directions button and responsive embedded map preview.

### 6. 📖 Our Love Story Timeline
- **Visual Milestone Journey**:
  - *2021: Pertemuan Pertama (The First Gaze)*
  - *2023: Merajut Cerita Bersama (Growing Closer)*
  - *2025: Ikrar Pertunangan (She Said Yes)*
  - *2026: Menuju Keabadian (Happily Ever After)*
- Scroll-triggered animations with golden milestone badges.

### 7. 📸 Asymmetrical Editorial Gallery & Native Lightbox
- **Editorial Proportions**: Dynamic masonry-inspired grid with portrait, landscape, and square cards.
- **Modern Web Guidance Compliant Lightbox**:
  - Implements native HTML `<dialog>` element (`showModal()` & `close()`).
  - Native top-layer rendering with `::backdrop` blur and `overscroll-behavior: contain`.
  - Light dismiss (click outside to dismiss), `Escape` key support, and prev/next navigation.

### 8. 📝 Interactive RSVP
- **Form Fields**: Full name, attendance confirmation (*Hadir*, *Tidak Hadir*, *Masih Ragu*), number of attendees (1–4 pax), and optional blessing message.
- **Celebration Feedback**: Confetti burst accompanied by romantic celebratory harp arpeggio SFX on "Hadir" confirmation.
- **Supabase Persistence + Resilient Local Fallback**: Automatically saves to Supabase when configured, or stores locally so testing never fails.

### 9. 💬 Digital Guestbook (Buku Doa & Ucapan)
- **Congratulatory Wishes**: Real-time optimistic update of submitted blessings.
- **Pre-populated with Heartfelt Wishes**: Looks festive and welcoming immediately.
- **Avatar Monograms & Badges**: Clean categorisation (*Sahabat*, *Keluarga*, *Rekan Kerja*).

### 10. 🎁 Wedding Gift (Amplop Digital & QRIS)
- **Bank Transfer Cards**: Bank BCA and Bank Mandiri with copy button and interactive "Tersalin!" badge.
- **QRIS Payment Code**: Expandable QR code for instant mobile banking / e-wallet scanning.
- **Physical Gift Mailing Address**: Delivery address for parcel gifts with one-click copy.

### 11. 🌸 Romantic Petals & Floating Vinyl Player
- **Floating Petals Animation**: Subtle, lightweight petal particles drifting across the screen (respects `prefers-reduced-motion`).
- **Floating Vinyl Disc**: Rotating vintage record with animated sound wave bars and play/pause toggle.
- **WhatsApp Share**: Pre-formatted invitation text ready to share with family and friends.

### 12. 🔔 Zero-Latency Sound Effects (SFX) Engine
- **Web Audio API Synthesis**: Built with zero external audio assets for 100% offline resilience, 0ms lag, and zero network dependency.
  - *Wax Seal Snap & Paper Rustle*: Fires on opening the invitation.
  - *Crystalline Chime*: Fires on copying bank details, guestbook post, and photo lightbox interactions.
  - *Romantic Harp Arpeggio*: Harmonious ascending chord on RSVP attendance confirmation.
  - *Tactile Paper Tap*: Subtle feedback when selecting attendance and pax counts.

---

## 🎨 Color Palette & Typography

| Color | Hex | Role |
| :--- | :--- | :--- |
| **Ivory** | `#F8F4EC` | Luxury stationery paper canvas |
| **Champagne** | `#D8C4A4` | Delicate metallic foil lines, badges |
| **Dusty Rose** | `#C99D9D` | Romantic floral accents & wax seal tone |
| **Sage Green** | `#A5A88D` | Botanical foliage and primary accents |
| **Deep Olive** | `#45483B` | High-contrast editorial serif headings |
| **Warm Brown** | `#78665A` | Refined body text & metadata |

### Typography
- **Headings**: `Cormorant Garamond` (Google Fonts)
- **Body Text**: `Plus Jakarta Sans` (Google Fonts)
- **Calligraphy / Script**: `Alex Brush` (Google Fonts)

---

## ⚙️ Configurable Content

All wedding data is centrally managed in **`src/config/wedding.config.ts`**:

```typescript
export const weddingConfig = {
  couple: {
    groom: { fullName: "...", shortName: "...", ... },
    bride: { fullName: "...", shortName: "...", ... },
    monogram: "A & A",
  },
  date: {
    dayName: "Sabtu",
    fullDate: "24 Oktober 2026",
    countdownTarget: "2026-10-24T08:00:00",
  },
  events: {
    ceremony: { ... },
    reception: { ... },
  },
  loveStory: [ ... ],
  gallery: [ ... ],
  gifts: { ... },
  music: { ... },
};
```

You can customize the entire wedding details for any couple simply by modifying this single file.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

Test with guest personalization:
[http://localhost:3000/?to=Bapak+Dr.+Hendra+dan+Istri](http://localhost:3000/?to=Bapak+Dr.+Hendra+dan+Istri)

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🗄️ Supabase Setup (Optional)

The invitation is completely functional offline and in development using the built-in resilient local storage cache.

To connect your own live Supabase project:
1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL script found in `supabase-schema.sql` in your Supabase SQL Editor.
3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Submissions will now persist directly to your Supabase database!

---

## 📱 Mobile-First & Desktop Presentation

- **Mobile Viewports (< 640px)**: 100% edge-to-edge luxury vertical invitation, comfortable touch targets, and smooth native gestures.
- **Desktop Viewports (>= 640px)**: Intentionally framed within an elegant stationery container (`max-w-[480px]`) on a warm atmospheric ambient backdrop, preserving the physical proportions of a luxury wedding invitation letter.

---

## 📄 License
Created for private wedding celebrations. Crafted with love & devotion.
