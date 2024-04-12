import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORY } from '../utils/queries';

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
    <div className="product-list">
      {data.category.products.map((product) => (
        <div key={product._id} className="product-card">
          <img
            src={`/images/${product.image}`}
            alt={product.productName}
            style={{ maxWidth: '100px', maxHeight: '100px' }} // Adjust the maximum width and height as per your requirement
          />
          <h3>{product.productName}</h3>
          <p>Price: {product.productPrice}</p>
          <p>Size: {product.productSize}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

