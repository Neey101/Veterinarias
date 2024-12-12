"use server";

import db from "@/db";

export async function registrarNuevaVeterinaria(
  nombreDelLocal: string,
  ubicacion: string,
  numero: string,
  gmail: string,
  latitud: number,
  longitud: number
) {
  try {
    console.log(nombreDelLocal);
    await db.veterinaria.create({
      data: {
        nombreDelLocal: nombreDelLocal,
        ubicacion: ubicacion,
        latitud: -34.67740611032248,
        longitud: -58.47625296855152,
        email: gmail,
        numero: numero,
      },
    });
  } catch (error) {
    console.table(error);
  }
}
