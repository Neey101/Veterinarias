import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const TarjetaVeterinaria = ({
  nombre,
  email,
  numero,
  direccion,
  foto,
  latitud,
  longitud,
}: {
  nombre: string;
  email: string;
  numero: string;
  direccion: string;
  foto: string;
  latitud: number;
  longitud: number;
}) => {
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Card
          component={"a"}
          href={"http://localhost:3001/veterinarias/"}
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
            <CardMedia component="img" height="140" image={foto} alt="vetes" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {nombre}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnRoundedIcon sx={{ color: "text.primary" }} />
                <Link
                  href={`geo:${latitud},${longitud};u=35`} // Concatenar latitud y longitud
                  underline="none"
                  color="inherit"
                >
                  {direccion}
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <PermPhoneMsgRoundedIcon sx={{ color: "text.primary" }} />
                <Link href={"tel:" + numero} color="inherit">
                  {numero}
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <AccountCircleRoundedIcon sx={{ color: "text.primary" }} />
                <Link href={"mailto:" + email} color="inherit">
                  {email}
                </Link>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Container>
  );
};

export default TarjetaVeterinaria;
//agregar el nombre de cada card
//ponerle sombra a las card
//
