import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Mapa from "./components/Mapa";
import Veterianarias from "./components/GaleriaDeVeterinarias";
import MenuIcon from "@mui/icons-material/Menu";

export default function Page() {
  return (
    <Box sx={{ backgroundColor: "lightblue", minHeight: "100vh" }}>
      <Container maxWidth="sm">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit" component="div">
              Informacion mapa
            </Typography>
          </Toolbar>
        </AppBar>

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
