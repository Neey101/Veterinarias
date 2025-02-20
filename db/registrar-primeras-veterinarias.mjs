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
            email: "hocicos@",
            numero: "01127261756",
            nombreDelLocal: "Veterinaria Hocicos",
            ubicacion:
              "Fragata Pres. Sarmiento 7, C1406 Cdad. Autónoma de Buenos Aires",
            longitud: -58.44807526909882,
            latitud: -34.62288761496829,
          },
          {
            email: "Honorio@",
            numero: "01152638681",
            nombreDelLocal: "Veterinaria Honorio",
            ubicacion:
              "Av. Dr. Honorio Pueyrredón 315, C1405 BAA, Cdad. Autónoma de Buenos Aires",
            longitud:  -58.440197588438735,
            latitud: -34.615250039597,
          },
          {
            email: "Delfi's@",
            numero: "21312694",
            nombreDelLocal: "Centro Medico Veterinario Delfi's",
            ubicacion:
              "Av. José María Moreno 515, C1424 Cdad. Autónoma de Buenos Aires",
            longitud: -58.434608731497136,
            latitud: -34.62446621177988,
          },
          {
            email: "Guayaquil@",
            numero: "01133881507",
            nombreDelLocal: "Veterinaria Guayaquil",
            ubicacion:
              "Guayaquil 650, C1424CAR Cdad. Autónoma de Buenos Aires",
            longitud:  -58.4379944965085,
            latitud: -34.62145103080209,
          },
          {
            email: "CAVI@",
            numero: "35338108",
            nombreDelLocal: "CAVI Clínica Veterinaria",
            ubicacion:
              "Av. La Plata 402, C1235 Cdad. Autónoma de Buenos Aires",
            longitud: -58.428190293294385,
            latitud: -34.619463739787, 
          },
          {
            email: "VETERINARIA CABALLITO@",
            numero: "01144316375",
            nombreDelLocal: "VETERINARIA CABALLITO",
            ubicacion:
              "F, Federico García Lorca 53, 1405 Buenos Aires",
            longitud: -58.4445504284252,
            latitud: -34.620873267288, 
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
