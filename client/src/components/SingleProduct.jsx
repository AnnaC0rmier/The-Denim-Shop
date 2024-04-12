import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const SingleProduct = ({ productId }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);

    const { loading, error, data, refetch } = useQuery(QUERY_PRODUCT, {
        variables: { id: productId },
    });

    useEffect(() => {
        refetch({ id: productId });
    }, [productId, refetch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const product = data.product;
    const productSize = product.productSize;

    const handleChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <img
                    src={`/images/${product.image}`}
                    alt={product.productName}
                    style={{ width: '100%', height: 'auto' }}
                />
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                            <div>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                    {product.productName}
                                </Typography>
                                <Typography variant="body2">
                                    {product.productPrice}
                                </Typography>
                            </div>
                            {isFavorite ? (
                                <FavoriteIcon
                                    style={{ color: 'red', marginLeft: 10, marginBottom: 10 }}
                                    onClick={toggleFavorite}
                                />
                            ) : (
                                <FavoriteBorderIcon
                                    style={{ color: 'black', marginLeft: 10, marginBottom: 10 }}
                                    onClick={toggleFavorite}
                                />
                            )}
                        </div>
                        <Typography variant="body2" sx={{ mb: 3 }}>
                            {product.description}
                        </Typography>
                        <Box sx={{ minWidth: 120, mb: 1 }}>
                            <FormControl fullWidth>
                                <InputLabel id="size-select-label">Size</InputLabel>
                                <Select
                                    labelId="size-select-label"
                                    id="size-select"
                                    value={selectedSize}
                                    label="Size"
                                    onChange={handleChange}
                                >
                                    {productSize.map((size, index) => (
                                        <MenuItem key={index} value={size}>{size}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button component={Link} to={`/product/${product.id}`} size="small">ADD TO CART</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}

export default SingleProduct;



