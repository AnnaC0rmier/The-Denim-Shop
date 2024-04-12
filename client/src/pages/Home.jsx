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
                 
            >
                <img src={mainImg} alt="multiple pairs of jeans folded and layed out" style={{ height: '100%', width: '100%', maxHeight:600 }} />
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={women} alt='woman wearing flare jeans and pink top' style={{ height: '100%', width: '100%' }} />
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:'#7188a0', border:'none'}}>
                            <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                <Typography variant="h5" component="div" style={{fontSize:{xs: 20, md:50}}}>
                                    DENIM
                                </Typography>
                                <Typography variant="h5" component="div"  style={{fontSize:{xs: 20, md:50}}}>
                                    FOR HER
                                </Typography>
                                <Typography variant="body2"  style={{fontSize:{xs: 10, m:16}}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button size="small" style={{background:'black', color: '#d1cabd', fontSize:{xs: 10, m:16}}}>SHOP WOMEN</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:'#7188a0', border:'none'}}>
                            <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                                <Typography variant="h5" component="div"  style={{fontSize:{xs: 20, md:50}}}>
                                    DENIM
                                </Typography>
                                <Typography variant="h5" component="div"  style={{fontSize:{xs: 20, md:50}}}>
                                    FOR HIM
                                </Typography>
                                <Typography variant="body2"  style={{fontSize:{xs: 10, m:16}}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button size="small" style={{background:'black', color: '#d1cabd', fontSize:{xs: 10, m:16}}}>SHOP MEN</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={men} alt='man wearing denim jacket and skinny jeans standing in the street' style={{ height: '100%', width: '100%' }} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}


