//formulario
"use client";

import React from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { useFormState } from "react-dom";
import { registrarNuevaVeterinaria } from "../actions";
import HomeIcon from "@mui/icons-material/Home"; // Icono de casa
import Link from "next/link"; // Link de Next.js

const FormularioVeterinaria = () => {
  const accion = async (_: any, data: FormData) => {
    const local = data.get("local");
    const ubicacion = data.get("ubicacion");
    const email = data.get("email");
    const numero = data.get("número");
    const latitud = parseFloat(data.get("latitud") as string);
    const longitud = parseFloat(data.get("longitud") as string);
    
    registrarNuevaVeterinaria(
      local?.toString()!,
      ubicacion?.toString()!,
      numero?.toString()!,
      email?.toString()!,
      latitud,
      longitud
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
        backgroundColor: "#FFFEFE",
        padding: 4,
      }}
    >
      {/* Contenedor del encabezado con el botón */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#768a4f", // Verde
          borderRadius: "8px",
          mb: 4,
          p: 2,
          display: "flex",
          alignItems: "center",
          position: "relative", // Permite posicionar el botón sin afectar el texto
        }}
      >
        {/* Botón a la izquierda */}
        <Box sx={{ position: "absolute", left: 10 }}>
          <Link href="http://localhost:3001" passHref>
            <IconButton sx={{ color: "white" }}>
              <HomeIcon />
            </IconButton>
          </Link>
        </Box>

        {/* Texto centrado */}
        <Typography variant="h4" color="white" sx={{ flex: 1, textAlign: "center" }}>
          Formulario
        </Typography>
      </Box>

      <Box
        component="form"
        action={disparador}
        sx={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "white",
          padding: 3,
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <TextField label="Nombre del Local" name="local" fullWidth required sx={{ mb: 2 }} />
        <TextField label="Ubicación" name="ubicacion" fullWidth required sx={{ mb: 2 }} />
        <TextField label="Email" name="email" fullWidth required sx={{ mb: 2 }} />
        <TextField label="Número" name="número" fullWidth required sx={{ mb: 2 }} />
        <TextField label="Latitud" name="latitud" fullWidth required sx={{ mb: 2 }} />
        <TextField label="Longitud" name="longitud" fullWidth required sx={{ mb: 2 }} />
        <Button type="submit" variant="contained" color="primary" sx={{ textTransform: "none" }}>
          Guardar Veterinaria
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioVeterinaria;
