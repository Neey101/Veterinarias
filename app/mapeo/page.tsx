import { Container, Typography } from "@mui/material";

import Mapa from "./components/Mapa";
import Veterianarias from "./components/GaleriaDeVeterinarias";

export default function page() {
  return (
    <Container maxWidth="sm">
      <Mapa />

      <Typography variant="h6" color="inherit" component="div" align="center">
        Veterinarias sugeridas
      </Typography>

      <Veterianarias />
    </Container>
  );
}
