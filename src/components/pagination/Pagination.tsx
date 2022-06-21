/*Componente encargado de la paginacion de la lista de productos */

import React from 'react';
import './Pagination.css';

interface Props {
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  itemsCount: number;
  pagesToSee?: number;
}

export const Pagination = ({ page, setPage, itemsPerPage, itemsCount, pagesToSee = 8 }: Props) => {
  const pagesAmount: number = Math.ceil(itemsCount / itemsPerPage);
  const halfPagesToSee = pagesToSee / 2;

  const activePage = (p: number) => (page === p ? 'active-page' : '');

  const iniIdx =
    pagesAmount > pagesToSee && page > halfPagesToSee
      ? page > pagesAmount - halfPagesToSee
        ? pagesAmount - pagesToSee
        : page - halfPagesToSee
      : 0;

  const finIdx = page > halfPagesToSee ? page + halfPagesToSee : pagesToSee;

  const pages: Array<number> = Array.from(Array(pagesAmount), (el, i) => i + 1).slice(
    iniIdx,
    finIdx
  );

  return (
    <div className='pagination'>
      <ul>
        <li>
          <div onClick={() => setPage(1)}>&laquo;</div>
        </li>

        {pages.map((p) => (
          <li key={p}>
            <div className={`${activePage(p)}`} onClick={() => setPage(p)}>
              {p}
            </div>
          </li>
        ))}
        <li>
          <div onClick={() => setPage(pagesAmount)}>&raquo;</div>
        </li>
      </ul>
    </div>
  );
};
