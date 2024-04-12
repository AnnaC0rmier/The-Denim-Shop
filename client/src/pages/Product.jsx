import React from 'react';
import { useParams } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct'; 


const Product = () => {
    const { productId } = useParams();


    return (
        <div>
            <SingleProduct productId={productId} />
        </div>
    )
}

export default Product