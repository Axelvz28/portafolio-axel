import { Typography, Container } from '@mui/material';

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1">Página de Inicio</Typography>
      <Typography>Bienvenido a mi portafolio</Typography>
    </Container>
  );
}

export default Home;