import React, {useState} from 'react';
import '../../css/Login.css';
import {GoMarkGithub} from 'react-icons/go';
import {MdLogin} from 'react-icons/md';
import {SignUp} from "../SignUp/SignUp";

export const Login = (props) => {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className='container'>
            <img src='https://static1.srcdn.com/wordpress/wp-content/uploads/2018/08/Ryan-Reynolds-in-Deadpool.jpg'
                 className='img'/>
            <div className='login'>
                <div className="login__header">
                    <GoMarkGithub color='white' size='30px' className='login__github'/>
                    <button className='login__button'>
                        <MdLogin color='white' size='30px' className='login__signin'/> Sign in
                    </button>
                </div>
                <div className='login__body'>
                    {
                        signIn ? (<div>
                            <SignUp />
                        </div>) : (<div>
                            <h1>
                                Practice with TMDB API
                            </h1>
                            <h2>
                                There is some information about movies and actors.
                            </h2>
                            <h3>
                                Authorization achieved thanks to redux & firebase.
                            </h3>
                            <form className='login__form'>
                                <input type='text' placeholder='Email Address'/>
                                <button onClick={() => {setSignIn(true)}}>
                                    Get started
                                </button>
                            </form>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;