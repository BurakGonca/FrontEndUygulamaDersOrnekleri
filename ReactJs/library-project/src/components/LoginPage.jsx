import React, { useContext, useState } from 'react'
import AuthContext from '../context/AıthContext';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import '../assets/style/login.scss'

const LoginPage = () => {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e)=>{
        e.preventDefault(); //otomatik refresh atmasın diye yazdık methodu.
        try {
            await login(user,password);
            navigate("/")
        } catch (error) {
            alert("OOOoooopps! Login Failed!");
            setUser("");
            setPassword("");
        }
    }

  return (
    <div className='login-page'>
        <div className="head">
            <h2>BilgeAdam Boost</h2>
            <h2>Ankara-16</h2>
            <h2>Kütüphanesi</h2>
        </div>
        <form className='login-form' onSubmit={handleLogin}>
            <h3>Giriş Yap</h3>
            <input value={user} onChange={e=>setUser(e.target.value)} type="text" placeholder='Kullanıcı Adı' />
            <input value={password} onChange={e=>setPassword(e.target.value)}  type="text" placeholder='Parola' />
            <input type="submit" value={"Giriş"} />
            <Link to="/">Ziyaretçi Girişi</Link>
        </form>
    </div>
  )
}

export default LoginPage