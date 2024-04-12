import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, flexShrink: 1 }}>
            DENIM SHOP
          </Typography>
          
          <Link to= '/category/6618bed3366811b80e60420b'><Button style={{ color: 'white', margint: 10 }}>MEN</Button></Link>
          <Link to ='/category/6618bed3366811b80e60420c'><Button style={{ color: 'white', margin: 10 }}>WOMEN</Button></Link>
            <FavoriteBorderIcon style={{ color: 'white', margin: 10 }} />
            <AccountCircleIcon style={{ color: 'white', margin: 10 }} />
            <ShoppingBagIcon style={{ color: 'white', margin: 10 }} />
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}


