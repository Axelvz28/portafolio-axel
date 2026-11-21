import { Box } from '@mui/material';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: '#0B0F19', minHeight: '100vh' }}>
      <Hero />
      <AboutSection />
      <ProjectsSection />
    </Box>
  );
}