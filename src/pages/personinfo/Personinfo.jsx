import React from 'react'
import './Personinfo.css'
import info from "../../assets/svgs/personinfo/Vector (1).svg"
import elon from "../../assets/svgs/personinfo/Vector.svg"
import sevimli from "../../assets/svgs/personinfo/announcement_xcz4wogsydjn 1.svg"
import toldirish from "../../assets/svgs/personinfo/plus_9dsi9qqdr7o0 3.svg"

export default function Personinfo() {
    return (
        <div className='Personinfo'>
            <div className="personleft">

            </div>

            <div className="personright">
                <button>Shaxsiy ma’lumotlar    <img src={elon} alt="" /></button>
                <button>E’lonlarim <img src={sevimli} alt="" /> </button>
                <button>Sevimlilar <img src={info} alt="" /></button>
                <button>To’ldirish<img src={toldirish} alt="" /></button>
            </div>



        </div>
    )
}
