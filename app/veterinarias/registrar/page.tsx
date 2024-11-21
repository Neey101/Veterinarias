// este es un comentario para que se guarde, el cambio fue que al page.txt estaba en la carpeta buscador y la cambie a la carpeta veterinarias - registrar
// buscador/FormularioVeterinaria.tsx
"use client";

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
export const regristrarUnaNuevaVeterinaria = async (FormData: FormData) => {};

const page = () => {
  return (
    <Box component="form" action={regristrarUnaNuevaVeterinaria} sx={{ my: 2 }}>
      <TextField
        label="Nombre del Local"
        name="local"
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Ubicación"
        name="ubicación"
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField label="Email" name="email" fullWidth required sx={{ mb: 2 }} />
      <TextField
        label="Número"
        name="número"
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Guardar Veterinaria
      </Button>
    </Box>
  );
};

export default page;
