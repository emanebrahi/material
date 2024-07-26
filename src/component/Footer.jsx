
import React from 'react';
import { AppBar, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  const pages = ['Home', 'Menu', 'About', 'Contact'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#c9a998', marginTop: "5rem" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: "1", textAlign: "center" }}>
              <img src='https://websitedemos.net/eggcellent-restaurant-04/wp-content/uploads/sites/1220/2023/03/logo-regular.png' />
            </Box>
          </Toolbar>
          <Toolbar>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
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

            <Box sx={{ display: { md: 'flex' }, margin: "auto" }} >
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
          </Toolbar>

          <Toolbar >
            <Box sx={{ margin: "auto" }}>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Divider />
      <AppBar position="static" sx={{ backgroundColor: '#c9a998' }} >
        <Container maxWidth="md">
          <Toolbar>
            <Typography sx={{ margin: "auto" }} variant="body1" color="white">
              Copyright © 2024 Eggcellent Restaurant | powered by Eggcellent Restaurant
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Footer;
