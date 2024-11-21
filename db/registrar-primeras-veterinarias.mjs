import { PrismaClient } from "@prisma/client";
(async () => {
  try {
    const db = new PrismaClient();
    await db.$connect();
    try {
      await db.veterinaria.createMany({
        data: [
          {
            name: "beto",
            email: "vetspet@",
            numero: "01149034976",
            nombreDelLocal: "Veterinaria Pet Mundo",
            ubicacion: "Rojas 62, C1405AAB Cdad. Autónoma de Buenos Aires",
            longitud: "-58.44190336062568",
            latitud: "-34.61954373480866",
          },

          //Veterinaria Sanitas
          //
          //numero:

          {
            name: "beto",
            email: "sanitas@",
            numero: "01144323889",
            nombreDelLocal: "Veterinaria Sanitas",
            ubicacion:
              "Víctor Martínez 120, C1406 Cdad. Autónoma de Buenos Aires",
            longitud: "-58.44477141829615",
            latitud: "-34.62379086909921,",
          },
          {
            name: "beto",
            email: "",
            numero: "",
            nombreDelLocal: "vets cats",
            ubicacion: "",
            longitud: "",
            latitud: "",
          },
        ],
      });
    } catch (error) {}
  } catch (error) {
    console.log("no me pude conectar");
  }
})();

//nombreDelLocal String
//ubicacion String
//latitud Float
//longitud Float
//email String @unique
//numero String
