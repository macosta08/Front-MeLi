/* Componente encargado de hacer el llamado al servidor 
cada vez que cambie la URL y rederizar el Breadcrumb y el 
contenerdor del detalle del producto */

import React from 'react';

import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import { ContainerDetail } from '../containerDetail/ContainerDetail';
import { Spinner } from '../spinner/Spinner';
import './ProductDetail.css';

const product = {
  item: {
    picture:
      'https://tse1.mm.bing.net/th?id=OIP.7umwq7EGJ384nQ9QDMd67AHaEU&pid=Api&P=0&w=301&h=175',
    title: 'Producto 1',
    price: { amount: 88888, decimals: 6666, currency: 'USD' },
    condition: 'new',
    sold_quantity: 0,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur nisi, euismod euismod nisi nisl euismod nisi. Donec euismod, nisl eget consectetur consectetur, nisi nisl consectetur',
  },
};

const ProductDetail = () => {
  return (
    <>
      <main>
        <Breadcrumb categories={['ropa', 'casa', 'muebles', 'mas']} />
        <ContainerDetail product={product.item} />
      </main>
      <Spinner isLoading={!product} />
    </>
  );
};

export default ProductDetail;
