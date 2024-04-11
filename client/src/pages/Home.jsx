import * as React from 'react';
import Box from '@mui/material/Box';
import mainImg from '../assets/img/homePage/main.jpg';
import Grid from '@mui/material/Grid';
import '../assets/css/main.css';
import women from '../assets/img/homePage/women.jpg'
import men from '../assets/img/homePage/men.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <>
            <Box
                height='auto'
                width='100%'
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
            >
                <img src={mainImg} alt="Main Image" style={{ height: '100%', width: '100%', maxHeight:600 }} />
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={women} style={{ height: '100%', width: '100%' }} />
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:'#d1cabd', border:'none', raised:false}}>
                            <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                <Typography variant="h5" component="div" style={{fontSize:50}}>
                                    DENIM
                                </Typography>
                                <Typography variant="h5" component="div" style={{fontSize:50}}>
                                    FOR HER
                                </Typography>
                                <Typography variant="body2" style={{fontSize:16}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button size="small" style={{background:'#3b5253', color: '#d1cabd', fontSize:16}}>SHOP WOMEN</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:'#d1cabd', border:'none', raised:false}}>
                            <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                <Typography variant="h5" component="div" style={{fontSize:50}}>
                                    DENIM
                                </Typography>
                                <Typography variant="h5" component="div" style={{fontSize:50}}>
                                    FOR HIM
                                </Typography>
                                <Typography variant="body2" style={{fontSize:16}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button size="small" style={{background:'#3b5253', color: '#d1cabd', fontSize:16}}>SHOP MEN</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={men} style={{ height: '100%', width: '100%' }} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}


