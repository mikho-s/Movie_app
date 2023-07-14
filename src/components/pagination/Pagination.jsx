import React from 'react';
import clas from './pagination.module.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 2;
  const paginationItems = [];

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  if (currentPage !== 1) {
    paginationItems.push(
      <div className={clas.page_item} key={1} onClick={() => handlePageChange(1)} >
        1
      </div>
    );
  }

  if (currentPage - visiblePages > 2) {
    paginationItems.push(<span className={clas.pagination_dots} key="dotsBefore">...</span>);
  }

  for (let i = currentPage - visiblePages; i < currentPage; i++) {
    if (i > 1) {
      paginationItems.push(
        <div className={clas.page_item} key={i} onClick={() => handlePageChange(i)}>
          {i}
        </div>
      );
    }
  }

  paginationItems.push(
    <div className={`${clas.page_item} ${clas.page_item_active}`} key={currentPage} onClick={() => handlePageChange(currentPage)} >
      {currentPage}
    </div>
  );

  if (totalPages > 500) {
    // setTotalPages(500);
    totalPages = 500;
  }

  for (let i = currentPage + 1; i <= currentPage + visiblePages; i++) {
    if (i < totalPages) {
      paginationItems.push(
        <div className={clas.page_item} key={i} onClick={() => handlePageChange(i)}>
          {i}
        </div>
      );
    }
  }

  if (currentPage + visiblePages < totalPages - 1) {
    paginationItems.push(<span className={clas.pagination_dots} key="dotsAfter">...</span>);
  }

  if (currentPage !== totalPages) {
    paginationItems.push(
      <div className={clas.page_item} key={totalPages} onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
        {totalPages}
      </div>
    );
  }



  return (
    <div className={clas.pagination_block}>
      {paginationItems}
    </div>
  );
};

export default Pagination;