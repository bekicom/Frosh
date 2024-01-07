import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Person from './info';
import './style.css';
import info from '../../assets/svgs/personinfo/Vector (1).svg';
import elon from '../../assets/svgs/personinfo/Vector.svg';
import sevimli from '../../assets/svgs/personinfo/announcement_xcz4wogsydjn 1.svg';
import toldirish from '../../assets/svgs/personinfo/plus_9dsi9qqdr7o0 3.svg';
import MyAnnouncements from './my-announcements';

export default function UserInfo() {
  const navigate = useNavigate();
  return (
    <div className="personinfo container">
      <div className="personleft">
        <Routes>
          <Route index path="/" element={<Person />} />
          <Route path="/my-announcements" element={<MyAnnouncements />} />
        </Routes>
      </div>

      <div className="personright">
        <button onClick={() => navigate('/personinfo')}>
          Shaxsiy ma’lumotlar <img src={elon} alt="" />
        </button>
        <button onClick={() => navigate('my-announcements')}>
          E’lonlarim <img src={sevimli} alt="" />
        </button>
        <button>
          Sevimlilar <img src={info} alt="" />
        </button>
        <button>
          To’ldirish
          <img src={toldirish} alt="" />
        </button>
      </div>
    </div>
  );
}
