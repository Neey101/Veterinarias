//esto borra, solo es un mensaje para que aparezca en los commits :D
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
