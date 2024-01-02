import React from 'react';
import { ReactComponent as Filter } from 'assets/svgs/filter.svg';
import { ReactComponent as Search } from 'assets/svgs/search.svg';

const Intro = () => {
  return (
    <div className="intro">
      <div className="content">
        <h2 className="title"> {'Keling sizning orzuyingizdagi\nuyni topaylik!'} </h2>
        <form className="form">
          <div className="search-bar">
            <button type="button" className="filter">
              <Filter />
              <span>Filter</span>
            </button>
            <input type="text" placeholder="Qidirish" />
            <button type="submit">
              <Search />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Intro;
