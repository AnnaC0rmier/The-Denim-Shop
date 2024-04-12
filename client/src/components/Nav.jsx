import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, flexShrink: 1 }}>
            THE DENIM SHOP
          </Typography>
          
            <Button style={{ color: 'white', margint: 10 }}>MEN</Button>
            <Button style={{ color: 'white', margin: 10 }}>WOMEN</Button>
            <FavoriteBorderIcon style={{ color: 'white', margin: 10 }} />
            <AccountCircleIcon style={{ color: 'white', margin: 10 }} />
            <ShoppingBagIcon style={{ color: 'white', margin: 10 }} />
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}


