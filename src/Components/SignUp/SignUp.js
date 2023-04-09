import React from 'react';
import '../../css/Login.css';

export const SignUp = (props) => {
    return (<div className='signUpScreen'>
            <form>
                <h1>
                    Sign in
                </h1>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button> Sign In</button>
                <span>
                    <h4> Are you new here?
                        <span>
                            Sign Up Now.
                        </span>
                    </h4>
                </span>
            </form>
        </div>);
};