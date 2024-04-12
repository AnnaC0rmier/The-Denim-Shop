
import '../assets/css/main.css'

import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/StyleCard'; 

const Category = () => {
  
  const { categoryId } = useParams();
  console.log(categoryId)

  return (
    <div>
      <h2>Category Page</h2>
      <ProductList categoryId={categoryId} /> 
    </div>
  );
};

export default Category;



