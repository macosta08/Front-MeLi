/* Componente encargado rederizar dinamicamente cada tarjeta*/

import React from 'react';
import Product from '../product/Product';

interface ProductType {
  id: string;
  title: string;
  price: { amount: { price: number; currency: string } };
  picture: string;
  location: string;
  free_shipping: boolean;
}

interface Props {
  products: ProductType[];
}

const Products = ({ products }: Props) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
