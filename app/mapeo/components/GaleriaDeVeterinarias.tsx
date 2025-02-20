import { Divider, ImageList, Stack } from "@mui/material";
import React from "react";
import TarjetaVeterinaria from "./TarjetaVeterinaria";
import db from "@/db";

const GaleriaDeVeterinarias = async () => {
  const veterinarias = await db.veterinaria.findMany({});
  return (
    <ImageList cols={2} rowHeight={164} gap={25} >
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
    </ImageList>
  );
};

export default GaleriaDeVeterinarias;
