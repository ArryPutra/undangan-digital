import { createClient, SupabaseClient } from "@supabase/supabase-js";

export interface RsvpRecord {
  id?: string;
  guest_name: string;
  attendance: "hadir" | "tidak_hadir" | "ragu";
  pax: number;
  message?: string;
  created_at?: string;
}

export interface GuestbookRecord {
  id: string;
  guest_name: string;
  relationship?: string;
  message: string;
  attendance_status?: string;
  created_at: string;
}

// Initial warm wedding wishes for pre-population
export const INITIAL_GUESTBOOK_MESSAGES: GuestbookRecord[] = [
  {
    id: "wish-1",
    guest_name: "Prof. Dr. Ir. H. Bambang Widjaja & Keluarga",
    relationship: "Keluarga Besar",
    message: "Selamat menempuh hidup baru untuk Arya dan Amanda. Semoga senantiasa diberkahi sakinah, mawaddah, wa rahmah. Menjadi keluarga teladan yang saling melengkapi dalam iman dan takwa.",
    attendance_status: "hadir",
    created_at: "2026-10-18T14:32:00Z",
  },
  {
    id: "wish-2",
    guest_name: "dr. Michelle Angeline, Sp.KK",
    relationship: "Sahabat Amanda",
    message: "Amanda sayang! Akhirnya hari bahagia yang kita impikan datang juga. Nangis terharu lihat kalian berdua. Arya adalah pria terbaik buat kamu. Semoga cinta kalian abadi selamanya, aamiin!",
    attendance_status: "hadir",
    created_at: "2026-10-19T09:15:00Z",
  },
  {
    id: "wish-3",
    guest_name: "Dimas Suryaputra & Tim Lab Elektro",
    relationship: "Rekan Arya",
    message: "Barakallahu lakum wa baraka 'alaikum wa jama'a bainakuma fii khair. Selamat buat Mas Arya dan Mba Amanda! Semoga dilancarkan sampai hari-H dan selalu harmonis.",
    attendance_status: "hadir",
    created_at: "2026-10-20T11:45:00Z",
  },
  {
    id: "wish-4",
    guest_name: "Tante Rina & Om Ferry",
    relationship: "Keluarga",
    message: "Selamat berbahagia anak-anakku tersayang. Mengawali bahtera rumah tangga dengan niat mulia, insya Allah berkah mengalir tiada putus. Sampai jumpa di Plataran!",
    attendance_status: "hadir",
    created_at: "2026-10-21T16:20:00Z",
  },
];

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

const GUESTBOOK_STORAGE_KEY = "undangan_guestbook_messages_v1";
const RSVP_STORAGE_KEY = "undangan_rsvp_submissions_v1";

export async function fetchGuestbookMessages(): Promise<GuestbookRecord[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("guestbook_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data as GuestbookRecord[];
      }
    } catch {
      // Fallback to local storage on error
    }
  }

  if (typeof window !== "undefined") {
    try {
      const localData = localStorage.getItem(GUESTBOOK_STORAGE_KEY);
      if (localData) {
        const parsed = JSON.parse(localData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(INITIAL_GUESTBOOK_MESSAGES));
    } catch {
      // Ignore storage errors
    }
  }

  return INITIAL_GUESTBOOK_MESSAGES;
}

export async function saveGuestbookMessage(
  record: Omit<GuestbookRecord, "id" | "created_at">
): Promise<GuestbookRecord> {
  const newRecord: GuestbookRecord = {
    ...record,
    id: "msg-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
    created_at: new Date().toISOString(),
  };

  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("guestbook_messages")
        .insert([newRecord])
        .select()
        .single();

      if (!error && data) {
        return data as GuestbookRecord;
      }
    } catch {
      // Fallback to local storage
    }
  }

  if (typeof window !== "undefined") {
    try {
      const current = await fetchGuestbookMessages();
      const updated = [newRecord, ...current];
      localStorage.setItem(GUESTBOOK_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  }

  return newRecord;
}

export async function submitRsvp(
  record: Omit<RsvpRecord, "id" | "created_at">
): Promise<{ success: boolean; message: string }> {
  const payload: RsvpRecord = {
    ...record,
    id: "rsvp-" + Date.now(),
    created_at: new Date().toISOString(),
  };

  if (supabase) {
    try {
      const { error } = await supabase.from("rsvp_submissions").insert([payload]);
      if (!error) {
        return { success: true, message: "Konfirmasi kehadiran Anda berhasil tersimpan. Terima kasih!" };
      }
    } catch {
      // Fallback to local storage
    }
  }

  if (typeof window !== "undefined") {
    try {
      const existing = localStorage.getItem(RSVP_STORAGE_KEY);
      const list = existing ? JSON.parse(existing) : [];
      list.push(payload);
      localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(list));
    } catch {
      // Ignore storage errors
    }
  }

  return { success: true, message: "Konfirmasi kehadiran Anda berhasil tersimpan. Terima kasih!" };
}

