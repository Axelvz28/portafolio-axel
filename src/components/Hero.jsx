import { Box, Typography, Button, Container, Stack } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';


import edificio1 from '../assets/edificio1.jpg'; 
import edificio2 from '../assets/edificio2.jpg'; 

export default function Hero() {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#0B0F19', 
        color: 'white', 
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
     
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '60%',
          height: '100%',
          backgroundImage: `url(${edificio2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          maskImage: 'linear-gradient(to left, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
          zIndex: 0
        }} 
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={4} 
          alignItems="center"
        >
          
         
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 900,
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: 1.1,
                fontSize: { xs: '3rem', md: '5rem' },
                letterSpacing: '-1px'
              }}
            >
              AXEL <span style={{ color: '#00BFFF' }}>LUGO</span>
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                mt: 1, 
                fontWeight: 600, 
                color: 'white',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              Proyectista CAD y Desarrollador Web
            </Typography>
            
            
            <Box sx={{ borderLeft: '3px solid #00BFFF', pl: 2, my: 4 }}>
              <Typography variant="body1" sx={{ color: '#A0A0A0', maxWidth: '400px', fontSize: '1.1rem' }}>
                Planos, modelos y código para convertir ideas en realidad.
              </Typography>
            </Box>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                variant="contained" 
                startIcon={<PlayArrowIcon />}
                sx={{ 
                  backgroundColor: '#00BFFF', 
                  color: '#0B0F19', 
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  px: 4,
                  py: 1.2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: '#009ACD' }
                }}
              >
                Ver Proyectos
              </Button>
              
              <Button 
                variant="outlined" 
                startIcon={<CodeIcon />}
                sx={{ 
                  color: 'white', 
                  borderColor: '#A0A0A0',
                  borderRadius: '25px',
                  px: 4,
                  py: 1.2,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': { borderColor: '#00BFFF', color: '#00BFFF' }
                }}
              >
                Conocer mis habilidades
              </Button>
            </Stack>
          </Box>

          
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Box 
              component="img"
              src={edificio1}
              alt="Render 3D Residencial"
              sx={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '450px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0px 10px 30px rgba(0, 191, 255, 0.15)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            />
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}