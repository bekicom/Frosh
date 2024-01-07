import React, { useState } from 'react';
import { Card } from 'components/card';
import { createPagination } from 'utils/createPagination';

const Announcements = () => {
  const data = Array.from({ length: 800 }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="container">
      <h2 className="title">{'Top E’lonlar'}</h2>
      <div className={`cards-container ${data?.length / 4 ? 'justify-between' : ''}`}>
        {[...data].splice(currentPage, 8)?.map((_, key) => (
          <Card key={key + currentPage} item={key + currentPage} />
        ))}
      </div>
      <div className="paginations">
        {createPagination(currentPage, 800 / 8).map((item) => (
          <button
            key={item}
            onClick={() => setCurrentPage(item === '...' ? currentPage : item)}
            className={currentPage === item && 'active'}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
