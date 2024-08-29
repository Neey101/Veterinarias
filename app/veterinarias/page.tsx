import { Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "@mui/material";

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
        <Typography variant="h3" gutterBottom>
          Ola gigante
        </Typography>

        <Typography variant="h4" gutterBottom>
          1 1 1
        </Typography>
      </Stack>
    </Container>
  );
}
