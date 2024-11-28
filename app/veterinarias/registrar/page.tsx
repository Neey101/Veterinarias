// buscador/FormularioVeterinaria.tsx
"use client";

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useFormState } from "react-dom";
import { registrarNuevaVeterinaria } from "../actions";
const page = () => {
  const accion = async (_: any, data: FormData) => {
    const local = data.get("local");
    const ubicacion = data.get("ubicacion");
    const email = data.get("email");
    const numero = data.get("número");
    registrarNuevaVeterinaria(
      local?.toString()!,
      ubicacion?.toString()!,
      numero?.toString()!,
      email?.toString()!
    );
  };
  const [mensaje, disparador] = useFormState(accion, undefined);
  return (
    <Box
      component="form"
      action={disparador}
      sx={{ my: 2, backgroundColor: "white", padding: 2 }}
    >
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
