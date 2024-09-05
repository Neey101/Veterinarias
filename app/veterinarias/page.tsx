import { Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

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
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <Container>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Container>
);