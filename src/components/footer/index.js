import React from 'react';
import './style.css';
import { Fecebook, Instagram, Telegram } from 'assets/svgs';
import Appstor from '../../assets/images/Appstore.png';
import Playmarket from '../../assets/images/Googleplay.png';
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="f-about">
          <p>Frosh</p>
          <a href="">Biz haqimizda!</a>
          <a href="">E’lon qo’shish</a>
          <a href="">Shaxsiy kabinet</a>
          <a href="">Ro’yxatdan o’tish</a>
        </div>
        <div className="f-contact">
          <p>Biz bilan bog’laning</p>
          <a href="">+998 90 222-43-11</a>
          <a href="">info@frosh.uz</a>
          <a href="">Namangan viloyat, chust tumani, kamarsada</a>
        </div>
        <div className="f-networks">
          <p>Bizning ijtimoiy tarmoqlarimiz</p>
          <div className="ishtimoiy">
            <Telegram />
            <Instagram />
            <Fecebook />
          </div>
          <div className="app">
            <img src={Appstor} alt="" />
            <img src={Playmarket} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
