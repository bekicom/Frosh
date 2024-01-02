import React from 'react';
import "./register.css";
import regleft from "../../assets/images/regleft.png"

export default function Register() {
    return <div className='register'>
        <div className="register-card">
            <div className="reg-card-left">
                <p>Ro’yxatdan o’tish</p>
                <img src={regleft} alt="" />

            </div>
            <div className="reg-card-register">

                <form action="">
                    <p>Malumotlaringizni kiriting</p>
                    <input type="text" name="" id="" placeholder='Ismingiz' />
                    <input type="text" name="" id="" placeholder='Familiyangiz' />
                    <input type="text" name="" id="" placeholder='+998' />
                    <button>Sms kod yuborish</button>

                </form>
            </div>

        </div>



    </div>;
}
