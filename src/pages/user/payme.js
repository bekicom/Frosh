import React from 'react';
import click from '../../assets/images/click.png';
import paymeimg from '../../assets/images/payme.png';
import './style.css';

export default function Payme() {
  return (
    <div className="container">
      <div className="payme">
        <p>To’lov turini tanlang</p>
        <div className="payme-click">
          <button>
            <img src={paymeimg} alt="" />
          </button>
          <button>
            <img src={click} alt="" />
          </button>
        </div>
        <p>To’lov summasini kriting</p>
        <label htmlFor="">
          <input type="text" placeholder="1.000.000" />
          UZS
        </label>
        <button>To’lovga o’tish</button>
      </div>
    </div>
  );
}
