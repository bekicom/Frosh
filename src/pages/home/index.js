import React from 'react';
import './style.css';
import Intro from './intro';
import Residentials from './residentials';

const Home = () => {
  return (
    <div className="home-container">
      <Intro />
      <Residentials />
    </div>
  );
};

export default Home;
