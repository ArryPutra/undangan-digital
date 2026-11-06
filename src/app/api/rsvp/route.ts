import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { guest_name, attendance, pax, message } = body;

    if (!guest_name || !attendance) {
      return NextResponse.json(
        { error: "Nama dan konfirmasi kehadiran wajib diisi" },
        { status: 400 }
      );
    }

    if (supabase) {
      const { data, error } = await supabase.from("rsvp_submissions").insert([
        {
          id: "rsvp-" + Date.now(),
          guest_name,
          attendance,
          pax: pax || 1,
          message: message || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
    }

    return NextResponse.json({
      success: true,
      message: "Konfirmasi kehadiran berhasil tersimpan",
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

