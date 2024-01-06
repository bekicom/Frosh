import React from 'react';
import { Card } from 'components/card';

const Announcements = () => {
  return (
    <div className="container">
      <h2 className="title">{'Top E’lonlar'}</h2>
      <div className="cards-container">
        {[...Array(20)].map((_, key) => (
          <Card key={key} item={key} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
