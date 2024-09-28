import React from 'react';
import './Pagination.scss';

const Pagination = ({ totalPages, currentPage, paginate }) => {
  const maxPagesToShow = 3;
  const pageNumbers = [];

  let rangeStart = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let rangeEnd = Math.min(totalPages, rangeStart + maxPagesToShow - 1);

  if (rangeEnd - rangeStart < maxPagesToShow - 1) {
    rangeStart = Math.max(1, rangeEnd - maxPagesToShow + 1);
  }

  for (let i = rangeStart; i <= rangeEnd; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      <button
        className='pagination__left'
        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
        disabled={currentPage === 1}
      ></button>
      <ul className='pagination__list'>
        {rangeStart > 1 && totalPages > maxPagesToShow && (
          <>
            <li className='pagination__item' onClick={() => paginate(1)}>
              1
            </li>
            {rangeStart > 2 && <li className='pagination__dots'>...</li>}
          </>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`pagination__item ${
              currentPage === number ? 'inactive' : ''
            }`}
            onClick={() => currentPage !== number && paginate(number)}
          >
            {number}
          </li>
        ))}
        {rangeEnd < totalPages && totalPages > maxPagesToShow && (
          <>
            {rangeEnd < totalPages - 1 && (
              <li className='pagination__dots'>...</li>
            )}
            <li
              className='pagination__item'
              onClick={() => paginate(totalPages)}
            >
              {totalPages}
            </li>
          </>
        )}
      </ul>
      <button
        className='pagination__right'
        onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      ></button>
    </nav>
  );
};

export default Pagination;
