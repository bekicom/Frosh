import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import { ReactComponent as Bayroq } from '../../assets/svgs/uzbbayroq.svg';


const Header = () => {
  return <>
    <header>
      <div className="h-left">
        <Link>
          Frosh
        </Link>
        <Link>
          1 USD  |  12343,48 UZS
        </Link>


      </div>
      <div className="h-right">

        <select name="" id="">
          <option value="">
            <Bayroq /> uz
          </option>
        </select>
        <select name="" id="">
          <option value="">
            UZS
          </option>
        </select>
        <button>
          E’lon joylash +
        </button>
      </div>

    </header>


  </>;
};

export default Header;
