import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#121212' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit" component={NavLink} to="/">Inicio</Button>
          <Button color="inherit" component={NavLink} to="/sobre-mi">Sobre mí</Button>
          <Button color="inherit" component={NavLink} to="/proyectos">Proyectos</Button>
          <Button color="inherit" component={NavLink} to="/habilidades">Habilidades</Button>
          <Button color="inherit" component={NavLink} to="/contacto">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;