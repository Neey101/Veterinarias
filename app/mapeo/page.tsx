import {
  Container,
  Typography,
  Box,
  MenuClassKey,
} from "@mui/material";
import Mapa from "./components/Mapa";
import Veterianarias from "./components/GaleriaDeVeterinarias";
import * as React from 'react';
import Menu from "./components/Menu";

export default function Page() {
  return (
    <Box sx={{ backgroundColor: "lightblue", minHeight: "100vh" }}>
      <Container maxWidth="sm">
      <Menu/>
        <Box
 
          sx={{
            bgcolor: "#768A4F",
            boxShadow: 3,
            p: 2,
            my: 2,
          }}
        >
          <Typography variant="h6" color="inherit" align="center">
            Zona de mapeo
          </Typography>
        </Box>

        <Mapa />

        <Box
          sx={{
            bgcolor: "#768A4F",
            boxShadow: 3,
            p: 2,
            my: 2,
          }}
        >
          <Typography variant="h6" color="inherit" align="center">
            Veterinarias sugeridas
          </Typography>
        </Box>
        <Veterianarias />
      </Container>
    </Box>
  );
}

