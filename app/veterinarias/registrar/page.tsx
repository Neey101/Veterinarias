"use client";

import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useFormState } from "react-dom";
import { registrarNuevaVeterinaria } from "../actions";

const FormularioVeterinaria = () => {
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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#FFFEFE", // Fondo blanco
        padding: 4,
      }}
    >
      {/* Cuadro con el título "Formulario" */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#768a4f", // Color verde
          borderRadius: "8px",
          mb: 4, // Margen inferior
          p: 2, // Padding
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" color="white">
          Formulario
        </Typography>
      </Box>

      <Box
        component="form"
        action={disparador}
        sx={{
          width: "100%",
          maxWidth: "600px", // Ancho máximo del formulario
          backgroundColor: "white", // Fondo blanco
          padding: 3,
          borderRadius: "8px",
          boxShadow: 3, // Sombra para el formulario
        }}
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
          name="ubicacion"
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none", // Evitar que el texto se convierta a mayúsculas
          }}
        >
          Guardar Veterinaria
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioVeterinaria;
