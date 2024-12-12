import { Divider, Stack } from "@mui/material";
import React from "react";
import TarjetaVeterinaria from "./TarjetaVeterinaria";

const GaleriaDeVeterinarias = () => {
  return (
    <Stack
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <TarjetaVeterinaria />
      <TarjetaVeterinaria />
    </Stack>
  );
};

export default GaleriaDeVeterinarias;
