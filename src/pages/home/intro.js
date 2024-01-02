import React from 'react';
import { ReactComponent as Filter } from 'assets/svgs/filter.svg';
import { ReactComponent as Search } from 'assets/svgs/search.svg';

const filters = [
  { label: 'Sotish', value: 'sell' },
  { label: 'Turar joy majmuasi', value: 'resident_complex' },
  { label: 'Ijara', value: 'rent' }
];

const Intro = () => {
  const seelectFilter = (
    <div className="filter">
      <button type="button">
        <Filter />
        <span>Filter</span>
      </button>
      <ul className="select-options">
        {filters.map((item) => (
          <li key={item.value}>{item.label}</li>
        ))}
      </ul>
    </div>
  );

  const searchBar = (
    <div className="search-bar">
      {seelectFilter}
      <input type="text" placeholder="Qidirish" />
      <button type="submit">
        <Search />
      </button>
    </div>
  );

  return (
    <div className="intro">
      <div className="content">
        <h2 className="title"> {'Keling sizning orzuyingizdagi\nuyni topaylik!'} </h2>
        <form className="form">{searchBar}</form>
      </div>
    </div>
  );
};

export default Intro;
