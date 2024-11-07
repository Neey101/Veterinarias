import { Divider, Stack } from "@mui/material";
import React from "react";
import TarjetaVeterianaria from "./TarjetaVeterinaria";

const GaleriaDeVeterinarias = () => {
  return (
    <Stack
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <TarjetaVeterianaria />
      <TarjetaVeterianaria />
    </Stack>
  );
};

export default GaleriaDeVeterinarias;
