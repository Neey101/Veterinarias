import { VerifiedTwoTone } from "@mui/icons-material";
import { PrismaClient } from "@prisma/client";
(async () => {
  try {
    const db = new PrismaClient();
    await db.$connect();
    try {
      await db.veterinaria.createMany({
        data: [
          {
            email: "vetspet@",
            numero: "01149034976",
            nombreDelLocal: "Veterinaria Pet Mundo",
            ubicacion: "Rojas 62, C1405AAB Cdad. Autónoma de Buenos Aires",
            longitud: -58.44190336062568,
            latitud: -34.61954373480866,
          },
          {
            email: "sanitas@",
            numero: "01144323889",
            nombreDelLocal: "Veterinaria Sanitas",
            ubicacion:
              "Víctor Martínez 120, C1406 Cdad. Autónoma de Buenos Aires",
            longitud: -58.44477141829615,
            latitud: -34.62379086909921,
          },
          {
            email: "hosicos@",
            numero: "01127261756",
            nombreDelLocal: "Veterinaria Hocicos",
            ubicacion:
              "Fragata Pres. Sarmiento 7, C1406 Cdad. Autónoma de Buenos Aires",
            longitud: -58.44807526909882,
            latitud: -34.62288761496829,
          },
        ],
      });
    } catch (error) {
      console.log("no pude crear las veterinarias");
      console.table(error);
    } finally {
    }
  } catch (error) {
    console.log("no me pude conectar");
  } finally {
  }
})();

//nombreDelLocal String
//ubicacion String
//latitud Float
//longitud Float
//email String @unique
//numero String
