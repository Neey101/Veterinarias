import { Box, Container, Paper, Stack, styled } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function page() {
  return (
    <Container maxWidth={"sm"}>
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
      <Typography
        gutterBottom
        sx={{ color: "text.secondary", textAlign: "center", fontSize: 20 }}
      >
        F,Federico Garcia Lorca 53, 1405
      </Typography>

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
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Container>
);

//agregar un stack para que quede como en los tipos de animales y que queden mas centrados

<Stack spacing={2}>
  <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
    Animales pequenos
  </Typography>
  <Typography sx={{ color: "text.secondary", textAlign: "center", mb: 1.5 }}>
    Gatos Perros
  </Typography>
</Stack>;
