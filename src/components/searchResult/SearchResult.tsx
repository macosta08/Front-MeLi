import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import Products from '../products/Products';
import { Pagination } from '../pagination/Pagination';
import './SearchResult.css';

const data = {
  items: [
    {
      id: '1',
      title: 'Producto 1',
      price: { amount: { price: 5555, currency: 'USD' } },
      picture:
        'https://tse1.mm.bing.net/th?id=OIP.7umwq7EGJ384nQ9QDMd67AHaEU&pid=Api&P=0&w=301&h=175',
      location: 'Madrid',
      free_shipping: true,
    },
    {
      id: '2',
      title: 'Producto 2',
      price: { amount: { price: 5555, currency: 'USD' } },
      picture:
        'https://tse1.mm.bing.net/th?id=OIP.7umwq7EGJ384nQ9QDMd67AHaEU&pid=Api&P=0&w=301&h=175',
      location: 'Madrid',
      free_shipping: true,
    },
    {
      id: '3',
      title: 'Producto 3',
      price: { amount: { price: 5555, currency: 'USD' } },
      picture:
        'https://tse1.mm.bing.net/th?id=OIP.7umwq7EGJ384nQ9QDMd67AHaEU&pid=Api&P=0&w=301&h=175',
      location: 'Madrid',
      free_shipping: true,
    },
    {
      id: '4',
      title: 'Producto 4',
      price: { amount: { price: 5555, currency: 'USD' } },
      picture:
        'https://tse1.mm.bing.net/th?id=OIP.7umwq7EGJ384nQ9QDMd67AHaEU&pid=Api&P=0&w=301&h=175',
      location: 'Madrid',
      free_shipping: true,
    },
    {
      id: '5',
      title: 'Producto 5',
      price: { amount: { price: 5555, currency: 'USD' } },
      picture:
        'https://tse1.mm.bing.net/th?id=OIP.7umwq7EGJ384nQ9QDMd67AHaEU&pid=Api&P=0&w=301&h=175',
      location: 'Madrid',
      free_shipping: true,
    },
    {
      id: '6',
      title: 'Producto 6',
      price: { amount: { price: 5555, currency: 'USD' } },
      picture:
        'https://tse1.mm.bing.net/th?id=OIP.7umwq7EGJ384nQ9QDMd67AHaEU&pid=Api&P=0&w=301&h=175',
      location: 'Madrid',
      free_shipping: true,
    },
  ],
};

const SearchResult = () => {
  const location = useLocation();
  const search = queryString.parse(location.search);
  const searchProduct = search.search;
  //Se calculan los indices para poder aplicar el slice
  //en el arreglo de items
  const [page, setPage] = useState<number>(1);
  const [amount] = useState<number>(4);
  const idxIni = (page - 1) * amount;
  const idxFin = page * amount;
  return (
    <>
      <>
        <main>
          <Breadcrumb categories={['ropa', 'casa', 'muebles', 'mas']} />
          <Products products={data.items.slice(idxIni, idxFin)} />
        </main>
        <Pagination
          page={page}
          setPage={setPage}
          itemsPerPage={amount}
          itemsCount={data.items.length}
        />
      </>
    </>
  );
};

export default SearchResult;
