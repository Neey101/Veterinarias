import { NextResponse } from "next/server";
import db from "@/db"; // Asegúrate de que la importación sea correcta

export async function GET() {
  try {
    const veterinarias = await db.veterinaria.findMany();
    return NextResponse.json({ veterinarias }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener veterinarias" }, { status: 500 });
  }
}
