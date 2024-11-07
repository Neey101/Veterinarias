import {
  AppBar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const TarjetaVeterianaria = () => {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Card
          component={"a"}
          href="http://localhost:3000/veterinarias"
          sx={{
            maxWidth: 345,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)", // Agrandar la tarjeta más
            },
            boxShadow: 3, // Añadir una sombra para mejorar el efecto visual
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300?grayscale"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Caballito
              </Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnRoundedIcon sx={{ color: "text.primary" }} />
                <Link
                  href="geo:-34.62087903097601, -58.444463937978874;u=35"
                  underline="none"
                  color="inherit"
                >
                  Federico García Lorca 53, Cdad. Autónoma de Buenos Aires
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <PermPhoneMsgRoundedIcon sx={{ color: "text.primary" }} />
                <Link href="tel:+54 9 11 5577-8855" color="inherit">
                  11 5577-8855
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <AccountCircleRoundedIcon sx={{ color: "text.primary" }} />
                <Link href="mailto:anabelhuanaco@gmail.com" color="inherit">
                  anabelhuanaco@gmail.com
                </Link>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Container>
  );
};

export default TarjetaVeterianaria;
//agregar el nombre de cada card
//ponerle sombra a las card
//
