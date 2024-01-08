import React from 'react';
import './Personinfo.css';
import info from '../../assets/svgs/personinfo/Vector (1).svg';
import elon from '../../assets/svgs/personinfo/Vector.svg';
import sevimli from '../../assets/svgs/personinfo/announcement_xcz4wogsydjn 1.svg';
import toldirish from '../../assets/svgs/personinfo/plus_9dsi9qqdr7o0 3.svg';
import Person from './Person';
import Announcements from '../../pages/home/announcements';
import { Route, Routes, useNavigate } from 'react-router-dom';

export default function Personinfo() {
  const navigate = useNavigate();
  return (
    <div className="Personinfo">
      <div className="personleft">
        <Routes>
          <Route index path="personinfo/person" element={<Person />} />
          <Route path="/Announcements" element={<Announcements />} />
        </Routes>
      </div>

      <div className="personright">
        <button onClick={() => navigate('personinfo/person')}>
          Shaxsiy ma’lumotlar <img src={elon} alt="" />
        </button>
        <button onClick={() => navigate('Announcements')}>
          E’lonlarim <img src={sevimli} alt="" />{' '}
        </button>
        <button onClick={() => navigate('Announcements')}>
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
