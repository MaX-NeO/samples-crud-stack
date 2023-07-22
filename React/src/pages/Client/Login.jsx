import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin} from '../../service/api';
import Cookies from 'js-cookie';
import { Navbar } from '../../components/Navbar';
import { Footer } from './../../components/Footer';



export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isUser') === 'true');
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userLogin(signin);
        if (res.data === "Login Successful !") {

            Cookies.set('emailx', signin.email);
            Cookies.set('isUser', 'true');
            console.log("login successfull")
            // setTimeout(() => {
            navigate('/user/dashboard');
            // }, 1500);

        } else if (res.data === "Invalid Password") {
            console.log('invalid pass');
        } else {
            console.log('invalid email')
        }
    };


    return (
        <>
            <div className='main'>
                <Navbar/>
                <div className='auth-container'>
                    <div className='auth-wrapper'>
                        <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
                            <h1 className='auth-heading'>Login</h1>
                            <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />

                            <button type='submit' className='auth-btn app-x-shadow'> Login </button>
                        </form>
                        <Link to='/register' className='auth-links'>Register</Link>
                    </div>
                </div>
                <Footer/>
            </div>

        </>
    )
}