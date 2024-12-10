"use client"; // Asegúrate de incluir esta línea para que todo el componente se ejecute en el cliente

import Image from "next/image";
import styles from "./page.module.css";
import Buscador from "./buscador/Buscador";
import Carrusel from "./home/Carrusel";
import Datos from "./home/Datos";
import Contenedor from "./home/Contenedor";
import { Box, Button } from "@mui/material"; // Importa Box y Button de Material-UI
import Link from "next/link"; // Importa el componente Link de Next.js
import { TipoDeMascota } from "@/types";

export default function Home() {
  return (
    <Contenedor>
      <Buscador />
      <Carrusel />
      <Datos />
      {/* Botón para ir a otra página */}
      <Box display="flex" justifyContent="center" mt={4}> {/* Añadir el Box para centrar el botón */}
        <Box
          component="a"
          href="http://localhost:3000/veterinarias/registrar"
          sx={{
            display: 'inline-block',
            textDecoration: 'none',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)", // Agrandar el botón
              },
              boxShadow: 3, // Añadir una sombra para mejorar el efecto visual
              textTransform: "none", // Evitar que el texto se convierta a mayúsculas
            }}
          >
            Formulario para agregar tu veterinaria
          </Button>
        </Box>
      </Box>
    </Contenedor>
  );
}
