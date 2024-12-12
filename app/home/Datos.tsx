"use client";
import Image from "next/image";
import { Box, Typography, Link } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const enlacesaDatos = [
  {
    datos: "¿Por que debo esterilizar a mi mascota?",
    enlace:
      "https://www.aspca.org/nyc/recursos-para-personas-que-hablan-espanol/10-razones-principales-para-esterilizar-o-castrar-su",
  },
  {
    datos: "Aplicar vacunas",
    enlace: "https://es.wikihow.com/aplicar-una-vacuna-a-un-perro",
  },
  {
    datos: "¿Como adapto mi casa para mi gato?",
    enlace:
      "https://www.expertoanimal.com/como-adaptar-una-casa-a-los-gatos-23942.html",
  },
  {
    datos: "Entrenamientos para tu perro",
    enlace:
      "https://hospitalveterinariodonostia.com/nueve-maneras-de-ejercitar-a-tu-perro/",
  },
];
function Datos() {
  const settings = {
    dots: true,
  };

  return (
    <Box
      width="80vw"
      mt={10} // Ajuste del margen superior
      p={2}
      bgcolor="#FFFEFE" // Color de fondo
      borderRadius="16px"
      boxShadow={5} // Sombreado
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="auto"
    >
      <Box
        width="70vw" // Ancho aumentado
        height="48px" // Altura reducida
        p={1} // Espaciado
        bgcolor="#768a4f"
        borderRadius="16px"
        display="flex"
        justifyContent="center" // Centrado horizontal
        alignItems="center" // Centrado vertical
      >
        <Typography variant="h6" color="white">
          Datos sobre nuestras mascotas
        </Typography>
      </Box>

      {/* Enlaces dentro del mismo contenedor */}
      <Box
        mt={1}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="60vw"
      >
        {enlacesaDatos.map((enlace) => (
          <Link
            key={enlace.enlace}
            href={enlace.enlace}
            underline="hover"
            mb={1}
            sx={{ color: "#768a4f" }}
          >
            {enlace.datos}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Datos;
