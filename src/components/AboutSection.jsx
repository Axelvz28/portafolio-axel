import { Box, Typography, Container, Stack, Avatar } from '@mui/material';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import TerminalIcon from '@mui/icons-material/Terminal';

import edificio2 from '../assets/edificio2.jpg'; 

export default function AboutSection() {
  return (
    <Box sx={{ backgroundColor: '#0B0F19', py: 10 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
          
          
          <Box sx={{ flex: 1, width: '100%' }}>
             <Box 
              component="img"
              src={edificio2}
              alt="Wireframe CAD"
              sx={{ 
                width: '100%', 
                borderRadius: '16px',
                border: '1px solid rgba(0, 191, 255, 0.2)',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)'
              }}
            />
          </Box>

         
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
              Sobre <span style={{ color: '#00BFFF' }}>mí</span>
            </Typography>
            <Typography variant="body1" sx={{ color: '#A0A0A0', mb: 4, lineHeight: 1.8 }}>
              Soy un proyectista CAD con experiencia en diseño arquitectónico y modelado 3D, actualmente en proceso de aprendizaje en programación, especialmente en React. Me apasiona transformar ideas en proyectos funcionales, estéticos y eficientes.
            </Typography>

           
            <Stack direction="row" spacing={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: 'rgba(0, 191, 255, 0.1)', color: '#00BFFF', mx: 'auto', mb: 1, width: 56, height: 56 }}>
                  <ArchitectureIcon fontSize="large" />
                </Avatar>
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>Diseño<br/>CAD</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: 'rgba(0, 191, 255, 0.1)', color: '#00BFFF', mx: 'auto', mb: 1, width: 56, height: 56 }}>
                  <ViewInArIcon fontSize="large" />
                </Avatar>
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>Modelado<br/>3D</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ bgcolor: 'rgba(0, 191, 255, 0.1)', color: '#00BFFF', mx: 'auto', mb: 1, width: 56, height: 56 }}>
                  <TerminalIcon fontSize="large" />
                </Avatar>
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>Desarrollo<br/>Web</Typography>
              </Box>
            </Stack>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}