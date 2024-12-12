import { Divider, Stack } from "@mui/material";
import React from "react";
import TarjetaVeterinaria from "./TarjetaVeterinaria";
import db from "@/db";

const GaleriaDeVeterinarias = async () => {
  const veterinarias = await db.veterinaria.findMany({});
  return (
    <Stack
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      {veterinarias.map((veterinaria) => {
        return (
          <TarjetaVeterinaria
            nombre={veterinaria.nombreDelLocal}
            email={veterinaria.email}
            numero={veterinaria.numero}
            direccion={veterinaria.ubicacion}
            foto={"https://picsum.photos/200/300?grayscale"}
            latitud={veterinaria.latitud}
            longitud={veterinaria.longitud}
          />
        );
      })}
    </Stack>
  );
};

export default GaleriaDeVeterinarias;
