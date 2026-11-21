import { Box, Typography, Container, Card, CardContent, CardActionArea, Grid, CardMedia } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import proyecto1 from '../assets/edificio2.jpg'; 
import proyecto2 from '../assets/edificio1.jpg';
import proyecto3 from '../assets/logo.jpg'; 

const projects = [
  { title: 'Plano Arquitectónico', subtitle: 'Vivienda Unifamiliar', img: proyecto1 },
  { title: 'Modelo 3D', subtitle: 'Residencia Moderna', img: proyecto2 },
  { title: 'Plano Estructural', subtitle: 'Edificio Comercial', img: proyecto3 },
];

export default function ProjectsSection() {
  return (
    <Box sx={{ backgroundColor: '#0B0F19', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 5 }}>
          Proyectos <span style={{ color: '#00BFFF' }}>Destacados</span>
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ 
                backgroundColor: '#1E1E1E', 
                color: 'white', 
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                '&:hover': { border: '1px solid #00BFFF', transform: 'translateY(-5px)', transition: '0.3s' }
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.img}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, mb: 0 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#A0A0A0' }}>
                        {project.subtitle}
                      </Typography>
                    </Box>
                    <ArrowForwardIosIcon sx={{ color: '#00BFFF', fontSize: '1rem' }} />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}