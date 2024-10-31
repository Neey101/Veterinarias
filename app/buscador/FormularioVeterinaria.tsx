// buscador/FormularioVeterinaria.tsx
"use client"; // Asegúrate de incluir esta línea si usas hooks de React

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface FormularioVeterinariaProps {
  onSubmit: (veterinaria: {
    nombreDelLocal: string;
    ubicacion: string;
    latitud: number;
    longitud: number;
    email: string;
    numero: string;
  }) => void;
}

const FormularioVeterinaria: React.FC<FormularioVeterinariaProps> = ({
  onSubmit,
}) => {
  const [nombreDelLocal, setNombreDelLocal] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nuevaVeterinaria = {
      nombreDelLocal,
      ubicacion,
      latitud: parseFloat(latitud),
      longitud: parseFloat(longitud),
      email,
      numero,
    };
    onSubmit(nuevaVeterinaria);
    // Limpia el formulario
    setNombreDelLocal("");
    setUbicacion("");
    setLatitud("");
    setLongitud("");
    setEmail("");
    setNumero("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ my: 2 }}>
      <TextField
        label="Nombre del Local"
        value={nombreDelLocal}
        onChange={(e) => setNombreDelLocal(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Ubicación"
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Latitud"
        value={latitud}
        onChange={(e) => setLatitud(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Longitud"
        value={longitud}
        onChange={(e) => setLongitud(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <TextField
        label="Número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
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
