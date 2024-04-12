import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY } from '../utils/queries';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';




const ProductList = ({ categoryId }) => {
  const { loading, error, data, refetch } = useQuery(QUERY_CATEGORY, {
    variables: { id: categoryId },
  });

  useEffect(() => {
    refetch({ id: categoryId });
  }, [categoryId, refetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Grid container spacing={2}>
    {data.category.products.map((product) => (
      <Grid item key={product._id} xs={12} sm={6} lg={4}>
        <div className="product-card">
          <img
            src={`/images/${product.image}`}
            alt={product.productName}
            style={{ maxWidth: '100%', height: 'auto', maxHeight:600 }}
          />
          <h3>{product.productName}</h3>
        </div>
       
      </Grid>
    ))}
  </Grid>
  );
};

export default ProductList;




