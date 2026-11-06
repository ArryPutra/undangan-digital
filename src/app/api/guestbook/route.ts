import { NextRequest, NextResponse } from "next/server";
import { supabase, INITIAL_GUESTBOOK_MESSAGES } from "@/lib/supabase";

export async function GET() {
  try {
    if (supabase) {
      const { data, error } = await supabase
        .from("guestbook_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return NextResponse.json(data);
      }
    }

    return NextResponse.json(INITIAL_GUESTBOOK_MESSAGES);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { guest_name, relationship, message, attendance_status } = body;

    if (!guest_name || !message) {
      return NextResponse.json(
        { error: "Nama dan pesan doa wajib diisi" },
        { status: 400 }
      );
    }

    const newRecord = {
      id: "msg-" + Date.now(),
      guest_name,
      relationship: relationship || "Tamu Undangan",
      message,
      attendance_status: attendance_status || "hadir",
      created_at: new Date().toISOString(),
    };

    if (supabase) {
      const { data, error } = await supabase
        .from("guestbook_messages")
        .insert([newRecord])
        .select()
        .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json(data);
    }

    return NextResponse.json(newRecord);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

