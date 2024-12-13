import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";



export default function page() {
  return (
    <Box sx={{ backgroundColor: "lightblue", minHeight: "100vh" }}>
      <Container maxWidth={"sm"} sx={{ backgroundColor: "white" }}>
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
              Veterinaria informacion
            </Typography>
          </Toolbar>
        </AppBar>

        <Stack spacing={2}>
          <Box height={"50vh"} position={"relative"}>
            <Image
              src={"https://picsum.photos/200/300?grayscale"}
              alt={"foto de veterinaria"}
              fill
            />
          </Box>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <Container>
    <CardContent>
      <Typography variant="h1" sx={{ textAlign: "center", fontSize: 40 }}>
        Centro Clinico
      </Typography>

      <Typography component="h2" sx={{ textAlign: "center", fontSize: 35 }}>
        Veterinario los papus
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", textAlign: "left", fontSize: 20 }}
        >
          <LocationOnRoundedIcon sx={{ color: "text.primary" }} />
          <Link
            href="geo:-34.62087903097601, -58.444463937978874;u=35"
            underline="none"
            color="inherit"
          >
            Federico García Lorca 53, Cdad. Autónoma de Buenos Aires
          </Link>
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", textAlign: "center", fontSize: 20 }}
        >
          <PermPhoneMsgRoundedIcon sx={{ color: "text.primary" }} />
          <Link href="tel:+54 9 11 5577-8855" color="inherit">
            11 5577-8855
          </Link>
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography
          gutterBottom
          sx={{ color: "text.secondary", textAlign: "center", fontSize: 20 }}
        >
          <AccountCircleRoundedIcon sx={{ color: "text.primary" }} />
          <Link href="mailto:anabelhuanaco@gmail.com" color="inherit">
            anabelhuanaco@gmail.com
          </Link>
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Stack spacing={2}>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Tipos de animales
          </Typography>
          <Typography
            sx={{ color: "text.secondary", textAlign: "center", mb: 1.5 }}
          >
            Animales pequenos
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            24 horas
          </Typography>
          <Typography
            sx={{ color: "text.secondary", textAlign: "center", mb: 1.5 }}
          >
            No
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Stack spacing={2}>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Tipo de
          </Typography>
          <Typography
            sx={{ color: "text.secondary", textAlign: "center", mb: 1.5 }}
          >
            Gatos Perros
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Especialidades
          </Typography>
          <Typography
            sx={{ color: "text.secondary", textAlign: "center", mb: 1.5 }}
          >
            Clinico general
          </Typography>
        </Stack>
      </Stack>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Container>
);
//hi
