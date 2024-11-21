//esto borra, solo es un mensaje para que aparezca en los commits :D
// buscador/FormularioVeterinaria.tsx
"use client"; // Asegúrate de incluir esta línea si usas hooks de React

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
export const regristrarUnaNuevaVeterinaria = async (FormData: FormData) => {};

const FormularioVeterinaria = () => {
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
      <TextField
        label="Latitud"
        name="latitud"
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Longitud"
        name="longitud"
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

export default FormularioVeterinaria;
