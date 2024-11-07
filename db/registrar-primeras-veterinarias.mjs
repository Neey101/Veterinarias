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
            email: "",
            numero: "",
            nombreDelLocal: "vets cats",
            ubicacion: "",
            longitud: "",
            latitud: "",
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
