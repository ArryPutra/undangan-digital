-- SUPABASE SCHEMA FOR DIGITAL WEDDING INVITATION
-- Run this in your Supabase SQL Editor if you want to connect a live database.

-- 1. Table: rsvp_submissions
CREATE TABLE IF NOT EXISTS public.rsvp_submissions (
  id TEXT PRIMARY KEY,
  guest_name TEXT NOT NULL,
  attendance TEXT NOT NULL CHECK (attendance IN ('hadir', 'tidak_hadir', 'ragu')),
  pax INTEGER NOT NULL DEFAULT 1,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.rsvp_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts and reads
CREATE POLICY "Allow public insert on rsvp_submissions"
  ON public.rsvp_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public select on rsvp_submissions"
  ON public.rsvp_submissions FOR SELECT
  USING (true);

-- 2. Table: guestbook_messages
CREATE TABLE IF NOT EXISTS public.guestbook_messages (
  id TEXT PRIMARY KEY,
  guest_name TEXT NOT NULL,
  relationship TEXT,
  message TEXT NOT NULL,
  attendance_status TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.guestbook_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts and reads
CREATE POLICY "Allow public insert on guestbook_messages"
  ON public.guestbook_messages FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public select on guestbook_messages"
  ON public.guestbook_messages FOR SELECT
  USING (true);

-- Initial seed data
INSERT INTO public.guestbook_messages (id, guest_name, relationship, message, attendance_status)
VALUES 
('seed-1', 'Prof. Dr. Ir. H. Bambang Widjaja & Keluarga', 'Keluarga Besar', 'Selamat menempuh hidup baru untuk Arya dan Amanda. Semoga senantiasa diberkahi sakinah, mawaddah, wa rahmah.', 'hadir'),
('seed-2', 'dr. Michelle Angeline, Sp.KK', 'Sahabat Amanda', 'Amanda sayang! Nangis terharu lihat kalian berdua. Arya adalah pria terbaik buat kamu. Semoga cinta kalian abadi selamanya!', 'hadir'),
('seed-3', 'Dimas Suryaputra & Tim Lab', 'Rekan Arya', 'Barakallahu lakum wa baraka alaika wa jamaa bainakuma fii khair. Selamat Mas Arya dan Mba Amanda!', 'hadir')
ON CONFLICT (id) DO NOTHING;

