
import '../assets/css/main.css'

import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/StyleCard'; 

const Category = () => {
  
  const { categoryId } = useParams();


  return (
    <div>
      <ProductList categoryId={categoryId} /> 
    </div>
  );
};

export default Category;



