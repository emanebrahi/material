
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Menu', 'About', 'Contact'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#c9a998' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ '&:hover': { color: '#ffee03', transform: "Scale(1.1)", transition: "transform 1s" }, my: 2, color: page === 'Home' ? 'yellow' : 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography sx={{ flexGrow: "1", textAlign: "center" }}>

            <img src='https://websitedemos.net/eggcellent-restaurant-04/wp-content/uploads/sites/1220/2023/03/logo-regular.png' />

          </Typography>
          <Button variant="outlined"
            sx={{
              '&:hover': { backgroundColor: '#ffa001', borderColor: "white" },
              color: "white",
              width: "15rem",
              border: "1px solid white",
              borderRadius: "20px",
              fontFamily: "Anton",
              display: { xs: 'none', md: 'flex' }
            }}>MAKE RESERVATION</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
